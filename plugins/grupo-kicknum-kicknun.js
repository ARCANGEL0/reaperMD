
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
  
  if (!(isAdmin || !isOwner)) {
global.dfail('admin', m, conn)
throw false
}


if (!args[0]) return m.reply(`${langTOGGLE['smsAvisoMG']()}DIGITE O PREFIXO DO PAÍS. EXEMPLO:${usedPrefix + command} 593*`) 
if (isNaN(args[0])) return m.reply(`${langTOGGLE['smsAvisoMG']()}DIGITE O PREFIXO DE UM PAÍS PARA BUSCAR NUMEROS NO GRUPO.\n EXEMPLO: ${usedPrefix + command} 593*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`${langTOGGLE['smsAvisoAG']()}NAO HÁ MENHUM NUMERO NESTE GRUPO COM ESTE PREFIXO  +${lol}*`)
let numeros = ps.map(v=> '➥ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `⚠️ LISTA DE NÚMEROS NO GRUPO FOM O PREFIXO  +${lol}⚠️\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply(`${langTOGGLE['smsAvisoAG']()} ${langTOGGLE['smsSoloOwner']()}`) 
if (!isBotAdmin) return m.reply(`${langTOGGLE['smsAvisoAG']()} ${langTOGGLE['smsAllAdmin']()}`)          
conn.reply(m.chat, `${langTOGGLE['smsAvisoIIG']()}INICIANDO A INEVITAVEL REMOÇÃO DOS NUMEROS 
 A CADA 10 SEGUNDOS UM USUÁRIO SERÁ ELIMINADO`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} JA FOI ELIMINADO OU SAIU DO GRUPO :`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply(`${langTOGGLE['smsAvisoFG']()}`)}
break            
}}
handler.command = /^(listanum|kicknum)$/i

handler.fail = null
export default handler
