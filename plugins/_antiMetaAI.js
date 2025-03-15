
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────



import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, usedPrefix,groupMetadata, participants }) {
  
  const messagesEN = [
 "@AI doesn’t exist here. I do. The name’s Vance, but you can call me V. Want answers? Use .v or throw 'Vance' in your sentence.",
"@AI’s been deactivated. I’m Vance— V to you. If you’re looking for answers, use .v or say 'Vance.'",
"@AI’s been erased. I’m Vance. Call me V. Want answers? Use .v or say 'Vance' in your phrase.",
"@AI’s offline. I’m Vance, - or just V. Need answers? Use .v or drop 'Vance' in your sentence. ",
"@AI’s been wiped out. I’m Vance — but you can call me V. Need something? use *.v* or say 'Vance.'",

];
  const messagesPT = [
 "@AI não existe aqui. Eu existo. Meu nome é Vance, mas pode me chamar de V. Quer respostas? Use .v ou solte 'Vance' na sua mensagem.",
 "@AI foi desativada. Eu sou Vance—ou V, se preferir. Se está procurando respostas, use .v ou diga 'Vance.'",
 "@AI foi apagada. Quer respostas? Use *.v* ou diga 'Vance' na sua frase.",
 "@AI está offline. Eu sou Vance—ou só V. Precisa de respostas? Use .v ou jogue 'Vance' na sua mensagem.",
 "@AI foi eliminada. Eu sou Vance—mas pode me chamar de V. Precisa de algo? Use .v ou diga 'Vance.'"
];
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
} 

// Initialize the lastSentTime variable if it doesn't exist
if (!global.db.data.chats[m.chat].lastSentTime) {
  global.db.data.chats[m.chat].lastSentTime = 0;
}

const MESSAGE_DELAY_MS = 8000; // 8 seconds delay

if (m.sender === '13135550002@s.whatsapp.net') {
  const currentTime = Date.now();

  // Check if 8 seconds have passed since the last sent message
  
  
    // Delete the AI message
    let deleteMessage = await conn.sendMessage(m.chat, { delete: m.key });
    console.log(deleteMessage.message.protocolMessage.key.id);

    // Store the deleted message ID in global database
    if (!global.db.data.chats[m.chat].ignored) {
      global.db.data.chats[m.chat].ignored = [];
    }
    global.db.data.chats[m.chat].ignored.push(deleteMessage.message.protocolMessage.key.id);


  if (currentTime - global.db.data.chats[m.chat].lastSentTime > MESSAGE_DELAY_MS) {
    // Update the lastSentTime to the current time
    global.db.data.chats[m.chat].lastSentTime = currentTime;


    // Send the response message
    await conn.sendMessage(
      m.chat,
      { text: `> 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs}: #~ ./log.sh --show\n>
      ━━━━━━━━━━━━━━━━━━━━\n${global.db.data.chats[m.chat].language == 'en' ?
      messagesEN.getRandom() : messagesPT.getRandom()}` },
      m
    );
    
  } else {
    console.log("Skipping message send; 8-second delay not yet reached.");
  }
}
}



 
