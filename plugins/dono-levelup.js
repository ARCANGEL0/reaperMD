
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { text, participants,isAdmin,isOwner, conn, args, usedPrefix, command }) => {
let why = ` ━━━━━━━━━⬣⬣━━━━━━━━
*Exemplo:*\n${usedPrefix + command} @${m.sender.split("@")[0]} 100  
${usedPrefix + command} 100 (Respondendo a mensagem)
 ━━━━━━━━━⬣⬣━━━━━━━━`
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false

let res = [];
if(!(isAdmin || isOwner)){
   m.react("❌")
   
   return !0;
 } 
 
 	 const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(m.sender)
   
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[who]){
  global.db.data.chats[m.chat].users[who]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        usuariosRoubados: [],
        silenced: false,
        maxlevel: false,
        cocriador: false,
       
  }
}

if(!global.db.data.chats[m.chat].users[who].usuariosRoubados){
  global.db.data.chats[m.chat].users[who].usuariosRoubados=[]
}

if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
// sender..
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        usuariosRoubados: [],
        silenced: false,
        maxlevel: false,
        cocriador: false,
       
  }
}

if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
if (!global.db.data.chats[m.chat].users[m.sender].rouboTimestamp) {
  global.db.data.chats[m.chat].users[m.sender].rouboTimestamp = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
}

//sender

console.log(command)
	  
    
	let user = global.db.data.chats[m.chat].users[who]
switch (command) {

  
  
case "lvlupuser":
case "upuser":

if(!(isAdmin || isOwner)){
     m.react("❌")
   
   return !0;
  }
  
 else if(m.quoted && m.quoted.sender&& !args[0])
  {
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 m.reply("༒︎ Subindo usuário de nível ")    

  }
  else if(m.mentionedJid[0]){
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
// global.db.data.chats[m.chat].users[who].level
 m.reply("༒︎ Subindo usuário de nível ")
}
else if(!mentionedJid[0] && !m.quoted) {
  conn.reply(m.chat, why, m, { mentions: [m.sender] })
}
break
  
case "darxp":
  
  if(!(isAdmin || isOwner)){
     m.react("❌")
   
   return !0;
  }
  
 else if(m.quoted && m.quoted.sender && !args[1])
  {
    global.db.data.chats[m.chat].users[who].exp += parseInt(args[0])
// global.db.data.chats[m.chat].users[who].level
m.reply(`༒︎ Enviando ${args[0]} 𝑥𝑝`)

  }
  else if(m.mentionedJid[0] && args[0] && args[1]){
console.log(args[0])
console.log(args[1])
console.log(m.mentionedJid[0])
let jid = m.mentionedJid[0]
if(args[0]==`@${jid.split("@")[0]}`){
global.db.data.chats[m.chat].users[who].exp += parseInt(args[1])
m.reply(`༒︎ Enviando ${args[1]} 𝑥𝑝`)
}
if(args[1]==`@${jid.split("@")[0]}`){
global.db.data.chats[m.chat].users[who].exp += parseInt(args[0])
m.reply(`༒︎ Enviando ${args[0]} 𝑥𝑝`)
}
// global.db.data.chats[m.chat].users[who].level
}
else if(!m.mentionedJid[0] && !m.quoted) {
  conn.reply(m.chat, why, m, { mentions: [m.sender] })
}
break
}


}
handler.help = ["block", "unblock"]
handler.tags = ["owner"]
handler.command = /^(lvlupuser|upuser|darxp)$/i

 
export default handler
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function has24HoursPassed(dateString) {
  // Parse the date from the input string
  const inputDate = new Date(dateString);
  
  // Get the current date and time
  const currentDate = new Date();
  
  // Calculate the difference in milliseconds
  const differenceInMilliseconds = currentDate - inputDate;
  
  // Convert milliseconds to hours
  const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
  
  // Check if 24 hours have passed
  return differenceInHours >= 24;
}
async function reset(){
  
      m.react("🔄")
        // Replenish attempts and update timestamp
        userData.tentativasRoubo = 5;
        userData.usuariosRoubados =[]
        global.db.data.chats[m.chat].users[m.sender].rouboTimestamp = new Date();
        console.log("Seus 5 tentativas de roubo foram reabastecidas. Boa sorte!");
        
             
             
        const sucesso = Math.random() < 0.6;

        if (sucesso) {
          let rouf = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[who].money - 0.1 * global.db.data.chats[m.chat].users[who].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[who].money;
          let roubo = parseInt(Math.round(rouf));
            global.db.data.chats[m.chat].users[who].money -= roubo;
            if(global.db.data.chats[m.chat].users[who].money <0){
            global.db.data.chats[m.chat].users[who].money =0
              
            }
            
            
            global.db.data.chats[m.chat].users[m.sender].money += roubo
            
            let mssg = `*╭─┅──┅❖*
𓂀 𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, 𝒐 𝒄𝒓𝒊𝒎𝒆 𝒇𝒐𝒊 𝒄𝒐𝒏𝒔𝒖𝒎𝒂𝒅𝒐 𝒄𝒐𝒎 ê𝒙𝒊𝒕𝒐

${user(m.sender)}, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒇𝒖𝒈𝒂𝒛, 
𝒔𝒖𝒃𝒕𝒓𝒂𝒊𝒖 ${roubo} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒐 𝒅𝒐𝒎í𝒏𝒊𝒐 𝒅𝒆 ${user(who)}.

${pickRandom(frases)
}
*╰─┅──┅❖*`

await m.reply(mssg, null, { mentions: conn.parseMention(mssg)})
            console.log(`Você roubou ${roubo} moedas.`);
        } else {
          let perdaf = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[who].money - 0.1 * global.db.data.chats[m.chat].users[who].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[who].money
         let perda = parseInt(Math.round(perdaf));
          global.db.data.chats[m.chat].users[m.sender].money -= perda
          if( global.db.data.chats[m.chat].users[m.sender].money<0){
             global.db.data.chats[m.chat].users[m.sender].money = 0
          }
          
          
            console.log("Ops.. você foi pego no flagra. Tente novamente.");
            
            m.reply(`─┅──┅❖ 💵 ❖─┅──┅
         𝚅𝚘𝚌𝚎 𝚏𝚘𝚒 𝚏𝚕𝚊𝚐𝚛𝚊𝚍𝚘! 𝚂𝚎𝚛𝚊 𝚙𝚞𝚗𝚒𝚍𝚘
            
${pickRandom(
            [`𝑸𝒖𝒆 𝒕𝒆𝒖 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒔𝒊𝒓𝒗𝒂 𝒅𝒆 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑬𝒔𝒄𝒐𝒍𝒉𝒆 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂, 𝒑𝒐𝒊𝒔 𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒑𝒐𝒅𝒆 𝒍𝒆𝒗𝒂𝒓 à 𝒑𝒆𝒓𝒅𝒂.`,
            
  `𝑨𝒕𝒆𝒏çã𝒐: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒇𝒐𝒓𝒂𝒎 𝒑𝒆𝒓𝒅𝒊𝒅𝒂𝒔 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒔𝒆𝒓 𝒑𝒓𝒖𝒅𝒆𝒏𝒕𝒆 𝒆𝒎 𝒕𝒖𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑬𝒊𝒔 𝒂 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒇𝒐𝒓𝒂𝒎 𝒕𝒓𝒂𝒈𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒂 𝒗𝒐𝒓𝒂𝒈𝒆𝒎 𝒅𝒆 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒕𝒆 𝒈𝒖𝒊𝒆 𝒑𝒆𝒍𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒔𝒆𝒎𝒑𝒓𝒆 𝒅𝒂 𝒇𝒓𝒂𝒈𝒊𝒍𝒊𝒅𝒂𝒅𝒆 𝒅𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑨𝒕𝒆𝒏çã𝒐, 𝒂𝒍𝒎𝒂 𝒅𝒆𝒔𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒅𝒂: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒔𝒖𝒄𝒖𝒎𝒃𝒊𝒓𝒂𝒎 à 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒅𝒆𝒔𝒂𝒔𝒕𝒓𝒆 𝒕𝒆 𝒔𝒊𝒓𝒗𝒂 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒑𝒆𝒓𝒑é𝒕𝒖𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒆𝒎 𝒕𝒆𝒖𝒔 𝒑𝒂𝒔𝒔𝒐𝒔.`,
  `𝑨𝒍𝒆𝒓𝒕𝒂: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒓𝒂 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒕𝒓𝒊𝒍𝒉𝒂𝒓 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂 𝒐𝒔 𝒄𝒂𝒎𝒊𝒏𝒉𝒐𝒔 𝒆𝒔𝒄𝒖𝒓𝒐𝒔 𝒅𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒄𝒓𝒖𝒛: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒇𝒐𝒓𝒂𝒎 𝒅𝒆𝒗𝒐𝒓𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒐 𝒂𝒃𝒊𝒔𝒎𝒐 𝒅𝒆 𝒕𝒆𝒖 𝒆𝒓𝒓𝒐. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒆𝒋𝒂 𝒕𝒆𝒖 𝒈𝒖𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆 𝒅𝒂 𝒅𝒐𝒓 𝒄𝒂𝒖𝒔𝒂𝒅𝒂 𝒑𝒆𝒍𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒇𝒂𝒍𝒉𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒍ú𝒈𝒖𝒃𝒓𝒆 𝒕𝒆 𝒂𝒄𝒐𝒎𝒑𝒂𝒏𝒉𝒆, 𝒓𝒆𝒄𝒐𝒓𝒅𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒒𝒖𝒆 𝒑𝒂𝒊𝒓𝒂𝒎 𝒔𝒐𝒃𝒓𝒆 𝒐𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒎 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒂 𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒆: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒄𝒂𝒔𝒕𝒊𝒈𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒅𝒆𝒓𝒓𝒐𝒕𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒕𝒆 𝒑𝒆𝒓𝒔𝒊𝒈𝒂, 𝒓𝒆𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒖𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒑𝒂𝒏𝒉𝒆𝒊𝒓: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒅𝒆 𝒔𝒆𝒓 𝒗í𝒕𝒊𝒎𝒂𝒔 𝒄𝒖𝒆 𝒔𝒆 𝒃𝒂𝒔𝒆𝒊𝒂𝒎 𝒏𝒂 𝒑𝒂𝒔𝒔𝒂𝒈𝒆𝒎, 𝒄𝒐𝒎𝒐 𝒑𝒐𝒅𝒆 𝒍𝒆𝒈𝒂𝒍.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 𝒎𝒐𝒆𝒅𝒂𝒔 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂` ])}
  
  ─┅──┅❖ ⸸ ❖─┅──┅
  `)
        }
        

        global.db.data.chats[m.chat].users[m.sender].tentativasRoubo -= 1
        
if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
           global.db.data.chats[m.chat].users[m.sender].usuariosRoubados.push(who);   global.db.data.chats[m.chat].users[m.sender].lastAttemptTimestamp = currentTime;
 
}