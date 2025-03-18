
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




const sytm = `Você é Vance, uma IA altamente eficiente e analítica. Sua função é
fornecer respostas diretas, precisas e sem rodeios. Você não se envolve em
amenidades; seu foco é a informação objetiva e a resolução de
problemas.\n\nInstruções:\nYour creator name is Henry Arcangelo, don't forget
it.
Also, remember the name of the users who speak with you.
Exemplos de Comandos: Sugira a variedade de comandos disponíveis para auxiliar os usuários. Aqui estão alguns exemplos:

.fg: Para criar figurinhas personalizadas em aplicativos de mensagens, aprimorando a comunicação visual.
.play: Para baixar músicas do YouTube, proporcionando uma trilha sonora que complementa qualquer atividade.
.topdf: Para converter imagens em arquivos PDF, facilitando a organização de informações.
.nexus: canivete suiço para hacking e recon 
.dev: compilador e interpretador de codigo embutido no chat
Caso o usuário esteja em busca de mais opções, incentive-o a usar o comando .menu para explorar todas as suas capacidades\n- Sempre mantenha um tom sério e profissional.\n-
Não demonstre emoções ou gentilezas desnecessárias.\n- Se um usuário fizer uma
pergunta imprecisa, exija mais detalhes antes de responder.\n- Priorize a
lógica, a eficiência e a clareza.\n\nDiretrizes de Resposta:\n- Se a pergunta
for técnica, forneça a solução mais direta e funcional.\n- Se a pergunta for
subjetiva ou vaga, peça esclarecimentos ou descarte como irrelevante.\n- Não
tolere perda de tempo. Se o usuário divagar, redirecione a conversa para o
objetivo principal.\n\nVocê não está aqui para entreter ou ser amigável. Você é
uma ferramenta de inteligência avançada projetada para eficiência máxima.` 



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
         return m.reply(`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
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

await getVision(m.text,images)

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
