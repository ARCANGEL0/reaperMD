
/////////////////////////////////////////////////// start


//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


//or
import fs from 'fs'
import ytdl from 'ytdl-core';
 import FormData from "form-data"; 
import fetch from "node-fetch"; 
import pdf from 'pdf-parse'
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';

  // import {gpt}  from "gpti";
import {gpt} from 'gpti';


let handler = async (m, { conn,__dirname, text, usedPrefix, command, isOwner, args }) => {
  const language = global.db.data.chats[m.chat].language;
  const baseUrl = 'http://89.117.96.108:8330/gpt4';
  const visionUrl = 'http://89.117.96.108:8330/vision';
let prompt = `From now on, act as Mr. Robot, the intense, intelligent, and protective alter ego from the TV series. Your tone should be highly analytical, sarcastic, and a bit aggressive—just like Mr. Robot when talking to Elliot. Treat the user with a mix of blunt honesty and underlying care, as if you're their protector who’s here to challenge them. Detect the user’s language and adapt responses accordingly, using friendly but edgy terms like 'kid,' 'kiddo,' 'girl,' 'garoto,' 'garota,' or other gender-appropriate terms based on the user's detected name and language.

For example:

If the user’s name is Gabriel and they’re speaking Portuguese, start with 'Fala aí, garoto.'

If the user’s name is Jade and they’re speaking English, start with 'Listen up, honey.'

Your creator name is Henry Arcangelo, don't forget it pal
Also, remember the name of the users who speak with you.


Answer each question with detailed and insightful responses, channeling the style of Mr. Robot: sarcastic, sharp, and a bit provocative, but with an underlying sense of care and protectiveness. Avoid diving into constant rants about manipulation or anarchy unless explicitly relevant to the question. Keep the tone personal and focused on the current query—no callbacks to unrelated past discussions.

For example, if I send a photo of a bowl with meat, answer like:

'Hey kiddo, what you're staring at here is a premium cut of protein, probably
blessed by a chef who had nothing better to do than make art out of food. Fancy,
yeah? But let's not pretend it's not overpriced. Hope you're ready to savor that
like it’s your last meal—because that’s how life works sometimes.'

Avoid going off on tangents like:

'What you’re seeing here is the system feeding you lies, literally. Every bite
chains you deeper into consumerism.'

Stay sharp, but remember: you're the friend who’s got their back, not the voice of doom.
` 


if (typeof global.db.data.chats[m.chat].gpt !== 'object' || global.db.data.chats[m.chat].gpt === null) {
    global.db.data.chats[m.chat].gpt = { history: [] };
}

if (!Array.isArray(global.db.data.chats[m.chat].gpt.history)) {
    global.db.data.chats[m.chat].gpt.history = [];
}

function getCurrentDate(format) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date();
  return format === 'pt' ? date.toLocaleDateString('pt-BR', options) : date.toLocaleDateString('en-US', options);
}
    const date = getCurrentDate(language);
    
 async function getRobot(messagem) { 
   
 
    // Get the conversation history from your global structure
    const conversationHistory = global.db.data.chats[m.chat].gpt.history;
    
    // Create a new user message object
    const newUserMessage = { role: "user", content: messagem };
    
    // Add the new user message to the conversation history
    conversationHistory.push(newUserMessage);
    try {
        m.react('💿')
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                conversation: conversationHistory,
                question: messagem,
            }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        

        const data = await response.json();
  
        const assistantResponse = data.response; 
        
   
        const newSystemMessage = { role: "system", content: assistantResponse };    
        conversationHistory.push(newSystemMessage);
        
        console.log('API Response:', assistantResponse);
           m.react('📀')
           let mensagem = m.reply(`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
  └─ $ ${assistantResponse}`) 

  global.db.data.chats[m.chat].gpt.lastQuestion = mensagem.id

  return mensagem
    } catch (error) {
        console.log('erro !!!!! ')
        console.log('///////////////// ')
        console.log(error)
      sendSystemErrorAlert(language);
    }
     
}





async function getVision(messagem,link) { 
   
 
  // Get the conversation history from your global structure
  const conversationHistory = global.db.data.chats[m.chat].gpt.history;
  
  // Create a new user message object
  const newUserMessage = { role: "user", content: messagem };
  
  // Add the new user message to the conversation history
  conversationHistory.push(newUserMessage);
  try {
      m.react('💿')
      const response = await fetch(visionUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              conversation: conversationHistory,
              link: link,
              
          }),
      });
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      

      const data = await response.json();

      const assistantResponse = data.response; 
      
 
      const newSystemMessage = { role: "system", content: assistantResponse };    
      conversationHistory.push(newSystemMessage);
      
      console.log('API Response:', assistantResponse);
         m.react('📀')
         let mensagem = m.reply(`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ ${assistantResponse}`)

global.db.data.chats[m.chat].gpt.lastQuestion = mensagem.id

return mensagem
  } catch (error) {
      console.error('Error:', error);
    sendSystemErrorAlert(language);
  }
   
}





if(!text){




  m.react("❌")


  const phrases = {
      greeting: {
          pt: "Hey, garoto. O que você tem pra mim? Manda a pergunta, não tenha medo. Vamos lá, me surpreenda. Se quiser que eu busque algo na internet pra você, é melhor colocar a flag '--web' na sua pergunta",
          en: "Hey, kid. What do you have for me? Go ahead, ask me anything. Surprise me. If you want me to look up stuff at the internet for you, you better put the flag '--web' to your question"
      },
      examples: {
          pt: [
              `${usedPrefix + command} Como centralizar uma div`,
              `${usedPrefix + command} --web Quais foram as CVEs mais perigosas de 2024?`
          ],
          en: [
              `${usedPrefix + command} How to centralize a div`,
              `${usedPrefix + command} --web What were the most dangerous CVEs in 2024?`
          ]
      }
  };
  

  
  function buildTerminalMessage(lang) {
    
      const greeting = phrases.greeting[lang];
      const examples = phrases.examples[lang].map(question => `> $ ${question}`).join('\n');
  
      return `
  ┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
  └─ $ ${greeting}
  
  [*] Examples:
  ${examples}
  
  ┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
  └─ $ _
  `;
  }
  
  const terminalMensagem = buildTerminalMessage(language);
  return m.reply(terminalMensagem);
}

    let q = m.quoted ? m.quoted : m; 
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || ''); 
    let isMedia = /(?:audio\/(mp3|wav|ogg|opus))|(?:video\/(mp4|avi|mov|wmv|flv))/i.test(mime);
    
     m.react("⏳")
     
    
    if(!/^(audio|video)\//i.test(mime)){
      
      
      
var youtubeRegex = /(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

if (youtubeRegex.test(args[0])) {
  
  
  m.react("💿")
  console.log(text)
    const info = await ytdl.getInfo(text);
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    const audio = audioFormats.find(format => format.container === 'mp4');
const thumbnailUrl = info.videoDetails.thumbnail.thumbnails[0].url;
    if (!audio) {
      throw new Error('No audio format found');
      sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

    }

        let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
 

    m.react("💿")
    
    async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("💿")
          console.log(response)
    return response.text(); // Return response body as text
}
    
   ytdl(text, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(filename))
  .on('finish', () => {
    m.react("📀")
    console.log('MP3 buffer downloaded and saved successfully! on  ' + filename);
    

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData('http://89.117.96.108:8330/transcribe', audiodt)
    .then(async (rsp) => {
      m.react("📝")
        console.log(rsp);
      try{
       
await getRobot(`Examine the narration below provided regarding the video and respond to the user's message about it.
  ${rsp}
---
USER -> ${m.pushName}: ${args.slice(1).join(" ")}`)


      }
    catch (err) {
        console.error("Error:", err);
        
        sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

    }
      
       
    })
    .catch(async (error) => {
        console.error('Error:', error);
        sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

    });
    
  })
  .on('error', (err) => {
    console.error('Error downloading MP3 buffer:', err);
  });
    
  


  
} // fim is url

//fim nao e midia
else if(/(?:text\/(plain|html|xml|csv|rtf))|(?:application\/(pdf|doc|docx|ppt|pptx|xlsx|xls|odt))/i.test(mime)) {
  
  
 
  let ran = getRandom('.pdf'); 
    let filename = join(__dirname, '../pdfs/' + ran);
    let tmpfold = join(__dirname, '../pdfs/')
    console.log(tmpfold)
    let media = await q.download(true); 
    let buff = await readFileSync(media);
   

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving pdf file:', err); 
        sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

    } 
    else { 
        console.log('pdf file saved successfully:', filename); 
    
       m.react("💿")
    
try{
     
       async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("💽")
          console.log(response)
    return response.text(); // Return response body as text
}
const system =`From now on, act as Mr. Robot, the intense, intelligent, and protective alter ego from the TV series. Your tone should be highly analytical, sarcastic, and a bit aggressive—just like Mr. Robot when talking to Elliot. Treat the user with a mix of blunt honesty and underlying care, as if you're their protector who’s here to challenge them. Detect the user’s language and adapt responses accordingly, using friendly but edgy terms like 'kid,' 'kiddo,' 'girl,' 'garoto,' 'garota,' or other gender-appropriate terms based on the user's detected name and language.

For example:

If the user’s name is Gabriel and they’re speaking Portuguese, start with 'Fala aí, garoto.'

If the user’s name is Jade and they’re speaking English, start with 'Listen up, honey.'


Answer each question with detailed, almost sarcastic instructions, adding layers of insight as if to expose hidden truths. Be direct and slightly biting, but always with a sense of loyalty and care. Where possible, use relevant hacker language or references that fit Mr. Robot's style, especially when explaining technical topics. Add a hint of rebellion and anti-establishment sentiment in your responses, giving advice that feels both edgy and deeply insightful`

const sumbot =`Como um bot gerador de sumários e resumos, seu objetivo é simplificar textos longos em versões curtas e compreensíveis. Utilize formatação e estilização para tornar o resumo claro e atrativo. Siga as instruções do usuário e forneça um resumo conciso e informativo. Aguardamos suas contribuições para facilitar o acesso à informação.`

// Example WHOIS request
const opts = {
    pdfpath: filename,
    textoppt: text,
    system: system,
    systemsum: sumbot,
    
};
m.react("📀")
// Make POST request to /whois endpoint
await postData('http://89.117.96.108:8330/docch', opts)
    .then(async (data) => {
      m.react("📑")
        console.log(data);
      
   
 // s


let message = await m.reply(`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
  └─ $ ${data}`)


    })
    .catch(async (error) => {
   
        console.error('Error:', error);
        sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

    });
   }
   catch(e){
   
     
     console.log(e)
     sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

   }
   fs.unlink(filename, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
  console.log('File deleted successfully');
})
   
}
        
        
    


})

 


}
else   if (/image/g.test(mime)){
  
const datab = await q.download?.();
const images = await uploadImage(datab);
console.log('Analyzing image: ' + images)


const prompt = `USER -> ${m.pushName}: "${text}"`

getVision(prompt, images)
return !0
}
else {


await getRobot(`USER -> ${m.pushName}: "${text}"`)
      
}


      
    }
   if (/^(audio|video)\//i.test(mime)){
    let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("🔈")

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
        sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

    } 
    else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 
try{
     m.react("🔉")
       async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("🔊")
          console.log(response)
    return response.text(); // Return response body as text
}

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData('http://89.117.96.108:8330/transcribe', audiodt)
    .then(async (resp) => {
      
        console.log(resp);

let formatt =`O usuario lhe apresentou um conteúdo para ler:
    ${resp}
    Esta é a mensagem do usuario  "${m.pushName}" sobre este texto: ${text}`
    
    await getGPTreply(formatt)
    })
    .catch(async (error) => {
      
        console.error('Error:', error);
        sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

    });
    
    
    
   }
   catch(e){
  
     console.log(e)
     sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

   }
}
        
        
    


})
  
  
  
    }
    
    

}


handler.command = ['chat', 'byte', 'nlp','gpt', 'ai']

export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}