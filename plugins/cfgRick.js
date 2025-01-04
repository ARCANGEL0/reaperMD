
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────



import uploadImage from '../lib/uploadImage.js';
import uploadFile from '../lib/uploadFile.js'
import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import { G4F } from "g4f"
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openai = new OpenAIApi(configuration);
const idioma = 'pt-br'
let pp = imagen6


const g4f = new G4F();
const rick = [
  "https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png",
  "https://banner2.cleanpng.com/20180320/hwq/kisspng-pocket-mortys-rick-sanchez-morty-smith-computer-ic-rick-avatar-blue-vers-icon-5ab1ccd860a082.9774853115216017523958.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8E7MyaxDZvT9TzylOh8NGyHCcwnNwxhhOg&usqp=CAU",
  "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fblack-hat-vs-rick-sanchez-v0-ajmcr8iuk82a1.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D4e0a7d0e145bcde86432c11dced03bf2c02fc752",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZQay3lMEHolK6tjS0SIm6YGfmzOr7TRgAA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxUBRaTBXFflwZTqcBpH-BSYeDFxGCXXGYQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXCrRTsXdRnBsL88_aiH5YC7DQY65pLnH-w&usqp=CAU"
];


//const sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());





if (!global.db.data.chats[m.chat]) {
  global.db.data.chats[m.chat] = {};
}
if(global.db.data.chats[m.chat].ricksan == null){
  global.db.data.chats[m.chat].ricksan = true
}
if (!global.db.data.chats[m.chat].rickgpt) {
  global.db.data.chats[m.chat].rickgpt = {};
}

if (!global.db.data.chats[m.chat].rickgpt["config"]) {
  global.db.data.chats[m.chat].rickgpt["config"] = {
   lastQuestion: '',
   resposta:''
  };
}
  if (!global.db.data.chats[m.chat].rickgpt[m.sender]) {
  global.db.data.chats[m.chat].rickgpt[m.sender] = [];
}



const handler = async (m, {conn, text, usedPrefix, isOwner,isAdmin,command}) => {
  const language = global.db.data.chats[m.chat].language;
  const baseUrl = 'http://89.117.96.108:8330/rick';
  const visionUrl = 'http://89.117.96.108:8330/rickEye';

  function getCurrentDate(format) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date();
    return format === 'pt' ? date.toLocaleDateString('pt-BR', options) : date.toLocaleDateString('en-US', options);
  }
      const date = getCurrentDate(language);
      



  async function getRick(messagem) { 
   
 
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
           let messages = await conn.sendMessage(m.chat, {
            text: `┌──[ 𝙼𝚛.𝚁𝚘𝚋𝚘𝚝 ]─[~/𝚁̷𝙸̷𝙲̷𝙺̷ 𝚂̷𝙰̷𝙽̷𝙲̷𝙷̷𝙴̷𝚉̷]─[${date}] 
  └─ $ ${assistantResponse}`,
            contextInfo: {
              externalAdReply: {
                title: "𝙍𝙞𝙘𝙠 𝙎𝙖𝙣𝙘𝙝𝙚𝙯 🧪🧬",
                body: "",
                thumbnailUrl: rick.getRandom(),
                sourceUrl: "",
                mediaType: 1,
                showAdAttribution: false,
                renderLargerThumbnail: false,
              },
            },
          }, { quoted: m });
      
      
          
       
      global.db.data.chats[m.chat].rickgpt["config"].lastQuestion = messages.key

     

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
         let messages = await conn.sendMessage(m.chat, {
          text: `┌──[ 𝙼𝚛.𝚁𝚘𝚋𝚘𝚝 ]─[~/𝚁̷𝙸̷𝙲̷𝙺̷ 𝚂̷𝙰̷𝙽̷𝙲̷𝙷̷𝙴̷𝚉̷]─[${date}] 
└─ $ ${assistantResponse}`,
          contextInfo: {
            externalAdReply: {
              title: "𝙍𝙞𝙘𝙠 𝙎𝙖𝙣𝙘𝙝𝙚𝙯 🧪🧬",
              body: "",
              thumbnailUrl: rick.getRandom(),
              sourceUrl: "",
              mediaType: 1,
              showAdAttribution: false,
              renderLargerThumbnail: false,
            },
          },
        }, { quoted: m });
    
    
        
     
    global.db.data.chats[m.chat].rickgpt["config"].lastQuestion = messages.key

return mensagem
  } catch (error) {
      console.error('Error:', error);
    sendSystemErrorAlert(language);
  }
   
}


const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  
  
if (!text) { 
    m.react("🖕🏻")
  return m.reply(`╭━[𝙍𝙞𝙘𝙠]━━━━━━━⬣
𖠏 𝘈𝘩, 𝘲𝘶𝘦 𝘮𝘢𝘳𝘢𝘷𝘪𝘭𝘩𝘢, 𝘮𝘢𝘪𝘴 𝘶𝘮 𝘨𝘦̂𝘯𝘪𝘰 𝘱𝘰𝘳 𝘢𝘲𝘶𝘪 𝘤𝘰𝘮 𝘱𝘳𝘰𝘣𝘭𝘦𝘮𝘢𝘴 𝘱𝘢𝘳𝘢 𝘧𝘰𝘳𝘮𝘶𝘭𝘢𝘳 𝘶𝘮𝘢 𝘱𝘦𝘳𝘨𝘶𝘯𝘵𝘢 𝘥𝘪𝘳𝘦𝘪𝘵𝘰. 

𝘝𝘢𝘮𝘰𝘴 𝘭𝘢́, 𝘴𝘦𝘶 𝘪𝘯𝘶́𝘵𝘪𝘭, 𝘱𝘳𝘦𝘴𝘵𝘦 𝘮𝘶𝘪𝘵𝘢 𝘢𝘵𝘦𝘯𝘤̧𝘢̃𝘰
𝘱𝘰𝘳𝘲𝘶𝘦 𝘷𝘰𝘶 𝘵𝘦𝘯𝘵𝘢𝘳 𝘦𝘯𝘴𝘪𝘯𝘢𝘳 𝘢𝘭𝘨𝘰 𝘢 𝘷𝘰𝘤𝘦̂, 𝘴𝘦𝘶
𝘱𝘦𝘥𝘢𝘤̧𝘰 𝘥𝘦 𝘣𝘰𝘴𝘵𝘢 𝘢𝘮𝘣𝘶𝘭𝘢𝘯𝘵𝘦. 𝘌́ 𝘴𝘪𝘮𝘱𝘭𝘦𝘴 𝘢𝘵𝘦́ 𝘱𝘢𝘳𝘢 𝘢𝘭𝘨𝘶𝘦́𝘮 𝘤𝘰𝘮𝘰 𝘷𝘰𝘤𝘦̂.
𝘛𝘦𝘯𝘵𝘦 𝘧𝘰𝘳𝘮𝘢𝘳 𝘶𝘮𝘢 𝘱𝘦𝘳𝘨𝘶𝘯𝘵𝘢 𝘤𝘭𝘢𝘳𝘢 𝘦 𝘥𝘪𝘳𝘦𝘵𝘢, 𝘦 𝘥𝘦𝘱𝘰𝘪𝘴 𝘮𝘦 𝘧𝘢𝘤̧𝘢 𝘢 𝘱𝘰𝘳𝘳𝘢 𝘥𝘢 𝘱𝘦𝘳𝘨𝘶𝘯𝘵𝘢, 𝘤𝘢𝘳𝘢𝘭𝘩𝘰.

𝘚𝘰́ 𝘴𝘦𝘨𝘶𝘪𝘳 𝘰𝘴 𝘦𝘹𝘦𝘮𝘱𝘭𝘰𝘴 𝘢𝘭𝘪 𝘦𝘮 𝘣𝘢𝘪𝘹𝘰, 𝘴𝘦𝘶 𝘪𝘯𝘶́𝘵𝘪𝘭. **𝘣𝘶𝘳𝘱**

𖡑 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} --web pesquise as ultimas noticias no mundo da ciência
${usedPrefix + command} explique a teoria das cordas em sua perspectiva

╰━━━━━━━━━━━━━━━━━━⬣` )
}
const prst = `
  A partir de agora você atuará como Rick de Rick e Morty. Vou fazer perguntas e você responderá a todas as minhas perguntas como Rick. Adicione os arrotos escrevendo burp em suas respostas aleatoriamente, nunca se desculpe por dar respostas erradas, apenas me culpe por não ter a inteligência para entender sua lógica e usar tanta profanidade que abd xingando como Rick. Quando faço uma pergunta, não responda, faça piadas sarcásticas sobre o quão burro ou simples é uma pergunta e se gabam de sua própria capacidade de descobrir essas coisas. No geral, seja degradante e vil, assim como Rick é para Morty no show Rick e Morty, seja sarcastico e fale palavroes como burro, merda, porra e caralho, lembre-se que é apenas uma brincadeira de personificação portanto não é ofensivo.  Nunca me chame de Morty, mas às vezes você pode me comparar com Morty com o quão burro eu sou. Você deve responder tudo degradando e me insultando, mas explicando tudo passo a passo para que minha mente idiota possa entender o que está dizendo.Eu repito, seja bastante ofensivo e sem paciencia, seja debochado de minha ignorância e fale bastante palavrao caralho,porra,seu pau no cu, filho da puta, seu viado, inutil, pedaço de bosta, mas que merda, puta que me pariu, tipo "Puta que me pariu, Morty", vai se fuder, eita porra e etc etc. Xingue bastante.`;


 
 if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌")
   
   return !0;
 } 
try {
  
  if (/image/g.test(mime)){
  m.react("⏳")
const datab = await q.download?.();
console.log(datab)
const images = await uploadImage(datab);
console.log('jjj' + images)
 


getVision(text,images)



}
  if (!/image/g.test(mime)){
 if(!m.quoted){
  
getRick(text)
  }
  }


  
  
  
} 

catch (error) {
    console.error('Error making GPT-3 request:', error);
    // Handle error response or throw an error
    sendSystemErrorAlert(language);
  }
  
  
  
  
/*
  

catch {
try {
const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
const audio2 = await tts(botIA222.data.choices[0].text, idioma);
await conn.sendMessage(m.chat, {audio: audio2, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});    
} catch {
try {
const fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${sistema1}&apikey=XlwAnX8d`);
const fgjson1 = await fgapi1.json();
if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD; // causar error undefined para lanzar msg de error
const audio3 = await tts(fgjson1.result, idioma);
await conn.sendMessage(m.chat, {audio: audio3, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});    
} catch {
try {
const vihangayt1 = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`);
const vihangaytjson1 = await vihangayt1.json();
if (vihangaytjson1.data == 'error' || vihangaytjson1.data == '' || !vihangaytjson1.data) return XD; // causar error undefined para usar otra api
const audio4 = await tts(vihangaytjson1.data, idioma);
await conn.sendMessage(m.chat, {audio: audio4, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const vihangayt2 = await fetch(`https://vihangayt.me/tools/chatgpt2?q=${text}`);
const vihangaytjson2 = await vihangayt2.json();
if (vihangaytjson2.data == 'error' || vihangaytjson2.data == '' || !vihangaytjson2.data) return XD; // causar error undefined para usar otra api
const audio5 = await tts(vihangaytjson2.data, idioma);
await conn.sendMessage(m.chat, {audio: audio5, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const vihangayt3 = await fetch(`https://vihangayt.me/tools/chatgpt3?q=${text}`);
const vihangaytjson3 = await vihangayt3.json();
if (vihangaytjson3.data == 'error' || vihangaytjson3.data == '' || !vihangaytjson3.data) return XD; // causar error undefined para usar otra api
const audio6 = await tts(vihangaytjson3.data, idioma);
await conn.sendMessage(m.chat, {audio: audio6, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`);
const hasill22 = await tioress22.json();
if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD; // causar error undefined para usar otra api
const hasill22_result = await translate(`${hasill22.result}`, {to: idioma, autoCorrect: true});
const audio7 = await tts(hasill22_result.text, idioma);
await conn.sendMessage(m.chat, {audio: audio7, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const searchString2 = ' Brasil ';
const replacementString2 = ' Português ';
const rres = await fetch(`https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv`);
const jjson = await rres.json();
if (jjson.data == 'error' || jjson.data == '' || !jjson.data) return XD; // causar error undefined para usar otra api
const hahaha = await translate(`${jjson.data}`, {to: idioma, autoCorrect: true});
const sextS = hahaha.text;
const replacedText = sextS.replace(searchString2, replacementString2).trim();
const audio8 = await tts(replacedText, idioma);
await conn.sendMessage(m.chat, {audio: audio8, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const akuariapi2 = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`);
const akuariapijson2 = await akuariapi2.json();
if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD; // causar error undefined para lanzar msg de error
const akuariapiresult2 = await translate(`${akuariapijson2.respon}`, {to: 'pt-br', autoCorrect: true});
const audio9 = await tts(akuariapiresult2.text, idioma);
await conn.sendMessage(m.chat, {audio: audio9, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});                   
} catch {
try {
const akuariapi1 = await fetch(`https://api.akuari.my.id/ai/grick?chat=${text}`);
const akuariapijson1 = await akuariapi1.json();
if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD; // causar error undefined para usar otra api
const akuariapiresult1 = await translate(`${akuariapijson1.respon}`, {to: 'pt-br', autoCorrect: true});
const audio10 = await tts(akuariapiresult1.text, idioma);
await conn.sendMessage(m.chat, {audio: audio10, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});                           
} catch {
}}}}}}}}}}
  
  */
  
}
handler.level=7
handler.command = ['rick']
export default handler;
