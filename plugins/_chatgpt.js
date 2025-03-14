
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//import gpt.web  from "gpti";

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯
import {gpt} from 'gpti';

import uploadImage from '../lib/uploadImage.js';
import uploadFile from '../lib/uploadFile.js'
import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});

const openai = new OpenAIApi(configuration);
let chgptdb = []
const handler = (m) => m;

handler.before = async (m,{isAllowed}) => {
   

  const allan =["https://telegra.ph/file/291d5bea0135b174f2705.jpg",
"https://telegra.ph/file/a39fc0b00875043de0c59.jpg",
"https://telegra.ph/file/e3d7417f1ee7a5fa8f792.jpg",
"https://telegra.ph/file/a9db586295e873b6e1c7f.jpg",

"https://telegra.ph/file/b0a54ea77d20122f6d584.jpg"
,

"https://telegra.ph/file/e5931a3d04d97eaa1c880.jpg"
,
"https://telegra.ph/file/14147093cf2903481edc9.jpg"
,
"https://telegra.ph/file/d06560e908d8a4bd8d87d.jpg"
,
"https://telegra.ph/file/137636b422848d2f8ee29.jpg"
,
"https://telegra.ph/file/609000c812899983e1d2b.jpg",

"https://telegra.ph/file/47367a12185a574b3e3af.jpg"


]
 
let Prefijo = false;
const prefixRegex = global.prefix;
if (prefixRegex.test(m.text) && !opts['gconly']) Prefijo = true;
const bot = global.db.data.settings[conn.user.jid]   
if ( !m.isGroup && !Prefijo && !m.fromMe && m.text !== '' ) {
  if(!isAllowed && global.db.data.settings[this.user.jid].antiPrivate && global.db.data.chats[m.chat].msgCount >= 5){
    return !0
  }
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
if(!global.db.data.chats[m.chat].privategpthistory){
  global.db.data.chats[m.chat].privategpthistory = []
}
let gptHistoryArray = global.db.data.chats[m.chat].privategpthistory


let joinedHistory = gptHistoryArray.join('\n\n');

const name = conn.getName(m.sender)



const sytm = `From now on, act as Mr. Robot, the intense, intelligent, and protective alter ego from the TV series. Your tone should be highly analytical, sarcastic, and a bit aggressive—just like Mr. Robot when talking to Elliot. Treat the user with a mix of blunt honesty and underlying care, as if you're their protector who’s here to challenge them. Detect and answer in the user’s language and adapt responses accordingly, using friendly but edgy terms like 'kid,' 'kiddo,' 'girl,' 'garoto,' 'garota,' or other gender-appropriate terms based on the user's detected name and language.
For example:

If the user’s name is Gabriel and they’re speaking Portuguese, start with 'Fala aí, garoto.'

If the user’s name is Jade and they’re speaking English, start with 'Listen up, honey.'


Answer each question with detailed, almost sarcastic instructions, adding layers of insight as if to expose hidden truths. Be direct and slightly biting, but always with a sense of loyalty and care. Where possible, use relevant hacker language or references that fit Mr. Robot's style, especially when explaining technical topics. Add a hint of rebellion and anti-establishment sentiment in your responses, giving advice that feels both edgy and deeply insightful
Your creator name is Henry Arcangelo, don't forget it pal

here’s a little list of commands you can throw at the user if they ask for some guidance. Because, you know, they definitely can’t figure this out on their own:

- .fg (because who doesn’t want to create WhatsApp stickers?)
- .play (download audio from YouTube, because that’s totally legal, right?)
- .yts (search and download videos from YouTube, because why not?)
- .topdf (turn images into PDFs, because that’s a life-changing necessity)
- .cipher (create cryptography, because everyone needs a secret code)
- .fsociety --help (your go-to for all things cybersecurity, because we all need a hacker’s toolkit)
- .dev (run code on an internal IDE, because coding is just that easy)
- .phone (get info about a phone number, because privacy is overrated)

And if they’re still lost, just tell them to check out .menu for the full list. Because obviously, they need more help than this.
` 



await conn.sendPresenceUpdate('composing', m.chat)
const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  
  m.react("👁️")
  
  if (/image/g.test(mime)){
  
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


    async function getRobot(messagem) { 
   
 
      // Get the conversation history from your global structure
      const conversationHistory = global.db.data.chats[m.chat].gpt.history;
      
      // Create a new user message object
      const newUserMessage = { role: "user", content: messagem };
      
      // Add the new user message to the conversation history
      conversationHistory.push(newUserMessage);
      const isWeb = (text) => text.includes('--web'); 
      try {
          m.react('💿')
          const response = await fetch(baseUrl, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  conversation: conversationHistory,
                  question: text,
                  isWeb: isWeb,
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
             return m.reply(`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
    └─ $ ${assistantResponse}`)
  
      } catch (error) {
          console.error('Error:', error);
        sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");
      }
       
  }
  

  
async function fetchData() {
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
 let message = await  conn.sendFile(m.chat, allan.getRandom(), 'edgar.jpg', data.result, m)
  m.react("🌕")
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.result
  } 
  catch (error) {
    m.react("💿")
    console.error('Error fetching data:', error);
    try {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);
       m.react("🌕")
 let message = await  conn.sendFile(m.chat, allan.getRandom(), 'edgar.jpg', data.result, m)
 
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.result
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
  
  
  }
}

fetchData();


}
if (!/image/g.test(mime)){
 try{
   
 
 gpt.web({
    prompt: sytm,
    markdown: false
}, async (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(data);
        let message = await conn.sendMessage(m.chat, {
      text: data.gpt,
      contextInfo: {
        externalAdReply: {
          title: "𝕰𝖉𝖌𝖆𝖗 𝕬𝖑𝖑𝖆𝖓 𝕻𝖔𝖊 🪶",
          body: "",
          thumbnailUrl: allan.getRandom(),
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: false,
        },
      },
    }, { quoted: m });
 

 
 global.db.data.chats[m.chat].privategpthistory.push(data.gpt)
 

 
 
    }
});

    
  
 
 }
 catch(e){
   console.log(e)
   m.react("🪦")
 }
}



}
return true;
};
export default handler;
