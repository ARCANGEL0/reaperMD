
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { text, conn, usedPrefix, command }) => {
let why = `*Exemplo:*\n${usedPrefix + command} @${m.sender.split("@")[0]}`
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) conn.reply(m.chat, why, m, { mentions: [m.sender] })
let res = [];
console.log(command)
	
switch (command) {
case "block":
case "block":
case "bloquear":		
if (who) await conn.updateBlockStatus(who, "block").then(() => {
  if(!global.db.data.users[who]){
    global.db.data.users[who] = {
      blocked: true,
      antispam:0
    }
  }
    global.db.data.users[who].blocked = true
    global.db.data.users[who].antispam= 0
res.push(who);
})
conn.reply(m.chat, ` ━━━━━━━━━⬣💀⬣━━━━━━━━
 ${res.map(v => '@' + v.split("@")[0])}
 
 💿🪦 𝗕𝗮𝗻𝗶𝗱𝗼! 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝘃𝗲𝗱𝗮𝗱𝗼𝘀! 𝗡𝗮 𝗽𝗲𝗻𝘂𝗺𝗯𝗿𝗮 𝗱𝗶𝗴𝗶𝘁𝗮𝗹, 𝘀𝘂𝗯𝗺𝗲𝘁𝗮-𝘀𝗲 𝗮 𝗲𝘅𝗰𝗹𝘂𝘀𝗮𝗼 𝗱𝗮 𝗶𝗻𝘁𝗲𝗿𝗮𝗰𝗮𝗼 𝗰𝗼𝗺 𝗺𝗶𝗻𝗵𝗮 𝗽𝗲𝘀𝘀𝗼𝗮
 
 ━━━━━━━━━⬣🚫⬣━━━━━━━━`, m, { mentions: res }) 
break
		
case "unblock":
case "unblock":
case "desbloquear":
if (who) await conn.updateBlockStatus(who, "unblock").then(() => {
  
  if(!global.db.data.users[who]){
    global.db.data.users[who] = {
      blocked: false,
      antispam: 0
    }
  }
    global.db.data.users[who].blocked = false
    global.db.data.users[who].antispam = 0
res.push(who);
conn.reply(m.chat, ` ━━━━━━━━━⬣💀⬣━━━━━━━━
 ${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}*
 💿🪦 𝑺𝒐𝒃 𝒐 𝒎𝒂𝒏𝒕𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒅𝒂 𝒆𝒙𝒄𝒍𝒖𝒔𝒂𝒐, 𝒆𝒊𝒔 𝒒𝒖𝒆 𝒂 𝒔𝒆𝒏𝒕𝒆𝒏𝒄𝒂 𝒔𝒊𝒏𝒊𝒔𝒕𝒓𝒂 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆. 𝑻𝒆𝒖 𝒃𝒂𝒏𝒊𝒎𝒆𝒏𝒕𝒐, 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒄𝒐𝒓𝒗𝒐 𝒏𝒐𝒕𝒖𝒓𝒏𝒐, 𝒂𝒈𝒐𝒓𝒂 𝒂𝒍𝒄𝒂 𝒗𝒐𝒐 𝒂𝒐 𝒆𝒔𝒒𝒖𝒆𝒄𝒊𝒎𝒆𝒏𝒕𝒐. 𝑹𝒆𝒕𝒐𝒓𝒏𝒂, 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒗𝒊𝒂𝒋𝒂𝒏𝒕𝒆, 𝒂𝒐𝒔 𝒅𝒐𝒎𝒊𝒏𝒊𝒐𝒔 𝒗𝒊𝒓𝒕𝒖𝒂𝒊𝒔 𝒐𝒖𝒕𝒓𝒐𝒓𝒂 𝒗𝒆𝒅𝒂𝒅𝒐𝒔.
 ━━━━━━━━━⬣🚫⬣━━━━━━━━`, m, { mentions: res })
})
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break
}
}
handler.help = ["block", "unblock"]
handler.tags = ["owner"]
handler.command = /^(block|unblock|bloquear|desbloquear)$/i
handler.owner = true
handler.admin = false
 
export default handler
