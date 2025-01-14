
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fs from 'fs'
import { join } from 'path'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
})

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {

 m.react("🎧")
    
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (/audio|video/.test(mime)) {
    let media = await q.download()
    let ext = mime.split('/')[1]
    let filename = join(__dirname, '../tmp/' + ext);
    fs.writeFileSync(filename, media)
    let res = await acr.identify(fs.readFileSync(filename))
    let { code, msg } = res.status
    if (code !== 0) throw msg
    let { title, artists, album, genres, release_date } = res.metadata.music[0]
    
    
    let txt = `
╭─────────────── ♬ ...─╮
   𝄞  ${title}
╰─... ♫ ───────────────╯
╭──────────────────── ♪ ...─╮
• _𝐀𝐫𝐭𝐢𝐬𝐭𝐚(𝐬):_ ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'ˢᵉᵐ ⁱⁿᶠᵒʳᵐᵃᶜᵒᵉˢ'}
• _𝐀𝐥𝐛𝐮𝐦:_ ${album.name || 'ˢᵉᵐ ⁱⁿᶠᵒʳᵐᵃᶜᵒᵉˢ'}
• _𝐆𝐞𝐧𝐞𝐫𝐨:_ ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'ˢᵉᵐ ⁱⁿᶠᵒʳᵐᵃᶜᵒᵉˢ'}
• _𝐃𝐚𝐭𝐚 𝐝𝐞 𝐥𝐚𝐧𝐜𝐚𝐦𝐞𝐧𝐭𝐨:_ ${release_date || 'ˢᵉᵐ ⁱⁿᶠᵒʳᵐᵃᶜᵒᵉˢ'}
╰─... ♭ ────────────────────╯

`.trim()
    fs.unlinkSync(filename)
    m.reply(txt)
  } else throw `╭━━━━━━━━━⬣
_𝐌𝐚𝐫𝐪𝐮𝐞 𝐮𝐦𝐚 𝐦𝐮𝐬𝐢𝐜𝐚 𝐩𝐚𝐫𝐚 𝐭𝐞𝐧𝐭𝐚𝐫 𝐢𝐝𝐞𝐧𝐭𝐢𝐟𝐢𝐜𝐚-𝐥𝐚_
╰━━━━━━━━━━━━━━━━━━⬣`
}

handler.help = ['shazam']
handler.level=18
handler.tags = ['tools']
handler.command = ['shazam']
export default handler