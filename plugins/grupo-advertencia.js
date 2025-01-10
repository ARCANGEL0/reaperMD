
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn,participants, text, command,groupMetadata, usedPrefix }) => {
  
  //prems 


//conn.sendButton(m.chat, wm, langTOGGLE.smsAdveu1() + lenGB, null, [[langTOGGLE.smsEncender(), lenGB]],  m)
 
let who 
let img =  'https://i.imgur.com/DvHoMc3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
function getDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então é necessário adicionar 1
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Generate 1 random letter
    code += letters.charAt(Math.floor(Math.random() * letters.length));

    return code;
}
let tempBanimento = async (motivo) => {
  
     await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
   console.log('1🌙')
     const groupAdms = participants.filter(p => p.admin)
 
  let adms =[]
  const listaAdmin = groupAdms.map((v, i) =>
  adms.push(v.id))
  
   console.log('2🌙')
  console.log(adms)
// Example usage:
const adminAleatorio = adms.getRandom()
let destino = global.db.data.chats[m.chat].reportchat || adminAleatorio

   console.log('3🌙')

  
let teks = `─┅──┅❖𓌜❖─┅──┅
𝖀𝖘𝖚á𝖗𝖎𝖔 𝕭𝖆𝖓𝖎𝖉𝖔!

*№ Protocolo: ${generateRandomCode()}*
*Data: ${getDataAtual()}*
 
Nome: ${global.db.data.users[who].name}
Contato: @${who.split`@`[0]}

*Grupo:* ${groupMetadata.subject}
⎔⎓──────────────
_*Motivo do exílio:*_
${motivo}
╰─...⎔⎓──────────────

─┅──┅❖ ❖─┅──┅`
   
   m.reply(teks,destino)
   
 }
	
let user = global.db.data.users[who]
if (!who) return conn.reply(m.chat, langTOGGLE.smsMalused3() + `*${usedPrefix + command} @${name} ${langTOGGLE['smsAdveu2']()}*`,  m)  	
let txt = text.replace('@' + who.split`@`[0], '').trim()

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
  }
}

try {
  
  if(who == global.criador){
    global.db.data.chats[m.chat].users[m.sender].adv += 1
console.log(user)
await m.reply(
    `╭━━━━『ÄÐvêr†êñ¢ïå』━━━━⬣
*@${m.sender.split`@`[0]}*
⚠️ *${global.db.data.chats[m.chat].users[m.sender].adv}/3*

_*Péssima escolha*_
${wm} || ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`,
    null, { mentions: [m.sender] });
    
    return !0
  }
global.db.data.chats[m.chat].users[who].adv += 1
console.log(user)
await m.reply(
    `╭━━━━『ÄÐvêr†êñ¢ïå』━━━━⬣
*@${who.split`@`[0]}*
⚠️ *${global.db.data.chats[m.chat].users[who].adv}/3*
${wm} || ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`,
    null,
    { mentions: [who] });
/*await conn.sendButton(m.chat,`${global.db.data.chats[m.chat].users[m.sender].adv == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ${langTOGGLE['smsAdveu4']()}\n\n🫵 *${text}*`, `*${langTOGGLE['smsAdveu5']()}*\n⚠️ *${global.db.data.chats[m.chat].users[m.sender].adv}/4*\n\n${wm}`, img, [
[langTOGGLE.smsToxic4(), '.ok'],
[langTOGGLE.smsAdveu6(), langTOGGLE.lenguaje() == 'en' ? usedPrefix + 'inventory' : usedPrefix + 'inventario']], false, { mentions: [who] }) //[who]*/
	
if (global.db.data.chats[m.chat].users[who].adv >= 3) {
global.db.data.chats[m.chat].users[who].adv=0
await m.reply(`${langTOGGLE['smsAdveu7']()}\n*@${who.split`@`[0]}* ${langTOGGLE['smsAdveu8']()}`, false, { mentions: [who] })

await tempBanimento('Usuario excedeu o numero de advertencias')
await conn.groupParticipantsUpdate(m.chat, [who], 'remove')

}	
return !1
} catch(e){
  console.log(e)
  m.react("💀")
  m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
}
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|adv|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = false
export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}