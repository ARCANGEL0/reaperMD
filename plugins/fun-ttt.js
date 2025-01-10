
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, isAdmin, isOwner, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-AB5xLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
if(!(isAdmin || isOwner|| m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
 
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `
╭━━━━━━━━━⬣
𝐉𝐨𝐠𝐨 𝐝𝐚 𝐯𝐞𝐥𝐡𝐚 ✖️
𝐓𝐢𝐜 𝐓𝐚𝐜 𝐓𝐨𝐞 ⭕
ϯϮϯϮϯϮϯϮ
🌒 𝙽𝚊 𝚙𝚎𝚗𝚞𝚖𝚋𝚛𝚊, 𝚊𝚒𝚗𝚍𝚊 𝚙𝚎𝚛𝚜𝚒𝚜𝚝𝚎 𝚊 𝚙𝚛𝚎𝚜𝚎𝚗ç𝚊 𝚍𝚎 𝚓𝚘𝚐𝚊𝚍𝚘𝚛𝚎𝚜 𝚗𝚎𝚜𝚝𝚊 𝚜𝚊𝚕𝚊 𝚍𝚎 𝚒𝚗𝚏𝚘𝚛𝚝𝚞𝚗𝚘𝚜. 𝚂𝚎 𝚍𝚎𝚜𝚎𝚓𝚊𝚒𝚜 𝚙𝚊𝚛𝚝𝚒𝚛, 𝚒𝚗𝚟𝚘𝚚𝚞𝚎  .𝙙𝙚𝙡𝙩𝙩𝙩 𝚙𝚊𝚛𝚊 𝚝𝚎 𝚕𝚒𝚋𝚎𝚛𝚝𝚊𝚛 𝚍𝚊𝚜 𝚝𝚎𝚒𝚊𝚜 𝚍𝚘 𝚓𝚘𝚐𝚘.

╰━━━━━━━━━━━━━━━━━━⬣`
if (!text) throw `${langTOGGLE['smsAvisoFG']()}
━━━━━━━━━⬣✖️⬣━━━━━━━━
𝐉𝐨𝐠𝐨 𝐝𝐚 𝐯𝐞𝐥𝐡𝐚 ✖️
𝐓𝐢𝐜 𝐓𝐚𝐜 𝐓𝐨𝐞 ⭕
ϯϮϯϮϯϮϯϮ
🕯️𝘗𝘰𝘣𝘳𝘦 𝘢𝘭𝘮𝘢... 𝘱𝘢𝘳𝘢 𝘫𝘰𝘨𝘢𝘳 𝘦𝘴𝘵𝘦 𝘫𝘰𝘨𝘰 𝘱𝘳𝘦𝘤𝘪𝘴𝘢𝘴 𝘪𝘯𝘷𝘰𝘤𝘢𝘳 𝘶𝘮𝘢 𝘴𝘢𝘭𝘢 𝘱𝘢𝘳𝘢 𝘰 𝘴𝘦𝘶 𝘪𝘯𝘧𝘰𝘳𝘵𝘶𝘯𝘪𝘰
𝘜𝘴𝘦 ${usedPrefix + command} _nome da sala_
𝘦 𝘢𝘨𝘶𝘢𝘳𝘥𝘦 𝘰𝘶𝘵𝘳𝘰 𝘫𝘰𝘨𝘢𝘥𝘰𝘳 𝘢𝘥𝘦𝘯𝘵𝘳𝘢𝘳 𝘴𝘶𝘢 𝘴𝘢𝘭𝘢
━━━━━━━━━⬣⭕⬣━━━━━━━━`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {

//await conn.sendButton(m.chat, `${langTOGGLE['smsAvisoEG']()}𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼 𝙇𝘼 𝙎𝘼𝙇𝘼 *${text}*\n𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙅𝙐𝙂𝘼𝙍!! 😼\n\n𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙃𝘼𝙎 𝙅𝙊𝙄𝙉𝙀𝘿 𝙏𝙃𝙀 𝙍𝙊𝙊𝙈 *${text}*\n𝙔𝙊𝙐 𝘾𝘼𝙉 𝙋𝙇𝘼𝙔 𝙉𝙊𝙒!! 👀`, wm, null, [['𝙌𝙪𝙚 𝙂𝙖𝙣𝙚 𝙚𝙡 𝙈𝙚𝙟𝙤𝙧 🤝', '👻'] ], fkontak, m)
await conn.reply(m.chat, `╭━━━⬣ 𝐂𝐎𝐌𝐎 𝐉𝐎𝐆𝐀𝐑 ϯ
✖️⭕ 𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚊 𝚊𝚘 𝚌𝚑𝚊𝚖𝚊𝚍𝚘 𝚍𝚎 𝚖𝚒𝚗𝚑𝚊 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚖 𝚌𝚘𝚖 𝚘 𝚗𝚞𝚖𝚎𝚛𝚘 𝚍𝚊 𝚙𝚘𝚜𝚒𝚌𝚊𝚘 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚓𝚊 𝚎𝚖 𝚝𝚎𝚞 𝚒𝚗𝚏𝚘𝚛𝚝𝚞𝚗𝚘 𝚓𝚘𝚐𝚘
╰━━━━━━━━━━━━━━━━━━⬣`, fkontak, m)
//await conn.sendButton(m.chat, `${langTOGGLE['smsAvisoRG']()}⭕️ *Clásico Juego del Gato o 3 en raya* ❌\n\n*¿Cómo jugar?*\n_Responde al Juego con un Número, el mensaje debe contener la posiscion en la que quieras estar (1,2,3,4,5,6,7,8,9)_\n\n*How to play?*\n_Answer the Game with a Number, the message must contain the position you want to be in (1,2,3,4,5,6,7,8,9)_`, wm, null, [['😽 𝙊𝙆 𝙂𝙍𝘼𝘾𝙄𝘼𝙎', 'ok'] ], fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `─┅──┅❖ ❖─┅──┅
🌒 𝙅𝙊𝙂𝘼𝘿𝙊𝙍𝙀𝙎*
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
*𝙏𝙐𝙍𝙉𝙊 𝘿𝙀*:
@${room.game.currentTurn.split('@')[0]}
─┅──┅❖ ❖─┅──┅`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://media.istockphoto.com/id/183820549/photo/tic-tac-toe-game.jpg?s=612x612&w=0&k=20&c=8uQqUyOlQvoo4UnlF50arTdH7T8TUva-Y2d69D5SAP0=`
conn.sendMessage(m.chat, { image: { url: imgplay }, caption: `─┅──┅❖ ❖─┅──┅
𝐉𝐨𝐠𝐨 𝐝𝐚 𝐯𝐞𝐥𝐡𝐚 ✖️
𝐓𝐢𝐜 𝐓𝐚𝐜 𝐓𝐨𝐞 ⭕
----
🕰️ 𝘈𝘨𝘶𝘢𝘳𝘥𝘢𝘯𝘥𝘰 𝘰 𝘴𝘦𝘨𝘶𝘯𝘥𝘰 𝘫𝘰𝘨𝘢𝘥𝘰𝘳. 𝘗𝘢𝘳𝘢 𝘦𝘯𝘵𝘳𝘢𝘳 𝘥𝘦𝘷𝘦 𝘥𝘪𝘨𝘪𝘵𝘢𝘳:
*${usedPrefix + command} ${text}*

𝘚𝘦 𝘥𝘦𝘴𝘦𝘫𝘢𝘳 𝘢𝘣𝘢𝘯𝘥𝘰𝘯𝘢𝘳 𝘢 𝘱𝘢𝘳𝘵𝘪𝘥𝘢, 𝘶𝘴𝘦:
*${usedPrefix}delttt*
─┅──┅❖ ❖─┅──┅` }, { mentions: conn.parseMention(text), quoted: fkontak })
/*conn.sendButton(m.chat, `😼 𝙅𝙐𝙀𝙂𝙊 𝙏𝙍𝙀𝙎 𝙀𝙉 𝙍𝘼𝙔𝘼 | 𝙂𝘼𝙈𝙀

🐈 𝙀𝙎𝙋𝙀𝙍𝘼𝙉𝘿𝙊 𝘼𝙇 𝙎𝙀𝙂𝙐𝙉𝘿𝙊 𝙅𝙐𝙂𝘼𝘿𝙊𝙍 𝙋𝙐𝙀𝘿𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝘾𝙊𝙉 𝙀𝙇 𝘽𝙊𝙏𝙊𝙉 𝘿𝙀 𝘼𝘽𝘼𝙅𝙊 𝙊 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 
*${usedPrefix + command} ${text}*

𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝘼𝘽𝘼𝙉𝘿𝙊𝙉𝘼𝙍 𝙇𝘼 𝙎𝘼𝙇𝘼 𝙐𝙎𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}delttt*


𝙒𝘼𝙄𝙏𝙄𝙉𝙂 𝙁𝙊𝙍 𝙏𝙃𝙀 𝙎𝙀𝘾𝙊𝙉𝘿 𝙋𝙇𝘼𝙔𝙀𝙍 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙀𝙉𝙏𝙀𝙍 𝙒𝙄𝙏𝙃 𝙏𝙃𝙀 𝘽𝙐𝙏𝙏𝙊𝙉 𝘽𝙀𝙇𝙊𝙒 𝙊𝙍 𝙐𝙎𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿
*${usedPrefix + command} ${text}*

𝙄𝙁 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙇𝙀𝘼𝙑𝙀 𝙏𝙃𝙀 𝙍𝙊𝙊𝙈 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}delttt*`, wm, imgplay, [['😎 𝙐𝙉𝙄𝙍𝙈𝙀 𝘼𝙇 𝙅𝙐𝙀𝙂𝙊 | 𝙅𝙊𝙄𝙉 𝙂𝘼𝙈𝙀', `${usedPrefix + command} ${text}`]], fkontak, m, { mentions: conn.parseMention(text) })*/
conn.game[room.id] = room
}}


handler.command = ['xo']
export default handler
