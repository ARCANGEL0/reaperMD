
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────




//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞  𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯

import { canLevelUp, xpRange } from '../lib/levelling.js'

import fs from 'fs'
import ytdl from 'ytdl-core';
import { PdfReader } from "pdfreader";
 import FormData from "form-data"; 
import fetch from "node-fetch"; 
import pdf from 'pdf-parse'
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
  import { registerFont, createCanvas, loadImage } from 'canvas'
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';

import { levelup } from '../lib/canvas.js'
export function before(m, { conn , isOwner, nivel, participants}) {

  const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

  let userLevel = global.db.data.chats[m.chat].users[m.sender].level





    function getPluginsByLevel(plugins, userLevel) {
      const result = [];
    
      for (const [pluginName, pluginAttributes] of Object.entries(plugins)) {
        if (pluginAttributes.level === userLevel) {
          result.push(pluginAttributes.command);
        }
      }
      console.log('ok plgss')

      return result;
    }
     global.pluginsAtUserLevel = getPluginsByLevel(global.plugins, userLevel);

     function formatDate(date) {
      return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} UTC ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }
  
  function upgradeMessage(username, currentLevel,coins,eth) {

    console.log("UPGRADE MESSAGE - LEVELUP!")
      const now = new Date();
      const formattedDate = formatDate(now);
      let previousLevel = currentLevel - 1
      // Determine the user's language
      const userLanguage = global.db.data.chats[m.chat]?.language || 'en';
  
      // Define messages based on language
      const messages = {
          en: {
              levelUpDetected: '[+] LEVEL UP DETECTED!',
              user: `[ USER: ${username} ]`,
              level: `[ LEVEL: ${previousLevel}.1 ❱❱❱ v${currentLevel}.0 ]`,
              systemLog: `[+] SYSTEM LOG: [${formattedDate}]`,
              protocolInitiated: '[*] Level Up Protocol Initiated... [LOADING]',
              authenticationSuccess: `[*] Transaction received of ${coins} ʙʏᴛᴇᴄᴏɪɴꜱ [SUCCESS]`,
              ethereum: `[*] Stake of ${eth} ᴇᴛʜᴇʀᴇᴜᴍ earned on cryptowallet [SUCCESS]`,
              newCommandsUnlocked: '[!] NEW COMMANDS UNLOCKED:',
              commandsList: '┏──────────────\n',
              commandsEnd: '┗──────────────\n',
              eof: '> <<EOF',
              separator: '> ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊',
              newStatus: 'NEW STATUS: '
          },
          pt: {
              levelUpDetected: '[+] LVL UP DETECTADO!',
              user: `[ USUÁRIO: ${username} ]`,
              level: `[ NÍVEL: ${previousLevel}.1 ❱❱❱ v${currentLevel}.0 ]`,
              systemLog: `[+] REGISTRO DO SISTEMA: [${formattedDate}]`,
              protocolInitiated: '[*] Protocolo de Ranking Iniciado... [CARREGANDO]',
              authenticationSuccess: `[*] Transferência recebida de ${coins} ʙʏᴛᴇᴄᴏɪɴꜱ [SUCESSO]`,
            ethereum: `[*] Stake de ${eth} ᴇᴛʜᴇʀᴇᴜᴍ disponível na cryptowallet [SUCCESSO]`,
              newCommandsUnlocked: '[!] NOVOS COMANDOS DESBLOQUEADOS:',
              commandsList: '┏──────────────\n',
              commandsEnd: '┗──────────────\n',
              eof: '> <<EOF',
              separator: '> ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊',
              newStatus: 'NOVO STATUS: '
          }
      };
  
      // Determine the status message based on currentLevel
      const statusMessage = (currentLevel % 5 === 0) ? `${messages[userLanguage].newStatus}${levels[currentLevel / 5]}` : '';
      
      // Get available commands for the current level
      const availableCommands = getPluginsByLevel(global.plugins, currentLevel);
  
      // Construct the commands section only if there are available commands
      const commandsSection = availableCommands.length > 0 
          ? `${messages[userLanguage].newCommandsUnlocked}\n${messages[userLanguage].commandsList}` + 
            availableCommands.map(command => `> ⦦ ${command} \n`).join('') +
            `${messages[userLanguage].commandsEnd}`
          : ''; // Empty string if no commands
      const ethereumMessage = eth ? `${messages[userLanguage].ethereum}\n` : '';
  
    let textin = `
  $ ./upgrade
  ${messages[userLanguage].separator}
  ${messages[userLanguage].levelUpDetected}
  [==============================]
  ${messages[userLanguage].user}${statusMessage ? `\n[ ${statusMessage} ]\n` : ''}
  ${messages[userLanguage].level}
   [==============================]
  
  ${messages[userLanguage].systemLog.replace('${formattedDate}', formattedDate)}
  ${messages[userLanguage].protocolInitiated}
  ${messages[userLanguage].authenticationSuccess}
  ${ethereumMessage} 
  ${commandsSection} 
  ${messages[userLanguage].eof}
  ${messages[userLanguage].separator}
  $ _ 
      `;


      return m.reply(textin)
  }
  


//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = who.split("@")[0]









	 const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(who)
   
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={exp: 0,
        limit:0,
        role:'🪶 Ｓｃｒｉｐｔ　Ｋｉｄｄｉｅ',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        silenced: false,
        maxlevel: false,
        cocriador: false,
        slots:3,
 
       
  }
}

let levels 
if (global.db.data.chats[m.chat].language === 'pt') { 

  levels = 
[
  "Ｓｃｒｉｐｔ　Ｋｉｄｄｉｅ",              // Ｌｅｖｅｌ　１
  "Ｉｎｉｃｉａｄｏｒ　ｄａ　Ｆｓｏｃｉｅｔｙ", // Ｌｅｖｅｌ　２
  "Ｆａｎｔａｓｍａ　Ｄｉｇｉｔａｌ",        // Ｌｅｖｅｌ　３
  "Ｓａｂｏｔｅｕｒ　Ｅ－Ｃｏｒｐ",          // Ｌｅｖｅｌ　４
  "Ｅｘｐｌｏｉｔ　Ｆａｎｔａｓｍａ",       // Ｌｅｖｅｌ　５
  "Ｏｐｅｒａｔｉｖｏ　ｄｏ　Ｅｘéｒｃｉｔｏ　Ｓｏｍｂｒｉｏ", // Ｌｅｖｅｌ　６
  "Ｅｎｇｅｎｈｅｉｒｏ　Ｓｏｃｉａｌ",     // Ｌｅｖｅｌ　７
  "Ｍｅｍｂｒｏ　ｄｏ　ＬｕｌｚＳｅｃ",      // Ｌｅｖｅｌ　８
  "Ｃａｃａｄｏｒ　ｄｅ　Ｚｅｒｏ－Ｄａｙ",  // Ｌｅｖｅｌ　９
  "Ａｒｑｕｉｔｅｔｏ　ｄｅ　Ｍａｌｗａｒｅ", // Ｌｅｖｅｌ　１０
  "Ｌｉｂｅｒａｄｏｒ　ｄｅ　Ｄａｄｏｓ",   // Ｌｅｖｅｌ　１１
  "Ｄｉｓｒｕｐｔｏｒ　ｄｅ　Ｓｉｓｔｅｍａｓ", // Ｌｅｖｅｌ　１２
  "Ｄｅｆｅｎｓｏｒ　ｄｅ　Ｒｅｄｅｓ",     // Ｌｅｖｅｌ　１３
  "Ａｎａｌｉｓｔａ　ｄｅ　Ｃｉｂｅｒｓｅｇｕｒａｎçａ", // Ｌｅｖｅｌ　１４
  "Ｄｅｓｅｎｖｏｌｖｅｄｏｒ　ｄｅ　Ｅｘｐｌｏｉｔｓ", // Ｌｅｖｅｌ　１５
  "Ｂｌａｃｋ　Ｈａｔ",                      // Ｌｅｖｅｌ　１６
  "４０４",                                  // Ｌｅｖｅｌ　１７
  "Ｅｘｐｌｏｒａｄｏｒ　ｄｅ　Ｓｉｓｔｅｍａｓ", // Ｌｅｖｅｌ　１８
  "Ａｐｒｅｎｄｉｚ　ｄｅ　Ｓｎｏｗｄｅｎ", // Ｌｅｖｅｌ　１９
  "Ａｎｏｎｙｍｏｕｓ",                      // Ｌｅｖｅｌ　２０
  "Ｅｌｌｉｏｔ　Ａｌｄｅｒｓｏｎ"          // Ｌｅｖｅｌ　２１
]
} 
else {
levels = 
[
  "Ｓｃｒｉｐｔ　Ｋｉｄｄｉｅ",              // Ｌｅｖｅｌ　１
  "Ｆｓｏｃｉｅｔｙ　Ｉｎｉｔｉａｔｅ",       // Ｌｅｖｅｌ　２
  "Ｄｉｇｉｔａｌ　Ｇｈｏｓｔ",              // Ｌｅｖｅｌ　３
  "Ｅ－Ｃｏｒｐ　Ｓａｂｏｔｅｕｒ",          // Ｌｅｖｅｌ　４
  "Ｐｈａｎｔｏｍ　Ｅｘｐｌｏｉｔ",         // Ｌｅｖｅｌ　５
  "Ｄａｒｋ　Ａｒｍｙ　Ｏｐｅｒａｔｉｖｅ", // Ｌｅｖｅｌ　６
  "Ｓｏｃｉａｌ　Ｅｎｇｉｎｅｅｒ",         // Ｌｅｖｅｌ　７
  "ＬｕｌｚＳｅｃ　Ｍｅｍｂｅｒ",            // Ｌｅｖｅｌ　８
  "Ｚｅｒｏ－Ｄａｙ　Ｈｕｎｔｅｒ",         // Ｌｅｖｅｌ　９
  "Ｍａｌｗａｒｅ　Ａｒｃｈｉｔｅｃｔ",     // Ｌｅｖｅｌ　１０
  "Ｄａｔａ　Ｌｉｂｅｒａｔｉｏｎｉｓｔ",   // Ｌｅｖｅｌ　１１
  "Ｓｙｓｔｅｍ　Ｄｉｓｒｕｐｔｏｒ",       // Ｌｅｖｅｌ　１２
  "Ｎｅｔｗｏｒｋ　Ｄｅｆｅｎｄｅｒ",       // Ｌｅｖｅｌ　１３
  "Ｃｙｂｅｒｓｅｃｕｒｉｔｙ　Ａｎａｌｙｓｔ", // Ｌｅｖｅｌ　１４
  "Ｅｘｐｌｏｉｔ　Ｄｅｖｅｌｏｐｅｒ",     // Ｌｅｖｅｌ　１５
  "Ｂｌａｃｋ　Ｈａｔ",                      // Ｌｅｖｅｌ　１６
  "４０４",                                  // Ｌｅｖｅｌ　１７
  "Ｓｙｓｔｅｍ　Ｅｘｐｌｏｉｔｅｒ",       // Ｌｅｖｅｌ　１８
  "Ｓｎｏｗｄｅｎ　Ａｐｐｒｅｎｔｉｃｅ",   // Ｌｅｖｅｌ　１９
  "Ａｎｏｎｙｍｏｕｓ",                      // Ｌｅｖｅｌ　２０
  "Ｅｌｌｉｏｔ　Ａｌｄｅｒｓｏｎ"            // Ｌｅｖｅｌ　２１
]

}

	
let user = global.db.data.chats[m.chat].users[m.sender]
let chat = global.db.data.chats[m.chat]

let isMaxLevel = global.db.data.chats[m.chat].users[m.sender].maxlevel


if (!chat.autolevelup){
return !0
}
if (global.db.data.chats[m.chat].isBanned)
return !1
if(isOwner){
  return !0
}
if(m.sender==global.cocriador){
  return !0
}

let randomxp = Math.floor(Math.random() * 30) + 1;
global.db.data.chats[m.chat].users[m.sender].exp += randomxp
	
let before = user.level * 1

let userxp = global.db.data.chats[m.chat].users[m.sender].exp



if(userxp>1000 && userxp<2000 ){
  if(user.level > 1){ //user level higher than one?
    user.level=1 //set level 1
    user.role = levels[0]
    user.money-=25
    
    //logic
  }
  else if(user.level==1){
    return
  }
  else if(user.level<1){
    user.level = 1
user.role = levels[0]
  user.money += 30

  upgradeMessage(m.pushName, user.level, 30, 0)

		  	 
  }

} // 1
if(userxp>2000 && userxp<4000 ){
  if(user.level > 2){ //user level higher than one?
    user.level=2 //set level 1
    user.role = levels[0]
    user.money-=25
    
    //logic
  }
else if(user.level==2){
  return
}
else if(user.level<2){
  user.level = 2
user.role = levels[0]
  user.money += 30

upgradeMessage(m.pushName, user.level, 30, 0)

}
} // 2
if(userxp>4000 && userxp<8000 ){
  if(user.level > 3){ //user level higher than one?
    user.level=3 //set level 1
    user.role = levels[0]
    user.money-=25
    
    //logic
  }
else if(user.level==3){
  return
}
else if(user.level<3){
  user.level = 3
user.role = levels[0]
  user.money += 30

upgradeMessage(m.pushName, user.level, 30, 0)

}
} // 3
if(userxp>8000 && userxp<14000 ){
  if(user.level > 4){ //user level higher than one?
    user.level=4 //set level 1
    user.role = levels[0]
    user.money-=25
    
    //logic
  }
else if(user.level==4){
  return
}
else if(user.level<4){
  user.level = 4
user.role = levels[0]
  user.money += 30

upgradeMessage(m.pushName, user.level, 30, 0)

}
} //4
if(userxp>14000 && userxp<20000 ){
  if(user.level > 5){ //user level higher than one?
    user.level=5 //set level 1
    user.role = levels[0]
    user.money-=25
    
    //logic
  }
else if(user.level==5){
  return
}
else if(user.level<5){
  user.level = 5
user.role = levels[1]
  user.money += 60
  user.limit += 1

upgradeMessage(m.pushName, user.level, 60, 1)


}
} //5
if(userxp>20000 && userxp<26500 ){
  if(user.level > 6){ //user level higher than one?
    user.level=6 //set level 1
    user.role = levels[1]
    user.money-=25
    
    //logic
  }
else if(user.level==6){
  return
}
else if(user.level<6){
  user.level = 6
user.role = levels[1]
  user.money += 60

 
upgradeMessage(m.pushName, user.level, 60, 0)

}
} //6
if(userxp>26500 && userxp<33500 ){
  if(user.level > 7){ //user level higher than one?
    user.level=7 //set level 1
    user.role = levels[1]
    user.money-=25
    
    //logic
  }
else if(user.level==7){
  return
}
else if(user.level<7){
  user.level = 7
user.role = levels[1]
  user.money += 60
  

upgradeMessage(m.pushName, user.level, 60, 0)

}
} //7
if(userxp>33500 && userxp<41000 ){
  if(user.level >8){ //user level higher than one?
    user.level=8 //set level 1
    user.role = levels[1]
    user.money-=25
    
    //logic
  }
else if(user.level==8){
  return
}
else if(user.level<8){
  user.level = 8
user.role = levels[1]
  user.money += 60
 
upgradeMessage(m.pushName, user.level, 60, 0)

}
} //8
if(userxp>41000 && userxp<49000 ){
  if(user.level > 9){ //user level higher than one?
    user.level=9//set level 1
    user.role = levels[1]
    user.money-=25
    
    //logic
  }
else if(user.level==9){
  return
}
else if(user.level<9){
  user.level = 9
user.role = levels[1]
  user.money += 60

upgradeMessage(m.pushName, user.level, 60, 0)

}
} //9
if(userxp>49000 && userxp<49850 ){
  if(user.level > 10){ //user level higher than one?
    user.level=10 //set level 1
    user.role = levels[2]
    user.money-=25
    
    //logic
  }
else if(user.level==10){
  return
}
else if(user.level<10){
  user.level = 10
user.role = levels[2]
  user.money += 85
  user.limit += 1

upgradeMessage(m.pushName, user.level,85,1)
}
} //10
if(userxp>49850 && userxp<50750 ){
  if(user.level > 11){ //user level higher than one?
    user.level=11 //set level 1
    user.role = levels[2]
    user.money-=25
    
    //logic
  }
else if(user.level==11){
  return
}
else if(user.level<11){
  user.level = 11
user.role = levels[2]
  user.money += 85
  
upgradeMessage(m.pushName, user.level, 85, 0)

}
} //11
if(userxp>50750 && userxp<51750 ){
  if(user.level > 12){ //user level higher than one?
    user.level=12 //set level 1
    user.role = levels[2]
    user.money-=25
    
    //logic
  }
else if(user.level==12){
  return
}
else if(user.level<12){
  user.level = 12
user.role = levels[2]
  user.money += 85

upgradeMessage(m.pushName, user.level, 85, 0)

}
} //12
if(userxp>51750 && userxp<52850 ){
  if(user.level > 13){ //user level higher than one?
    user.level=13 //set level 1
    user.role = levels[2]
    user.money-=25
    
    //logic
  }
else if(user.level==13){
  return
}
else if(user.level<13){
  user.level = 13
user.role = levels[2]
  user.money += 85

upgradeMessage(m.pushName, user.level, 85, 0)

}
} //13
if(userxp>52850 && userxp<54050 ){
  if(user.level > 14){ //user level higher than one?
    user.level=14 //set level 1
    user.role = levels[2]
    user.money-=25
    
    //logic
  }
else if(user.level==14){
  return
}
else if(user.level<14){
  user.level = 14
user.role = levels[2]
  user.money += 85

upgradeMessage(m.pushName, user.level, 85, 0)

}
} //14
if(userxp>54050 && userxp<55350 ){
  if(user.level > 15){ //user level higher than one?
    user.level=15 //set level 1
    user.role = levels[3]
    user.money-=25
    
    //logic
  }
else if(user.level==15){
  return
}
else if(user.level<15){
  user.level = 15
user.role = levels[3]
  user.money += 100
  user.limit += 3

  upgradeMessage(m.pushName, user.level, 100,3)
   		  	  	 
}
} //15
if(userxp>55350 && userxp<56750 ){
  if(user.level > 16){ //user level higher than one?
    user.level=16 //set level 1
    user.role = levels[3]
    user.money-=25
    
    //logic
  }
else if(user.level==16){
  return
}
else if(user.level<16){
  user.level = 16
user.role = levels[3]
  user.money += 100

  upgradeMessage(m.pushName, user.level, 100,0)
   		  	  	 
}
} //16
if(userxp>56750 && userxp<58250 ){
  if(user.level > 17){ //user level higher than one?
    user.level=17 //set level 1
    user.role = levels[3]
    user.money-=25
    
    //logic
  }
else if(user.level==17){
  return
}
else if(user.level<17){
  user.level = 17
user.role = levels[3]
  user.money += 100
 
 
  upgradeMessage(m.pushName, user.level, 100,0)
   		  	  	 	  	  	 
}
} //17
if(userxp>58250 && userxp<59850 ){
  if(user.level > 18){ //user level higher than one?
    user.level=18 //set level 1
    user.role = levels[3]
    user.money-=25
    
    //logic
  }
else if(user.level==18){
  return
}
else if(user.level<18){
  user.level = 18
user.role = levels[3]
  user.money += 100



  upgradeMessage(m.pushName, user.level, 100,0)
   		  	  	 	  	  	 
}
} //18
if(userxp>59850 && userxp<61550 ){
  if(user.level > 19){ //user level higher than one?
    user.level=19 //set level 1
    user.role = levels[3]
    user.money-=25
    
    //logic
  }
else if(user.level==19){
  return
}
else if(user.level<19){
  user.level = 19
user.role = levels[3]
  user.money += 100
 
 
  upgradeMessage(m.pushName, user.level, 100,0)
   		  	  	   		  	  	 
}
} //19
if(userxp>61550 && userxp<63350 ){
  if(user.level > 20){ //user level higher than one?
    user.level=20//set level 1
    user.role = levels[4]
    user.money-=25
    
    //logic
  }
else if(user.level==20){
  return
}
else if(user.level<20){
  user.level = 20
user.role = levels[4]
  user.money += 150
  user.limit += 3


  upgradeMessage(m.pushName, user.level, 150,3)
   		  	  	 		  	  	 
}
} //20
if(userxp>63350 && userxp<65250 ){
  if(user.level > 21){ //user level higher than one?
    user.level=21 //set level 1
    user.role = levels[4]
    user.money-=25
    
    //logic
  }
else if(user.level==21){
  return
}
else if(user.level<21){
  user.level = 21
user.role = levels[4]
  user.money += 150


  upgradeMessage(m.pushName, user.level, 150,0)
   		  	  	 	  	 
}
} //21
if(userxp>65250 && userxp<67300 ){
  if(user.level > 22){ //user level higher than one?
    user.level=22 //set level 1
    user.role = levels[4]
    user.money-=25
    
    //logic
  }
else if(user.level==22){
  return
}
else if(user.level<22){
  user.level = 22
user.role = levels[4]
user.money += 150

upgradeMessage(m.pushName, user.level, 150,0)
	  	  	 
}
} //22
if(userxp>67300 && userxp<69500 ){
  if(user.level > 23){ //user level higher than one?
    user.level=23//set level 1
    user.role = levels[4]
    user.money-=25
    
    //logic
  }
else if(user.level==23){
  return
}
else if(user.level<23){
  user.level = 23
user.role = levels[4]
user.money += 150

upgradeMessage(m.pushName, user.level, 150,0)
 			  	  	 
}
} //23
if(userxp>69500 && userxp<71850 ){
  if(user.level > 24){ //user level higher than one?
    user.level=24 //set level 1
    user.role = levels[4]
    user.money-=25
    
    //logic
  }
else if(user.level==24){
  return
}
else if(user.level<24){
  user.level = 24
user.role = levels[3]
user.money += 150

upgradeMessage(m.pushName, user.level, 150,0)
 		  	  	 
}} //24
if(userxp>71850 && userxp<74350 ){
  if(user.level > 25){ //user level higher than one?
    user.level=25 //set level 1
    user.role = levels[5]
    user.money-=25
    
    //logic
  }
else if(user.level==25){
  return
}
else if(user.level<25){
  user.level = 25
user.role = levels[5]
  user.money += 200
  user.limit += 3

  upgradeMessage(m.pushName, user.level, 200,3)
			  	  	 
}
} //25
if(userxp>74350 && userxp<77000 ){
  if(user.level > 26){ //user level higher than one?
    user.level=26 //set level 1
    user.role = levels[5]
    user.money-=25
    
    //logic
  }
else if(user.level==26){
  return
}
else if(user.level<26){
  user.level = 26
user.role = levels[5]
user.money += 180

upgradeMessage(m.pushName, user.level, 180,0)
		  	  	 
}
} //26
if(userxp>77000 && userxp<79800 ){
  if(user.level > 27){ //user level higher than one?
    user.level=27 //set level 1
    user.role = levels[5]
    user.money-=25
    
    //logic
  }
else if(user.level==27){
  return
}
else if(user.level<27){
  user.level = 27
user.role = levels[5]
user.money += 180

upgradeMessage(m.pushName, user.level, 180,0)
	  	  	 
}
} //27
if(userxp>79800 && userxp<82750 ){
  if(user.level >28){ //user level higher than one?
    user.level=28 //set level 1
    user.role = levels[5]
    user.money-=25
    
    //logic
  }
else if(user.level==28){
  return
}
else if(user.level<28){
  user.level = 28
user.role = levels[5]
user.money += 180

upgradeMessage(m.pushName, user.level, 180,0)
	  	  	 
}
} //28
if(userxp>82750 && userxp<85850 ){
  if(user.level > 29){ //user level higher than one?
    user.level=29 //set level 1
    user.role = levels[5]
    user.money-=25
    
    //logic
  }
else if(user.level==29){
  return
}
else if(user.level<29){
  user.level = 29
user.role = levels[5]
user.money += 180
upgradeMessage(m.pushName, user.level, 180,0)
 		  	  	 
}
} //29
if(userxp>85850 && userxp<89100 ){
  if(user.level >30 ){ //user level higher than one?
    user.level=30 //set level 1
    user.role = levels[6]
    user.money-=25
    
    //logic
  }
else if(user.level==30){
  return
}
else if(user.level<30){
  user.level = 30
user.role = levels[6]
  
  user.money += 240

  upgradeMessage(m.pushName, user.level, 240,0)
	  	  	 
}
} //30
if(userxp>89100 && userxp<92500 ){
  if(user.level > 31){ //user level higher than one?
    user.level=31 //set level 1
    user.role = levels[6]
    user.money-=25
    
    //logic
  }
else if(user.level==31){
  return
}
else if(user.level<31){
  user.level = 31
user.role = levels[6]
user.money += 245

upgradeMessage(m.pushName, user.level, 245,0)
		  	  	 
}
} //31
if(userxp>96100 && userxp<99900 ){
  if(user.level > 32){ //user level higher than one?
    user.level=32 //set level 1
    user.role = levels[6]
    user.money-=25
    
    //logic
  }
else if(user.level==32){
  return
}
else if(user.level<32){
  user.level = 32
user.role = levels[6]
user.money += 245

upgradeMessage(m.pushName, user.level, 245,0)
 		  	  	 
}
} //32
if(userxp>99900 && userxp<103900 ){
  if(user.level > 33){ //user level higher than one?
    user.level=33 //set level 1
    user.role = levels[6]
    user.money-=25
    
    //logic
  }
else if(user.level==33){
  return
}
else if(user.level<33){
  user.level = 33
user.role = levels[6]
user.money += 245

upgradeMessage(m.pushName, user.level, 245,0)
		  	  	 
}
} //33
if(userxp>103900 && userxp<108100 ){
  if(user.level > 34){ //user level higher than one?
    user.level=34 //set level 1
    user.role = levels[6]
    user.money-=25
    
    //logic
  }
else if(user.level==34){
  return
}
else if(user.level<34){
  user.level = 34
user.role = levels[6]
  user.money += 270

  upgradeMessage(m.pushName, user.level, 270,0)
		  	  	 
}
} //34
if(userxp>108100 && userxp<112500 ){
  if(user.level > 35){ //user level higher than one?
    user.level=35 //set level 1
    user.role = levels[7]
    user.money-=25
    
    //logic
  }
else if(user.level==35){
  return
}
else if(user.level<35){
  user.level = 35
user.role = levels[7]
  user.money += 300
  user.limit += 3

  upgradeMessage(m.pushName, user.level,300,3)
	   		  	  	 
}
} //35
if(userxp>112500 && userxp<117100 ){
  if(user.level > 36){ //user level higher than one?
    user.level=36 //set level 1
    user.role = levels[7]
    user.money-=25
    
    //logic
  }
else if(user.level==36){
  return
}
else if(user.level<36){
  user.level = 36
user.role = levels[7]
user.money += 270

upgradeMessage(m.pushName, user.level, 270,0)
  		  	  	 
}
} //36
if(userxp>117100 && userxp<121900 ){
  if(user.level > 37){ //user level higher than one?
    user.level=37 //set level 1
    user.role = levels[7]
    user.money-=25
    
    //logic
  }
else if(user.level==37){
  return
}
else if(user.level<37){
  user.level = 37
user.role = levels[7]
user.money += 270

upgradeMessage(m.pushName, user.level, 270,0)
	  		  	  	 
}
} //37
if(userxp>121900 && userxp<126900 ){
  if(user.level > 38){ //user level higher than one?
    user.level=38 //set level 1
    user.role = levels[7]
    user.money-=25
    
    //logic
  }
else if(user.level==38){
  return
}
else if(user.level<38){
  user.level = 38
user.role = levels[7]
user.money += 270

upgradeMessage(m.pushName, user.level, 270,0)
	   		  	  	 
}
} //38
if(userxp>126900 && userxp<132100 ){
  if(user.level > 39){ //user level higher than one?
    user.level=39 //set level 1
    user.role = levels[7]
    user.money-=25
    
    //logic
  }
else if(user.level==39){
  return
}
else if(user.level<39){
  user.level = 39
user.role = levels[7]
user.money += 270

upgradeMessage(m.pushName, user.level, 270,0)
    		  	  	 
}
} //39
if(userxp>132100 && userxp<137500 ){
  if(user.level > 40){ //user level higher than one?
    user.level=40 //set level 1
    user.role = levels[8]
    user.money-=25
    
    //logic
  }
else if(user.level==40){
  return
}
else if(user.level<40){
  user.level = 40
user.role = levels[8]
  user.money += 350
  user.limit += 4

  upgradeMessage(m.pushName, user.level, 350,4)
	   		  	  	 
}
} //40
if(userxp>137500 && userxp<143100 ){
  if(user.level > 41){ //user level higher than one?
    user.level=41 //set level 1
    user.role = levels[8]
    user.money-=25
    
    //logic
  }
else if(user.level==41){
  return
}
else if(user.level<41){
  user.level = 41
user.role = levels[8]
user.money += 300

upgradeMessage(m.pushName, user.level, 300,0)
  	  	  	 
}
} //41
if(userxp>143100 && userxp<148950 ){
  if(user.level > 42){ //user level higher than one?
    user.level=42 //set level 1
    user.role = levels[8]
    user.money-=25
    
    //logic
  }
else if(user.level==42){
  return
}
else if(user.level<42){
  user.level = 42
user.role = levels[8]
user.money += 300

upgradeMessage(m.pushName, user.level, 300,0)
  	 		  	  	 
}
} //42
if(userxp>148950 && userxp<155050 ){
  if(user.level > 43){ //user level higher than one?
    user.level=43 //set level 1
    user.role = levels[8]
    user.money-=25
    
    //logic
  }
else if(user.level==43){
  return
}
else if(user.level<43){
  user.level = 43
user.role = levels[8]
user.money += 300

upgradeMessage(m.pushName, user.level, 300,0)
  	 		  	  	 
}
} //43
if(userxp>155050 && userxp<161400 ){
  if(user.level > 44){ //user level higher than one?
    user.level=44 //set level 1
    user.role = levels[8]
    user.money-=25
    
    //logic
  }
else if(user.level==44){
  return
}
else if(user.level<44){
  user.level = 44
user.role = levels[8]
user.money += 300

upgradeMessage(m.pushName, user.level, 300,0)
  	 		  	  	 
}
} //44
if(userxp>161400 && userxp<168000 ){
  if(user.level > 45){ //user level higher than one?
    user.level=45 //set level 1
    user.role = levels[9]
    user.money-=25
    
    //logic
  }
else if(user.level==45){
  return
}
else if(user.level<45){
  user.level = 45
user.role = levels[9]
  user.money += 450
  user.limit += 3
 

  upgradeMessage(m.pushName, user.level, 450,3)
  	 		  	  	 
}
} //45
if(userxp>168000 && userxp<174850 ){
  if(user.level > 46){ //user level higher than one?
    user.level=46//set level 1
    user.role = levels[9]
    user.money-=25
    
    //logic
  }
else if(user.level==46){
  return
}
else if(user.level<46){
  user.level = 46
user.role = levels[9]
user.money += 330

upgradeMessage(m.pushName, user.level, 330,0)
  		  	  	 
}
} //46
if(userxp>174850 && userxp<181950 ){
  if(user.level > 47){ //user level higher than one?
    user.level=47 //set level 1
    user.role = levels[9]
    user.money-=25
    
    //logic
  }
else if(user.level==47){
  return
}
else if(user.level<47){
  user.level = 47
user.role = levels[9]
user.money += 330

upgradeMessage(m.pushName, user.level, 330,0)
	  	  	 
}
} //47
if(userxp>181950 && userxp<189300 ){
  if(user.level > 48){ //user level higher than one?
    user.level=48 //set level 1
    user.role = levels[9]
    user.money-=25
    
    //logic
  }
else if(user.level==48){
  return
}
else if(user.level<48){
  user.level = 48
user.role = levels[9]
user.money += 330

upgradeMessage(m.pushName, user.level, 330,0)
		  	  	 
}
} //48
if(userxp>189300 && userxp<196900 ){
  if(user.level > 49){ //user level higher than one?
    user.level=49//set level 1
    user.role = levels[9]
    user.money-=25
    
    //logic
  }
else if(user.level==49){
  return
}
else if(user.level<49){
  user.level = 49
user.role = levels[9]
user.money += 330

upgradeMessage(m.pushName, user.level, 330,0)
	  	  	 
}
} //49
if(userxp>196900 && userxp<204750 ){
  if(user.level > 50){ //user level higher than one?
    user.level=50 //set level 1
    user.role = levels[10]
    user.money-=25
    
    //logic
  }
else if(user.level==50){
  return
}
else if(user.level<50){
  user.level = 50
user.role = levels[10]
  user.limit += 4

  user.money += 415
  upgradeMessage(m.pushName, user.level, 415,4)
		  	  	 
}
} //50
if(userxp>204750 &&   userxp<212850 ){
  if(user.level > 51){ //user level higher than one?
    user.level=51 //set level 1
    user.role = levels[10]
    user.money-=25
    
    //logic
  }
else if(user.level==51){
  return
}
else if(user.level<51){
  user.level = 51
user.role = levels[10]
 
  user.money += 360

  upgradeMessage(m.pushName, user.level, 360,0)
		 	  	  	 
}
} //51
if(userxp>212850 &&  userxp<221250 ){
  if(user.level > 52){ //user level higher than one?
    user.level=52 //set level 1
    user.role = levels[10]
    user.money-=25
    
    //logic
  }
else if(user.level==52){
  return
}
else if(user.level<52){
  user.level = 52
user.role = levels[10]
 
user.money += 360


upgradeMessage(m.pushName, user.level, 360,0)		  	  	 
}
} //52
if(userxp>221250 &&  userxp<229950 ){
  if(user.level > 53){ //user level higher than one?
    user.level=53 //set level 1
    user.role = levels[10]
    user.money-=25
    
    //logic
  }
else if(user.level==53){
  return
}
else if(user.level<53){
  user.level = 53
user.role = levels[10]

user.money += 360


upgradeMessage(m.pushName, user.level, 360,0) 		  	  	 
}
} //53
if(userxp>229950 &&  userxp<238950 ){
  if(user.level > 54){ //user level higher than one?
    user.level=54 //set level 1
    user.role = levels[10]
    user.money-=25
    
    //logic
  }
else if(user.level==54){
  return
}
else if(user.level<54){
  user.level = 54
user.role = levels[10]
 
user.money += 360


upgradeMessage(m.pushName, user.level, 360,0) 	 		  	  	 
}
} //54
if(userxp>238950 &&  userxp<248250 ){
  if(user.level > 55){ //user level higher than one?
    user.level=55 //set level 1
    user.role = levels[11]
    user.money-=50
    
    //logic
  }
else if(user.level==55){
  return
}
else if(user.level<55){
  user.level = 55
user.role = levels[11]
  user.money += 480
  user.limit += 5


 
  upgradeMessage(m.pushName, user.level,480,5)		  	  	 
}
} //55
if(userxp>248250 &&  userxp<257850 ){
  if(user.level > 56){ //user level higher than one?
    user.level=56 //set level 1
    user.role = levels[11]
    user.money-=50
    
    //logic
  }
else if(user.level==56){
  return
}
else if(user.level<56){
  user.level = 56
user.role = levels[11]
 
user.money += 400


upgradeMessage(m.pushName, user.level, 400,0)		  	  	 
}
} //56
if(userxp>257850 &&  userxp<267750 ){
  if(user.level > 57){ //user level higher than one?
    user.level=57 //set level 1
    user.role = levels[11]
    user.money-=50
    
    //logic
  }
else if(user.level==57){
  return
}
else if(user.level<57){
  user.level = 57
user.role = levels[11]
user.money += 400

upgradeMessage(m.pushName, user.level, 400,0)		  	  	 
	  		  	  	 
}
} //57
if(userxp>267750 &&   userxp<277950 ){
  if(user.level > 58){ //user level higher than one?
    user.level=58 //set level 1
    user.role = levels[11]
    user.money-50
    
    //logic
  }
else if(user.level==58){
  return
}
else if(user.level<58){
  user.level = 58
user.role = levels[11]
user.money += 400

upgradeMessage(m.pushName, user.level, 400,0)		  	  	 
  		  	  	 
}
} //58
if(userxp>277950 &&   userxp<288450 ){
  if(user.level > 59){ //user level higher than one?
    user.level=59 //set level 1
    user.role = levels[11]
    user.money-=50
    
    //logic
  }
else if(user.level==59){
  return
}
else if(user.level<59){
  user.level = 59
user.role = levels[11]
user.money += 400

upgradeMessage(m.pushName, user.level, 400,0)		  	  	 
	  		  	  	 
}
} //59
if(userxp>288450 && userxp<299250 ){
  if(user.level > 60){ //user level higher than one?
    user.level=60 //set level 1
    user.role = levels[12]
    user.money-=50
    
    //logic
  }
else if(user.level==60){
  return
}
else if(user.level<60){
  user.level = 60
user.role = levels[12]
  user.money += 520
  user.limit += 3

  upgradeMessage(m.pushName, user.level, 520,3)		  	  	 
	  	  	 
}
} //60
if(userxp>299250 && userxp<310350 ){
  if(user.level > 61){ //user level higher than one?
    user.level=61//set level 1
    user.role = levels[12]
    user.money-=50
    
    //logic
  }
else if(user.level==61){
  return
}
else if(user.level<61){
  user.level = 61
user.role = levels[12]
user.money += 400

upgradeMessage(m.pushName, user.level, 400,0)		  	  	 
	  		  	  	 
}
} //61
if(userxp>310350 && userxp<321800 ){
  if(user.level > 62){ //user level higher than one?
    user.level=62 //set level 1
    user.role = levels[12]
    user.money-=50
    
    //logic
  }
else if(user.level==62){
  return
}
else if(user.level<62){
  user.level = 62
user.role = levels[12]
user.money += 400

upgradeMessage(m.pushName, user.level, 400,0)		  	  	 
	 	  	  	 
}
} //62
if(userxp>321800 && userxp<333600 ){
  if(user.level > 63){ //user level higher than one?
    user.level=63 //set level 1
    user.role = levels[12]
    user.money-=65
    
    //logic
  }
else if(user.level=63){
  return
}
else if(user.level<63){
  user.level = 63
user.role = levels[12]
user.money += 400

upgradeMessage(m.pushName, user.level, 400,0)		  	  	 
	 		  	  	 
}
} //63
if(userxp>333600 && userxp<345750 ){
  if(user.level > 64){ //user level higher than one?
    user.level=64 //set level 1
    user.role = levels[12]
    user.money-=65
    
    //logic
  }
else if(user.level==37){
  return
}
else if(user.level<64){
  user.level = 64
user.role = levels[12]
user.money += 400

upgradeMessage(m.pushName, user.level, 400,0)		  	  	 
 	   		  	  	 
}
} //64
if(userxp>345750 && userxp<358250 ){
  if(user.level > 65){ //user level higher than one?
    user.level=65 //set level 1
    user.role = levels[13]
    user.money-=100
    
    //logic
  }
else if(user.level==65){
  return
}
else if(user.level<65){
  user.level = 65
user.role = levels[13]
  user.money += 540
  user.limit += 3


  upgradeMessage(m.pushName, user.level, 540,3)		  	  	 
 		  	  	 
}
} //65
if(userxp>358250 && userxp<371100 ){
  if(user.level > 66){ //user level higher than one?
    user.level=66 //set level 1
    user.role = levels[13]
    user.money-=80
    
    //logic
  }
else if(user.level==66){
  return
}
else if(user.level<66){
  user.level = 66
user.role = levels[13]
user.money += 435

upgradeMessage(m.pushName, user.level, 435,0)		  	  	 
  		  	  	 
}
} //66
if(userxp>371100 && userxp<384300 ){
  if(user.level > 67){ //user level higher than one?
    user.level=67 //set level 1
    user.role = levels[13]
    user.money-=25
    
    //logic
  }
else if(user.level==67){
  return
}
else if(user.level<67){
  user.level = 67
user.role = levels[13]
user.money += 435

upgradeMessage(m.pushName, user.level, 435,0)		  		  	  	 
}
} //67
if(userxp>384300 && userxp<397850 ){
  if(user.level > 68){ //user level higher than one?
    user.level=68 //set level 1
    user.role = levels[13]
    user.money-=25
    
    //logic
  }
else if(user.level==68){
  return
}
else if(user.level<68){
  user.level = 68
user.role = levels[13]
user.money += 435

upgradeMessage(m.pushName, user.level, 435,0)	 		  	  	 
}
} //68
if(userxp>397850 && userxp<411750 ){
  if(user.level > 69){ //user level higher than one?
    user.level=69 //set level 1
    user.role = levels[13]
    user.money-=25
    
    //logic
  }
else if(user.level==69){
  return
}
else if(user.level<69){
  user.level = 69
user.role = levels[13]
user.money += 435

upgradeMessage(m.pushName, user.level, 435,0)	 		  	  	 
}
} //69
if(userxp>411750 && userxp<426000 ){
  if(user.level > 70){ //user level higher than one?
    user.level=70//set level 1
    user.role = levels[14]
    user.money-=25
    
    //logic
  }
else if(user.level==70){
  return
}
else if(user.level<70){
  user.level = 70
user.role = levels[14]
 
  user.limit += 3
  user.money += 565

  upgradeMessage(m.pushName, user.level, 565,3)			  	  	 
}
} //70
if(userxp>426000 && userxp<440600 ){
  if(user.level > 71){ //user level higher than one?
    user.level=71 //set level 1
    user.role = levels[14]
    user.money-=25
    
    //logic
  }
else if(user.level==71){
  return
}
else if(user.level<71){
  user.level = 71
user.role = levels[14]
user.money += 450

upgradeMessage(m.pushName, user.level, 450,0)		  	  	 
}
} //71
if(userxp>440600 && userxp<455600 ){
  if(user.level > 72){ //user level higher than one?
    user.level=72 //set level 1
    user.role = levels[14]
    user.money-=25
    
    //logic
  }
else if(user.level==72){
  return
}
else if(user.level<72){
  user.level = 72
user.role = levels[14]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)	 	  		  	  	 
}
} //72
if(userxp>455600 && userxp<471000 ){
  if(user.level > 73){ //user level higher than one?
    user.level=73 //set level 1
    user.role = levels[14]
    user.money-=25
    
    //logic
  }
else if(user.level==73){
  return
}
else if(user.level<73){
  user.level = 73
user.role = levels[14]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)				  	  	 
}
} //73
if(userxp>471000 && userxp<486800 ){
  if(user.level >74){ //user level higher than one?
    user.level=74//set level 1
    user.role = levels[14]
    user.money-=25
    
    //logic
  }
else if(user.level==74){
  return
}
else if(user.level<74){
  user.level = 74
user.role = levels[14]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)	 			  	  	 
}
} //74
if(userxp>486800 && userxp<503000 ){
  if(user.level >75){ //user level higher than one?
    user.level=75 //set level 1
    user.role = levels[15]
    user.money-=25
    
    //logic
  }
else if(user.level==75){
  return
}
else if(user.level<75){
  user.level = 75
user.role = levels[15]
user.money += 720
user.limit += 3


upgradeMessage(m.pushName, user.level,720,3)			  	  	 
}
} //75
if(userxp>503000 && userxp<519600 ){
  if(user.level > 76){ //user level higher than one?
    user.level=76 //set level 1
    user.role = levels[15]
    user.money-=25
    
    //logic
  }
else if(user.level==76){
  return
}
else if(user.level<76){
  user.level = 76
user.role = levels[15]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)			  	  	 
}
} //76
if(userxp>519600 && userxp<536600 ){
  if(user.level > 77){ //user level higher than one?
    user.level=77//set level 1
    user.role = levels[15]
    user.money-=25
    
    //logic
  }
else if(user.level==77){
  return
}
else if(user.level<77){
  user.level = 77
user.role = levels[15]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)	 			  	  	 
}
} //77
if(userxp>536600 && userxp<554000 ){
  if(user.level > 78){ //user level higher than one?
    user.level=78//set level 1
    user.role = levels[15]
    user.money-=25
    
    //logic
  }
else if(user.level==78){
  return
}
else if(user.level<78){
  user.level = 78
user.role = levels[15]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)			  	  	 
}
} //78
if(userxp>554000 && userxp<571800 ){
  if(user.level > 79){ //user level higher than one?
    user.level=79 //set level 1
    user.role = levels[15]
    user.money-=25
    
    //logic
  }
else if(user.level==79){
  return
}
else if(user.level<79){
  user.level = 79
user.role = levels[15]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)	 		  	  	 
}
} //79
if(userxp>571800 && userxp<590000 ){
  if(user.level > 80){ //user level higher than one?
    user.level=80 //set level 1
    user.role = levels[16]
    user.money-=25
    
    //logic
  }
else if(user.level==80){
  return
}
else if(user.level<80){
  user.level = 80
user.role = levels[16]
user.money += 660
user.limit += 4 


upgradeMessage(m.pushName, user.level,660,4)		  	  	 
}
} //80
if(userxp>590000 && userxp<608650 ){
  if(user.level > 81){ //user level higher than one?
    user.level=81 //set level 1
    user.role = levels[16]
    user.money-=25
    
    //logic
  }
else if(user.level==81){
  return
}
else if(user.level<81){
  user.level = 81
user.role = levels[16]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)		  	  	 
}
} //81
if(userxp>608650 && userxp< 627750 ){
  if(user.level > 82){ //user level higher than one?
    user.level=82 //set level 1
    user.role = levels[16]
    user.money-=25
    
    //logic
  }
else if(user.level==82){
  return
}
else if(user.level<82){
  user.level = 82
user.role = levels[16]
user.money += 450


upgradeMessage(m.pushName, user.level, 450,0)			  	  	 
}
} //82
if(userxp>627750 && userxp<647300 ){
  if(user.level > 83){ //user level higher than one?
    user.level=83 //set level 1
    user.role = levels[16]
    user.money-=25
    
    //logic
  }
else if(user.level==83){
  return
}
else if(user.level<83){
  user.level = 83
user.role = levels[16]
user.money += 475


upgradeMessage(m.pushName, user.level, 475,0)		  	  	 
}
} //83
if(userxp>647300 && userxp<667300 ){
  if(user.level > 84){ //user level higher than one?
    user.level=84 //set level 1
    user.role = levels[16]
    user.money-=25
    
    //logic
  }
else if(user.level==84){
  return
}
else if(user.level<84){
  user.level = 84
user.role = levels[16]
user.money += 475

upgradeMessage(m.pushName, user.level, 475,0)		  	  	 
			  	  	 
}
} //84
if(userxp>667300 && userxp<687750 ){
  if(user.level > 85){ //user level higher than one?
    user.level=85 //set level 1
    user.role = levels[17]
    user.money-=25
    
    //logic
  }
else if(user.level==37){
  return
}
else if(user.level<85){
  user.level = 85
user.role = levels[17]

  user.limit += 3
  user.money += 700

  upgradeMessage(m.pushName, user.level,700,3)		  	  	 
	 		  	  	 
}
} //85
if(userxp>687750 && userxp<708650 ){
  if(user.level > 86){ //user level higher than one?
    user.level=86 //set level 1
    user.role = levels[17]
    user.money-=25
    
    //logic
  }
else if(user.level==86){
  return
}
else if(user.level<86){
  user.level = 86
user.role = levels[17]
user.money += 475

upgradeMessage(m.pushName, user.level, 475,0)		  	  	 
 		  	  	 
}
} //86
if(userxp>708650 && userxp<730000 ){
  if(user.level > 87){ //user level higher than one?
    user.level=87 //set level 1
    user.role = levels[17]
    user.money-=25
    
    //logic
  }
else if(user.level==87){
  return
}
else if(user.level<87){
  user.level = 87
user.role = levels[17]
user.money += 475

upgradeMessage(m.pushName, user.level, 475,0)		  	  	 
 		  		  	  	 
}
} //87
if(userxp>730000 && userxp<751800 ){
  if(user.level > 88){ //user level higher than one?
    user.level=88 //set level 1
    user.role = levels[17]
    user.money-=25
    
    //logic
  }
else if(user.level==88){
  return
}
else if(user.level<88){
  user.level = 88
user.role = levels[17]
user.money += 475

upgradeMessage(m.pushName, user.level, 475,0)		  	  	 
			  	  	 
}
} //88
if(userxp>751800 && userxp<774050 ){
  if(user.level >89 ){ //user level higher than one?
    user.level=89 //set level 1
    user.role = levels[17]
    user.money-=25
    
    //logic
  }
else if(user.level==89){
  return
}
else if(user.level<89){
  user.level = 89
user.role = levels[17]
user.money += 475

upgradeMessage(m.pushName, user.level, 475,0)		  	  	 
		 		  	  	 
}
} //89
if(userxp>774050 && userxp<796750 ){
  if(user.level > 90){ //user level higher than one?
    user.level=90 //set level 1
    user.role = levels[18]
    user.money-=25
    
    //logic
  }
else if(user.level==90){
  return
}
else if(user.level<90){
  user.level = 90
user.role = levels[18]
  
  user.limit += 8

  user.money += 850

  upgradeMessage(m.pushName, user.level, 850,8)		  	  	 
		  		  	  	 
}
} //90
if(userxp>796750 && userxp<819900 ){
  if(user.level > 91){ //user level higher than one?
    user.level=91 //set level 1
    user.role = levels[18]
    user.money-=25
    
    //logic
  }
else if(user.level==91){
  return
}
else if(user.level<91){
  user.level = 91
user.role = levels[18]
user.money += 760

upgradeMessage(m.pushName, user.level, 760,0)		  	  	 
 		  	  	 
}
} //91
if(userxp>819900 && userxp<843500 ){
  if(user.level > 92){ //user level higher than one?
    user.level=92 //set level 1
    user.role = levels[18]
    user.money-=25
    
    //logic
  }
else if(user.level==92){
  return
}
else if(user.level<92){
  user.level = 92
user.role = levels[18]
user.money += 760
user.limit += 1

upgradeMessage(m.pushName, user.level, 760,1)		  	  	 
	  	  	 
}
} //92
if(userxp>843500 && userxp<867600 ){
  if(user.level > 93){ //user level higher than one?
    user.level=93 //set level 1
    user.role = levels[18]
    user.money-=25
    
    //logic
  }
else if(user.level==93){
  return
}
else if(user.level<93){
  user.level = 93
user.role = levels[18]
user.money += 760
user.limit += 1

upgradeMessage(m.pushName, user.level, 760,1)		  	  	 
		  	  	 
}
} //93
if(userxp>867600 && userxp<892300 ){
  if(user.level > 94){ //user level higher than one?
    user.level=94 //set level 1
    user.role = levels[18]
    user.money-=25
    
    //logic
  }
else if(user.level==94){
  return
}
else if(user.level<94){
  user.level = 94
user.role = levels[18]
user.money += 760
user.limit += 1

upgradeMessage(m.pushName, user.level, 760,1)		  	  	 
	   		  	  	 
}
} //94
if(userxp>892300 && userxp<917700 ){
  if(user.level > 95){ //user level higher than one?
    user.level=95 //set level 1
    user.role = levels[19]
    user.money-=25
    
    //logic
  }
else if(user.level==95){
  return
}
else if(user.level<95){
  user.level = 95
user.role = levels[19]
user.money += 980
user.limit += 12

upgradeMessage(m.pushName, user.level, 980,12)		  	  	 
 		  	  	 
}
} //95
if(userxp>917700 && userxp<943900 ){
  if(user.level > 96){ //user level higher than one?
    user.level=96 //set level 1
    user.role = levels[19]
    user.money-=25
    
    //logic
  }
else if(user.level==96){
  return
}
else if(user.level<96){
  user.level = 96
user.role = levels[19]
user.money += 830
user.limit += 2

upgradeMessage(m.pushName, user.level, 830,2)		  	  	 
  		  	  	 
}
} //96
if(userxp>943900 && userxp<971000 ){
  if(user.level > 97){ //user level higher than one?
    user.level=97 //set level 1
    user.role = levels[18]
    user.money-=25
    
    //logic
  }
else if(user.level==97){
  return
}
else if(user.level<97){
  user.level = 97
user.role = levels[18]
user.money += 830
user.limit += 2

upgradeMessage(m.pushName, user.level, 830,2)		  	  	 
		  	  	 
}
} //97
if(userxp>971000 && userxp<999100 ){
  if(user.level > 98){ //user level higher than one?
    user.level=98 //set level 1
    user.role = levels[19]
    user.money-=25
    
    //logic
  }
else if(user.level==98){
  return
}
else if(user.level<98){
  user.level = 98
user.role = levels[19]
user.money += 830
user.limit += 2

upgradeMessage(m.pushName, user.level, 830,2)		  	  	 
	  	  	 
}
} //98
if(userxp>999100 && userxp<1029100 ){
  if(user.level > 99){ //user level higher than one?
    user.level=99 //set level 1
    user.role = levels[19]
    user.money-=25
    
    //logic
  }
else if(user.level==99){
  return
}
else if(user.level<99){
  user.level = 99
user.role = levels[19]
user.money += 830
user.limit += 2

upgradeMessage(m.pushName, user.level, 830,2)		  	  	 
 		  	  	 
}
} //99

if (userxp > 1029100) {
  user.maxlevel = true
  user.role = levels[20]
  user.rce += 30
  user.money += 1600
user.limit += 15
  user.level=100; // Level up
  if(user.maxlevel==false){
    const maxLevel = global.db.data.chats[m.chat].language === 'en' ?
`[⚠︎]  𝗦̘̚𝗬̘̚𝗦̘̚𝗧̘̚𝗘̘̚𝗠̘̚ 𝗙̘̚𝗔̘̚𝗜̘̚𝗟̘̚𝗨̘̚𝗥̘̚𝗘̘̚
------------------------------------------------
> [+]  ĉ̸̥͋ᴏɴɢʀᴀᴛᴜʟ̷A̷ᴛɪᴏɴꜱ, ᴋi̴̞͝ᴅ
> [+]  𝚈̷𝚘̷𝚞̷ 𝚛̷𝚎̷𝚊̷𝚌̷𝚑̷𝚎̷𝚍̷ t̶̡̛̎𝚑̷𝚎̷ 𝚖̷𝚊̷𝚡̷ ḽ̵̛͙̹̞̏̍͌̉́𝚎̷𝚟̷𝚎̷𝚕̷
> [+]  ██████████████████████████████████
> [!]  ᴇʀʀᴏʀ ᴄᴏᴅᴇ: ₀ˣ₀⁰₀ᴰ₃ᴰᶠ
> [*]  LΞVΞL: *100*
> [*]  ꜱᴛᴀᴛᴜꜱ: [ȼømᵽłɇŧɇ]
------------------------------------------------` : 
`[⚠︎]  𝗦̘̚𝗬̘̚𝗦̘̚𝗧̘̚𝗘̘̚𝗠̘̚ 𝗙̘̚𝗔̘̚𝗜̘̚𝗟̘̚𝗨̘̚𝗥̘̚𝗘̘̚
------------------------------------------------
> [+]  ᴘᴀR̶̛̠̃̆͑̇̿̿̆͗̓̌̑̐͛̚ᴀʙᴇɴꜱ, Ģ̷͈̟͛̅͗͛ᴀʀǒ̴̏ͅᴛŏ̶̞͍̓
> [+]  𝚅̷𝚘̷c̴̫̟͑̿̽͜𝚎̷ 𝚊̷𝚝̷𝚒̷𝚗̷g̶̤̪͈͘𝚒̷𝚞̷ 𝚘̷ n̸͔̞̈́͝𝚒̷𝚟̷𝚎̷𝚕̷ m̶͉̊̅̕𝚊̷𝚡̷𝚒̷𝚖̷𝚘̷
> [+]  ██████████████████████████████████
> [!]  ᴇʀʀᴏʀ ᴄᴏᴅᴇ: ₀ˣ₀⁰₀ᴰ₃ᴰᶠ
> [*]  LΞVΞL: *100*
> [*]  ꜱᴛᴀᴛᴜꜱ: [ȼømᵽłɇŧɇ]
------------------------------------------------`


   m.reply(maxLevel);
}
}
}		
//export const disabled = false 