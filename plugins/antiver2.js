
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import { join } from 'path'
import { exec } from 'child_process'
import { unlinkSync, readFileSync, writeFile } from 'fs'; 

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].antiver || global.db.data.chats[m.chat].isBanned) return m.react("⭕")
if (global.db.data.chats[m.chat].isBanned) return !1

  let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
const exposedMessage = global.db.data.chats[m.chat].language === 'pt'
    ? [
        `> root@bytesec:~# extundelete /dev/sda1 -r --target=view_once
. . . . . . . . . . . . . . . . . . . . . . . . 

[+] Arquivo recuperado:
> Desculpa, garoto. Aqui, não mantemos segredos uns dos outros.
> # Vigilância ativa - ΒYƬΣSΞC-MĐ `,

        `> root@bytesec:~# photorec /dev/sda1 --filetype=jpeg --undelete
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Arquivo recuperado:
> Mensagens “visualizar uma vez”? Ah, claro...
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,

        `> root@bytesec:~# recoverfiles /dev/sda1 -p --view-once
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Arquivo recuperado:
> Parece que alguém levou um xposed
> # Vigilância ativa - ΒYƬΣSΞC-MĐ`,

        `> root@bytesec:~# dd if=/dev/sda1 of=/recovered.msg bs=4M
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Arquivo recuperado:
> Ops, era para ser segredo? 
> # Vigilância ativa - ΒYƬΣSΞC-MĐ`
    ]
    : [
        `> root@bytesec:~# extundelete /dev/sda1 -r --target=view_once
. . . . . . . . . . . . . . . . . . . . . . . . 

[+] File recovered:
> Sorry, kiddo. In here, we don’t keep secrets from each other.
> # Monitored by - ΒYƬΣSΞC-MĐ
`,

        `> root@bytesec:~# photorec /dev/sda1 --filetype=jpeg --undelete
. . . . . . . . . . . . . . . . . . . . . . . .

[+] File recovered:
> View only once messages? Yeah, right…
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> root@bytesec:~# recoverfiles /dev/sda1 -p --view-once
. . . . . . . . . . . . . . . . . . . . . . . .

[+] File recovered:
> Seems like someone just got xposed
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> root@bytesec:~# dd if=/dev/sda1 of=/recovered.msg bs=4M
. . . . . . . . . . . . . . . . . . . . . . . .

[+] File recovered:
> Ops, was it supposed to be a secret?
> # Monitored by - ΒYƬΣSΞC-MĐ`
    ]
    
    if (/webp|image|video/g.test(mime)) {
      let img = await q.download?.()
      
           conn.sendFile(m.chat, img, 'error', getRandom(exposedMessage),m)
      
    }
  
    

  
  
}

handler.tags = ['tools']

handler.command = ['reveal','ver']
export default handler

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}