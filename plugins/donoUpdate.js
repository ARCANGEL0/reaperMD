
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'ARCANGEL0';
const repo = 'Bytesec-MD';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `${langTOGGLE['smsAvisoIIG']()}  𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊 𝘼𝙏𝙐𝙇𝙄𝙕𝘼𝘿𝙊!!\n𝙍𝙀𝙋𝙊: ${html_url}\n*• 𝙈𝙀𝙉𝙎. 𝘿𝙀 𝘾𝙊𝙈𝙈𝙄𝙏:* ${message}` }, { quoted: m })
   } 
  } catch (error) {
    await m.reply(`${fg} 𝙀𝙍𝙍𝙊 𝘼𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 𝙊 𝙍𝙀𝙋𝙊:'`, error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(fetchrepo|actualizacion)/i
handler.rowner = true
export default handler
