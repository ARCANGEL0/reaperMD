
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import { spawn } from 'child_process'
import { format } from 'util'

let handler = async (m, { conn, usedPrefix, command }) => {
 
    if (!m.quoted) return m.reply(`${langTOGGLE['smsAvisoMG']()}*╭━━━━━━━━━⬣
┃
┃ ✒️📜 𝐀𝐠𝐮𝐚𝐫𝐝𝐨 𝐚 𝐭𝐮𝐚 𝐟𝐢𝐠𝐮𝐫𝐚 𝐜𝐨𝐦𝐨 
┃ 𝐮𝐦 𝐜𝐨𝐫𝐯𝐨 𝐬𝐨𝐥𝐢𝐭á𝐫𝐢𝐨 𝐚𝐧𝐬𝐞𝐢𝐚 
┃ 𝐩𝐞𝐥𝐨 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐨 𝐝𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬, 
┃ 𝐚𝐬𝐬𝐢𝐦 𝐞𝐧𝐭ã𝐨 𝐚 𝐭𝐨𝐫𝐧𝐚𝐫𝐞𝐢 𝐮𝐦𝐚 
┃ 𝐢𝐦𝐚𝐠𝐞𝐦 𝐚 𝐬𝐞𝐮 𝐚𝐠𝐫𝐚𝐝𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`)
    let q = m.quoted
    if (/sticker/.test(q.mediaType)) {
        let sticker = await q.download()
        if (!sticker) throw sticker
        if (!q.isAnimated == false) return m.reply(`*[ ! ]* Somente stickers estáticos`)
        let bufs = []
        const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
        let im = spawn(_spawnprocess, _spawnargs)
        im.on('error', e => m.reply(format(e)))
        im.stdout.on('data', chunk => bufs.push(chunk))
        im.stdin.write(sticker)
        im.stdin.end()
        im.on('exit', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'image.png', '', m)
            m.react('🛠️')
        })
    } else return m.reply(`*Responda a una imagen usando el comando:*\n\n📌 ${usedPrefix + command}\n`)
}

handler.help = ['aimg']
handler.tags = ['conversor']
handler.level =7
handler.command = ['toimg']

export default handler