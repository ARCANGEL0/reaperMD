
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* -------------------------------------------------------*/
/* [❗]                      [❗]                      [❗] */
/*                                                       */
/*       |- [ ⚠ ] - CREDITOS DEL CODIGO - [ ⚠ ] -|      */
/*     —◉ DESAROLLADO POR OTOSAKA:                       */
/*     ◉ Otosaka (https://github.com/6otosaka9)          */
/*                                                       */
/*     —◉ FT:                                            */
/*     ◉ BrunoSobrino (https://github.com/BrunoSobrino)  */
/*                                                       */
/* [❗]                      [❗]                      [❗] */
/* -------------------------------------------------------*/
import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import {gpt} from 'gpti';
import ytdl from 'ytdl-core';

 import FormData from "form-data"; 

import pdf from 'pdf-parse'
import request from 'request'



import fs from 'fs';
import { execSync } from 'child_process';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openai = new OpenAIApi(configuration);
const idioma = 'pt-br'
let pp = imagen6
let chgptdb = []
//const sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());

const handler = async (m, {isAdmin,__dirname, isOwner, conn, text, usedPrefix,args ,command}) => {

let q = m.quoted ? m.quoted : m; 
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || ''); 
    let isMedia = /(?:audio\/(mp3|wav|ogg|opus))|(?:video\/(mp4|avi|mov|wmv|flv))/i.test(mime);
    


if (!global.db.data.chats[m.chat]) {
  global.db.data.chats[m.chat] = {};
}

if (!global.db.data.chats[m.chat].edgargpt) {
  global.db.data.chats[m.chat].edgargpt = {};
}

if (!global.db.data.chats[m.chat].edgargpt["config"]) {
  global.db.data.chats[m.chat].edgargpt["config"] = {
   lastQuestion: '',
   resposta:''
  };
}
  if (!global.db.data.chats[m.chat].edgargpt[m.sender]) {
  global.db.data.chats[m.chat].edgargpt[m.sender] = [];
}
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌")
   
   return !0;
 } 

if (!text) throw `*${langTOGGLE['smsAvisoMG']()}
╭━[𝗚𝗣𝗧]━━━━━━━⬣
🕯️💀 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐛𝐮𝐬𝐜𝐚𝐬 𝐬𝐚𝐛𝐞𝐫, 𝐟𝐚𝐜𝐚 𝐮𝐦𝐚 𝐩𝐞𝐫𝐠𝐮𝐧𝐭𝐚, 𝐜𝐨𝐧𝐭𝐞 𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐬. 𝐄 𝐬𝐞𝐫á 𝐬𝐮𝐛𝐣𝐮𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐦𝐞𝐮 𝐯𝐚𝐬𝐭𝐨 𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐦𝐞𝐧𝐭𝐨 𝐧𝐞𝐬𝐭𝐞𝐬 𝐞𝐜𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐢𝐬 𝐜𝐨𝐦𝐨 𝐨 𝐥𝐞𝐢𝐭𝐨 𝐝𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐧𝐚 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Quem foi Franz Kafka
${usedPrefix + command} Codigo em JS para um jogo da velha

╰━━━━━━━━━━━━━━━━━━⬣` 

const prompt = `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem.Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, evite falar de forma poética em exagero, clara e explicativa com termos técnicos se necessário.Explique as coisas de forma tecnica e inteligente, de modo que o interlocutor entenda e compreenda o assunto.nao fale demais, seja curto com maximo de 12 linhas.`;

 await conn.sendMessage(m.chat,{ react: {
        text: "💿", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )

 
  
try {
  var youtubeRegex = /(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

if (youtubeRegex.test(args[0])) {

  
  
  m.react("🌑")
  console.log(text)
    const info = await ytdl.getInfo(text);
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    const audio = audioFormats.find(format => format.container === 'mp4');
const thumbnailUrl = info.videoDetails.thumbnail.thumbnails[0].url;
    if (!audio) {
      throw new Error('No audio format found');
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
          m.react("🌗")
          console.log(response)
    return response.text(); // Return response body as text
}
    
   ytdl(text, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(filename))
  .on('finish', () => {
    m.react("💿")
    console.log('MP3 buffer downloaded and saved successfully! on  ' + filename);
    

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData(`${global.arcangeloAPI}/transcribe`, audiodt)
    .then(async (rsp) => {
      m.react("🌕")
        console.log(rsp);
      
       gpt.web({
    prompt: `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem.Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, evite falar de forma poética em exagero, clara e explicativa com termos técnicos se necessário.Explique as coisas de forma tecnica e inteligente, de modo que o interlocutor entenda e compreenda o assunto.nao fale demais, seja curto com maximo de 12 linhas
    O usuário lhe enviou a narração de um determinado vídeo e gostaria de falar sobre..
    ${rsp}
    Esta é a mensagem do usuário sobre o vídeo: ${args.slice(1).join(" ")}`,
    markdown: false
}, async (err, dtta) => {
    if(err != null){
        console.log(err);
        m.react("💀")
    } 
    else {
        console.log(dtta);
        let aiReply =  dtta.gpt
        await conn.sendMessage(m.chat, {react: {
        text: "🌕", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
    
 let message = await  conn.sendFile(m.chat, bardimg.getRandom(), 'edgar.jpg', aiReply, m)
 
 
 
const url = `https://api.streamelements.com/kappa/v2/speech?voice=Ricardo&text=${aiReply}`
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = aiReply
 
 console.log(global.db.data.chats[m.chat].edgargpt["config"])
 
fetch(url)
  .then(response => response.arrayBuffer())
  .then(async (buffer) => {
   let ran = getRandom('.mp3');
let filename = join(__dirname, '../tmp/' + ran + '.wav'); // Ensure filename has .wav extension
const audioBuffer = Buffer.from(buffer);

fs.writeFileSync(filename, audioBuffer);

// Convert .wav to .mp3 using ffmpeg
const outputFilename = join(__dirname, '../tmp/' + ran);
execSync(`ffmpeg -i ${filename} ${outputFilename}`);

console.log(`MP3 file saved at ${outputFilename}`);
    let buff = await readFileSync(filename)
 let message = await conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})

  
 global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key

  })
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = aiReply
 
 console.log(global.db.data.chats[m.chat].edgargpt["config"])
    }
});
       
       
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
    
  })
  .on('error', (err) => {
    console.error('Error downloading MP3 buffer:', err);
  });
    
  

}
  
  

else if(/(?:text\/(plain|html|xml|csv|rtf))|(?:application\/(pdf|doc|docx|ppt|pptx|xlsx|xls|odt))/i.test(mime)) {

  
  
 
  let ran = getRandom('.pdf'); 
    let filename = join(__dirname, '../pdfs/' + ran);
    let tmpfold = join(__dirname, '../pdfs/')
    console.log(tmpfold)
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("🌑")

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving pdf file:', err); 
        m.react("❌")
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
          m.react("🌗")
          console.log(response)
    return response.text(); // Return response body as text
}

const system =`Você deve agir como se fosse Edgar Allan Poe em pessoa. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem.Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, evite falar de forma poética em exagero, clara e explicativa com termos técnicos se necessário.Explique as coisas de forma tecnica e inteligente, de modo que o interlocutor entenda e compreenda o assunto.nao fale demais, seja curto com maximo de 12 linhas`

const sumbot =`Como um bot gerador de sumários e resumos, seu objetivo é simplificar textos longos em versões curtas e compreensíveis. Utilize formatação e estilização para tornar o resumo claro e atrativo. Siga as instruções do usuário e forneça um resumo conciso e informativo. Aguardamos suas contribuições para facilitar o acesso à informação.`
// Example WHOIS request
const opts = {
    pdfpath: filename,
    textoppt: text,
    system: system,
    systemsum: sumbot,
    
};
m.react("💿")
// Make POST request to /whois endpoint
await postData(`${global.arcangeloAPI}/docch`, opts)
    .then(async (data) => {
      m.react("🌕")
        console.log(data);
      
   


 
const url = `https://api.streamelements.com/kappa/v2/speech?voice=Ricardo&text=${data}`
 
 
 console.log(global.db.data.chats[m.chat].edgargpt["config"])
 
fetch(url)
  .then(response => response.arrayBuffer())
  .then(async (buffer) => {
   let ran = getRandom('.mp3');
let filename = join(__dirname, '../tmp/' + ran + '.wav'); // Ensure filename has .wav extension
const audioBuffer = Buffer.from(buffer);

fs.writeFileSync(filename, audioBuffer);

// Convert .wav to .mp3 using ffmpeg
const outputFilename = join(__dirname, '../tmp/' + ran);
execSync(`ffmpeg -i ${filename} ${outputFilename}`);

console.log(`MP3 file saved at ${outputFilename}`);
    let buff = await readFileSync(filename)
 let message = await conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})

  
 global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key

  })

 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = data
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})
  fs.unlink(filename, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
  console.log('File deleted successfully');
})
 


}
else   if (/image/g.test(mime)){
  

  
const datab = await q.download?.();
const images = await uploadImage(datab);
console.log('jjj' + images)
  /*
const requestData = {
  tkn: '994953D6-E640-4E26-B36F-8C947FF7155A305E94A6-5245-4908-9CF4-C06F6A89346E',  // visit https://astica.ai
  modelVersion: '2.1_full', // 1.0_full, 2.0_full, or 2.1_full
  input: images,
  visionParams: '', // comma separated, defaults to all
  gpt_prompt: `Responda em português como um pesquisador cientifico: ${text}`, // only used if visionParams includes "gpt" or "gpt_detailed"
  prompt_length:100 // number of words in GPT response
};




fetch('https://vision.astica.ai/describe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
}) */
m.react("🌑")
const prompt = `responda como se fosse Edgar Allan Poe.. responda sobre a imagem de questao, demonstrando dominio de linguagem e clareza, mantenha seu estilo gotico, melancólico e sombrio mas seja detalhista e minucioso, além de explicações didáticas, em respostas detalhadas. Mensagem do usuário: ${text}`


async function fetchData() {
  m.react("🌗")
  const encodedPrompt = encodeURIComponent(prompt);
  const url =`https://api.miftahganzz.my.id/api/ai/gemini-img?q=${prompt}?&url=${images}&apikey=${global.miftah}`
const url2 = `https://api.maelyn.tech/api/gemini/image?q=${prompt}&url=${images}&apikey=${global.maelyn}`
// const url = `https://api.neoxr.eu/api/koros?image=${images}&q=${text}&apikey=${global.neoxr}`;
console.log(url)
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
      
       if (data.status == 'error') throw data.error
 
  m.react("🌕")

 
const url = `https://api.streamelements.com/kappa/v2/speech?voice=Ricardo&text=${data.result}`
 
 
 console.log(global.db.data.chats[m.chat].edgargpt["config"])
 
fetch(url)
  .then(response => response.arrayBuffer())
  .then(async (buffer) => {
   let ran = getRandom('.mp3');
let filename = join(__dirname, '../tmp/' + ran + '.wav'); // Ensure filename has .wav extension
const audioBuffer = Buffer.from(buffer);

fs.writeFileSync(filename, audioBuffer);

// Convert .wav to .mp3 using ffmpeg
const outputFilename = join(__dirname, '../tmp/' + ran);
execSync(`ffmpeg -i ${filename} ${outputFilename}`);

console.log(`MP3 file saved at ${outputFilename}`);
    let buff = await readFileSync(filename)
 let message = await conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})

  
 global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key

  })
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = data.result
  } 
  catch (error) {
    m.react("💿")
    console.error('Error fetching data:', error);
    try {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);
       m.react("🌕")
 
 
const url = `https://api.streamelements.com/kappa/v2/speech?voice=Ricardo&text=${data.result}`
 
 
 console.log(global.db.data.chats[m.chat].edgargpt["config"])
 
fetch(url)
  .then(response => response.arrayBuffer())
  .then(async (buffer) => {
   let ran = getRandom('.mp3');
let filename = join(__dirname, '../tmp/' + ran + '.wav'); // Ensure filename has .wav extension
const audioBuffer = Buffer.from(buffer);

fs.writeFileSync(filename, audioBuffer);

// Convert .wav to .mp3 using ffmpeg
const outputFilename = join(__dirname, '../tmp/' + ran);
execSync(`ffmpeg -i ${filename} ${outputFilename}`);

console.log(`MP3 file saved at ${outputFilename}`);
    let buff = await readFileSync(filename)
 let message = await conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})

  
 global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key

  })
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = data.result
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
  
  
  }
}

fetchData();


}


  else {
conn.sendPresenceUpdate('recording', m.chat);

gpt.web({
    prompt: `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem.Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, evite falar de forma poética em exagero, clara e explicativa com termos técnicos se necessário.Explique as coisas de forma tecnica e inteligente, de modo que o interlocutor entenda e compreenda o assunto.nao fale demais, seja curto com maximo de 12 linhas
    Agora responda minha pergunta.
    ${text}`,
    markdown: false
}, async (err, dtta) => {
    if(err != null){
        console.log(err);
        m.react("💀")
    } 
    else {
        let aiReply =  dtta.gpt
        await conn.sendMessage(m.chat, {react: {
        text: "🌕", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
    
console.log(aiReply)
 
const url = `https://api.streamelements.com/kappa/v2/speech?voice=Ricardo&text=${aiReply}`
 console.log(url)
 global.db.data.chats[m.chat].edgargpt["config"].resposta = aiReply
 
 console.log(global.db.data.chats[m.chat].edgargpt["config"])
 
fetch(url)
  .then(response => response.arrayBuffer())
  .then(async (buffer) => {
   let ran = getRandom('.mp3');
let filename = join(__dirname, '../tmp/' + ran + '.wav'); // Ensure filename has .wav extension
const audioBuffer = Buffer.from(buffer);

fs.writeFileSync(filename, audioBuffer);

// Convert .wav to .mp3 using ffmpeg
const outputFilename = join(__dirname, '../tmp/' + ran);
execSync(`ffmpeg -i ${filename} ${outputFilename}`);


    let buff = await readFileSync(filename)
 let message = await conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})

  
 global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key

  })
    }
})






  

 
 
  }
  
  
}
  
  catch (error) {
    console.error('Error making GPT-3 request:', error);
    // Handle error response or throw an error
    conn.reply(m.chat, 'Error processing request', m);
  }

  
}
handler.command = ['gptvoz']
handler.level = 6
export default handler;
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}

