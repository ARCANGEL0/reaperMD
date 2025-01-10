
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import {statSync, readdirSync,readFileSync, unlinkSync, existsSync, promises as fs, rmSync,watch} from 'fs';
import path, { join } from 'path'
import { tmpdir } from 'os'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `${langTOGGLE['smsAvisoAG']()}𝙐𝙏𝙄𝙇𝙄𝙕𝘼 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙄𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀 𝙀𝙉 𝙀𝙇 𝙉𝙐́𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝘿𝙀𝙇 𝘽𝙊𝙏` },
      { quoted: m }
    );
  }
 /* await conn.sendMessage(
    m.chat,
    { text: `${langTOGGLE['smsAvisoAG']()}𝙄𝙉𝙄𝘾𝙄𝘼𝙉𝘿𝙊 𝙋𝙍𝙊𝘾𝙀𝙎𝙊 𝘿𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 : ${filesDeleted} 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘿𝙀 𝙎𝙀𝙎𝙎𝙄𝙊𝙉, 𝙀𝙓𝘾𝙀𝙋𝙏𝙊 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 *(creds.json)*` },
    { quoted: m }
  );*/
  conn.reply(m.chat, `${eg} *♱ 𝑨𝒓𝒒𝒖𝒊𝒗𝒐𝒔 𝒕𝒆𝒎𝒑𝒐𝒓𝒂𝒓𝒊𝒐𝒔 𝒓𝒆𝒎𝒐𝒗𝒊𝒅𝒐𝒔*`, m)
const tmp = [tmpdir(), join(__dirname, '../tmp')];
const filename = [];

tmp.forEach(dirname => {
  readdirSync(dirname).forEach(file => {
    const filePath = join(dirname, file);
    const stats = statSync(filePath);

    if (stats.isFile()) {
      filename.push(filePath);
    }
  });
});

filename.forEach(file => unlinkSync(file));
  
  
  const sessionPath = './EdgarData/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `${langTOGGLE['smsAvisoFG']()}*Sem sessões.*` },
        { quoted: m }
      );
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: `${langTOGGLE['smsAvisoFG']()}*_Sem arquivos na pasta*_` },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `╭━━━━━━━━━⬣
✔️ 𝑶𝒑𝒆𝒓𝒂𝒄𝒂𝒐 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒅𝒂 𝒄𝒐𝒎 𝒔𝒖𝒄𝒆𝒔𝒔𝒐

*${filesDeleted}* 𝑨𝒓𝒒𝒖𝒊𝒗𝒐𝒔 𝒇𝒐𝒓𝒂𝒎 𝒅𝒆𝒍𝒆𝒕𝒂𝒅𝒐𝒔!
╰━━━━━━━━━━━━━━━━━━⬣` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('Erro na leitura dos arquivos :', err);
    await conn.sendMessage(
      m.chat,
      { text: `${langTOGGLE['smsAvisoFG']()}erro ao eliminar` },
      { quoted: m }
    );
  }
 
  
  
}
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|resetbot|resetsessao)$/i;
handler.admin = true
export default handler;
