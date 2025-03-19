
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

let chgptdb = []
const handler = (m) => m;

handler.before = async (m,{isAllowed}) => {
   

 
let Prefijo = false;
const prefixRegex = global.prefix;
if (prefixRegex.test(m.text) && !opts['gconly']) Prefijo = true;
const bot = global.db.data.settings[conn.user.jid]   
if ( !m.isGroup && !Prefijo && !m.fromMe && m.text !== '' ) {
  if(!isAllowed && global.db.data.settings[this.user.jid].antiPrivate && global.db.data.chats[m.chat].msgCount >= 7){
    return !0
  }
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;





const name = conn.getName(m.sender)




const sytm = global.personality + `\nAdditional directives:
Consider these examples of commands that can assist users, if applicable:

.fg: To create personalized stickers from photos/gifs.
.play: To download music from YouTube.
.topdf: To convert images into PDF files.
.nexus: A Swiss army knife for hacking and reconnaissance.
.dev: A built-in code compiler and interpreter in the chat.

If user desires more options, he can optionally also use \`.menu\` to see all other commands`




await conn.sendPresenceUpdate('composing', m.chat)
const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  
  async function getRobot(messagem) { 
   
    if (!global.db.data.chats[m.chat].gpt.history?.length) {
      global.db.data.chats[m.chat].gpt.history = [{ role: "assistant", content: sytm }];
  }

  
    // Get the conversation history from your global structure
    const conversationHistory = global.db.data.chats[m.chat].gpt.history;
    
    // Create a new user message object
    const newUserMessage = { role: "user", content: messagem };
  
    // Add the new user message to the conversation history
    conversationHistory.push(newUserMessage);
    const isWeb = (text) => text.includes('--web'); 
    try {
        m.react('💿')
        const response = await fetch(global.arcangeloAPI + '/gpt4', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                conversation: conversationHistory,
                question: m.text,
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
           return m.reply(`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~] 
└─ $ ℕⲷ𝚡𝚞𝚜​
${assistantResponse}`)

    } catch (error) {
        console.error('Error:', error);
      global.sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");
    }
     
}


async function getVision(messagem, image) { 
 
  if (!global.db.data.chats[m.chat].gpt.history?.length) {
    global.db.data.chats[m.chat].gpt.history = [{ role: "assistant", content: sytm }];
}
if (!global.db.data.chats[m.chat].gpt.images?.length) {
  global.db.data.chats[m.chat].gpt.images = [];
  global.db.data.chats[m.chat].gpt.images.push(image);
}

  // Get the conversation history from your global structure
  const conversationHistory = global.db.data.chats[m.chat].gpt.history;
  
  // Create a new user message object
  const newUserMessage = { role: "user", content: messagem };

  // Add the new user message to the conversation history
  conversationHistory.push(newUserMessage);
  const isWeb = (text) => text.includes('--web'); 
  try {
      m.react('💿')
      const response = await fetch(global.arcangeloAPI + '/vision', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              conversation: conversationHistory,
              link: image
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
         return m.reply(`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~] 
└─ $ ℕⲷ𝚡𝚞𝚜​
${assistantResponse}`)

  } catch (error) {
      console.error('Error:', error);
    global.sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");
  }
   
}


  
  if (/image/g.test(mime)){
  
const datab = await q.download?.();
const images = await uploadImage(datab);

 await getVision(`USER: ${m.pushName} --> ${m.text}`,images)

}
if (!/image/g.test(mime)){
 try{
   

 await getRobot(`USER: ${m.pushName} --> ${m.text}`)
}

    
  
 
 
 catch(e){
   console.log(e)
   sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");
 }
}



}
return true;
};
export default handler;
