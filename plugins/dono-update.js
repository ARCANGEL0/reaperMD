
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
try {  
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull origin master' + (m.fromMe && text ? ' ' + text : ''))

const formattedStdout = stdout
    .toString()
    .split('\n') // Divide em linhas
    .filter(line => line.trim() !== '') // Remove linhas em branco
    .map(line => `> ${line.trimStart()}`) // Remove espaços no início e adiciona ">"
    .join('\n'); // Junta tudo de volta
//fetchmaster
    const fetch = `┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ git pull origin master
${formattedStdout}`;
//

conn.reply(m.chat, fetch, m)
  
  
  
  
}
//} catch {

var update = execSync(`git remote set-url origin ${global.projectRepo} && git
pull origin master -f`)

// update here 

    const formattedUp = update.toString()
        .split('\n') // Divide em linhas
        .filter(line => line.trim() !== '') // Remove linhas em branco
        .map(line => `> ${line.trim()}`) // Adiciona ">" e remove espaços extras
        .join('\n'); // Junta tudo de volta

    const fetch2 = `┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ git pull origin master
> . . . . . . . . . . . 
${formattedUp}
> . . . . . . . . . . .`;


await m.reply(fetch2)
} catch(e){
  console.log(e)
  let fetcherror= `┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ git pull origin master
> . . . . . . . . . . .
> [!] _Failed to pull refs from master_
> . . . . . . . . . . . `

////


await m.reply(fetcherror) 
}}
handler.help = ['update']
handler.tags = ['owner']
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler 
