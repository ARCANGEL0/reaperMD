
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { format } from 'util'
let debugMode = !1
//let winScore = 4999
//let playScore = 99
export async function before(m,{participants}) {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
  
  
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
if (!/^([1-9]|(me)?nyerah|\rendirse\|render|desistir|sair|salir|Salir|out|OUT|Out|surr?ender)$/i.test(m.text)) 
return !0
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { 
if (!isSurrender)
return !0 }
if (debugMode)
m.reply('[DEBUG]\n' + require('util').format({
isSurrender,
text: m.text }))
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': ' 𝙾 𝚓𝚘𝚐𝚘 𝚊𝚌𝚊𝚋𝚘𝚞',
'-2': '💿𝚒𝚗𝚟𝚊𝚕𝚒𝚍𝚘',
'-1': '💀 𝙿𝚘𝚜𝚒𝚌𝚊𝚘 𝚒𝚗𝚟𝚊𝚕𝚒𝚍𝚊',
0: '💀 𝙿𝚘𝚜𝚒𝚌𝚊𝚘 𝚒𝚗𝚟𝚊𝚕𝚒𝚍𝚊',
}[ok])
return !0 }
if (m.sender === room.game.winner)
isWin = true
else if (room.game.board === 511)
isTie = true

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
if (isSurrender) {
        
room.game._currentTurn = m.sender === room.game.playerX
isWin = true }
        
let dia = Math.floor(Math.random() * 2)
let tok = Math.floor(Math.random() * 2)
let expp = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let gata = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
let dia2 = Math.floor(Math.random() * 15)
let tok2 = Math.floor(Math.random() * 10)
let expp2 = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
let gata2 = Math.floor(Math.random() * (80 - 20 + 1)) + 20;


let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `
─┅──┅❖ ${isWin ? "𝚅𝚒𝚝𝚘𝚛𝚒𝚊": isTie ? "𝙴𝚖𝚙𝚊𝚝𝚎": ``} ❖─┅──┅
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
${isWin ? `@${(isSurrender ? room.game.currentTurn : room.game.winner).split('@')[0]} 🕯️💀*𝚅𝚎𝚗𝚌𝚎𝚜𝚝𝚎!*
𓅊 𝙴𝚖 𝚟𝚒𝚛𝚝𝚞𝚍𝚎 𝚍𝚎 𝚝𝚞𝚊 𝚌𝚘𝚗𝚚𝚞𝚒𝚜𝚝𝚊, 𝚛𝚎𝚌𝚎𝚋𝚎𝚛á𝚜 :
⧗ *2* ᴇᴛʜᴇʀᴇᴜᴍ
җ *${expp2}* 𝚇𝙿
🜅 *${gata2}* ʙʏᴛᴇᴄᴏɪɴꜱ

─┅──┅❖ ❖─┅──┅` :
isTie ? `*𝙽𝚘 𝚎𝚗𝚒𝚐𝚖𝚊 𝚍𝚘 𝚎𝚖𝚙𝚊𝚝𝚎...* 𝚊𝚖𝚋𝚊𝚜 𝚊𝚜 𝚊𝚕𝚖𝚊𝚜 𝚌𝚘𝚕𝚑𝚎𝚖:
⧗ *1* ᴇᴛʜᴇʀᴇᴜᴍ
җ *${expp}* 𝚇𝙿
🜅 *${gata}* ʙʏᴛᴇᴄᴏɪɴꜱ

─┅──┅❖ ❖─┅──┅
` : `🌕 *TURNO DE* @${room.game.currentTurn.split('@')[0]}`}
`.trim()
let users = global.db.data.chats[m.chat].users
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o)
await this.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await this.sendMessage(room.o, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
    if(!users[room.game.playerX])   {
      users[room.game.playerX] = {
        exp: 0,
        limit:0,
        role:'𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        level:0,
        money:0,
        adm: admins.includes(m.sender),
        legendary: false
      }
    } 
    if(!users[room.game.playerO])   {
      users[room.game.playerO] = {
        exp: 0,
        limit:0,
        role:'𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admins.includes(m.sender),
        legendary: false
      }
    } 
if (isTie || isWin) {
  delete conn.game[room.id]
  
  global.db.data.chats[m.chat].users[room.game.playerX].money += gata
 global.db.data.chats[m.chat].users[room.game.playerX].limit+= 1
 global.db.data.chats[m.chat].users[room.game.playerX].exp += expp
  global.db.data.chats[m.chat].users[room.game.playerO].money += gata
 global.db.data.chats[m.chat].users[room.game.playerO].limit+= 1
 global.db.data.chats[m.chat].users[room.game.playerO].exp += expp
 
        
if (isWin)
delete conn.game[room.id]
global.db.data.chats[m.chat].users[winner].money += gata2
 global.db.data.chats[m.chat].users[winner].limit+= 2
 global.db.data.chats[m.chat].users[winner].exp+= expp2
 
        
if (debugMode)
m.reply('[DEBUG]\n' + format(room))
delete this.game[room.id]}}
return !0 }
