
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
  import linkedIn from 'linkedin-jobs-api'
import translate from '@vitalets/google-translate-api'
import piston from "piston-client";
let handler = async (m, { conn, text, usedPrefix, command ,args}) => {
  
try{
  let language = args[0]
  const codefresh = args.slice(1).join(' ');
  const client = piston({ server: "https://emkc.org" });
    
    const runtimes = await client.runtimes();
  if (!text){
    return m.reply(`╭─┅──┅❖  ❖─┅──┅
𝑬𝒙𝒆𝒄𝒖𝒕𝒆 𝒆 𝒄𝒐𝒎𝒑𝒊𝒍𝒆 𝒕𝒓𝒆𝒄𝒉𝒐𝒔 𝒅𝒆 𝒄𝒐𝒅𝒊𝒈𝒐 𝒏𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒐 𝒑𝒓𝒐𝒑𝒓𝒊𝒐 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑, 𝒖𝒕𝒊𝒍𝒊𝒛𝒂𝒏𝒅𝒐 𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝑰𝑫𝑬 𝒊𝒏𝒕𝒆𝒓𝒏𝒂 𝒅𝒐 𝑷𝒐𝒆.

𝑼𝒔𝒆 *.dev lista* 𝒑𝒂𝒓𝒂 𝒊𝒏𝒗𝒐𝒄𝒂𝒓 𝒂 𝒍𝒊𝒔𝒕𝒂 𝒅𝒂𝒔 𝒍𝒊𝒏𝒈𝒖𝒂𝒈𝒆𝒏𝒔 𝒔𝒖𝒑𝒐𝒓𝒕𝒂𝒅𝒂𝒔.
𝑷𝒂𝒓𝒂 𝒄𝒐𝒏𝒋𝒖𝒓𝒂𝒓 𝒖𝒎 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒖𝒔𝒆 *.dev <linguagem> <código>.*
──────────────────
𝑬𝒙𝒆𝒎𝒑𝒍𝒐:
*.dev javascript console.log('Bem-vindo às trevas')*
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
  }
  
  
if (args[0] == 'lista')
{
  return m.reply(`𝑺𝒆𝒍𝒆𝒄𝒊𝒐𝒏𝒆 𝒂 𝒏𝒆𝒇𝒂𝒔𝒕𝒂 𝒍𝒊𝒏𝒈𝒖𝒂𝒈𝒆𝒎 𝒅𝒆 𝒑𝒓𝒐𝒈𝒓𝒂𝒎𝒂𝒄𝒂𝒐 𝒑𝒂𝒓𝒂 𝒊𝒏𝒗𝒐𝒄𝒂𝒓 𝒔𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐 𝒏𝒆𝒔𝒕𝒆 𝒓𝒆𝒄𝒊𝒏𝒕𝒐
  
${listagem(runtimes)}
  `)
}



    const result = await client.execute(language, codefresh);
    console.log('⏳⏳⏳⏳⏳⏳')
 console.log(codefresh)
console.log(result)
  let sttcheck
if(!result.run.stderr){
  sttcheck=`─﹝✅﹞───────────`
}else {
  sttcheck = `─﹝❌﹞───────────`
}
  m.reply(`┏━─ *「️ᴇᴅɢᴀʀ ᴄᴏɴꜱᴏʟᴇ v3」* ─━┓
│▢ _Runtime:_ _*${language}*_
┗━───────────────━┛
${sttcheck}

${result.run.output}
`)
} catch(e){
  console.log(e)
  m.react("💀")
  m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
}
}
handler.help = ['emprego']
handler.tags = ['jobs']
handler.level=45
handler.command = ['code']

export default handler

const getLanguageId = (language) =>  {
    if (languages.hasOwnProperty(language)) {
        // If the language is directly available, return its ID
        return typeof languages[language] === 'object' ? languages[language].latest : languages[language];
    } else {
        // If the language is not directly available, check if it's a version of Python or TypeScript
        if (language.startsWith('python')) {
            // Extract Python version
            const version = language.match(/\d+\.\d+/);
            // If version is specified, return its ID, else return latest version ID
            return version ? languages.python[version[0]] : languages.python.latest;
        } else if (language.startsWith('typescript')) {
            // Extract TypeScript version
            const version = language.match(/\d+\.\d+/);
            // If version is specified, return its ID, else return latest version ID
            return version ? languages.typescript[version[0]] : languages.typescript.latest;
        } else {
            // If language is not found, return null or handle accordingly
            return null;
        }
    }
}




const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('pt-PT', options);
}
const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}

function listagem(languages) {
  const uniqueLanguages = new Set();
  
  languages.forEach(lang => {
    uniqueLanguages.add(`〘〙${lang.language}`);
    lang.aliases.forEach(alias => uniqueLanguages.add(`〘〙${alias}`));
  });
  
  return Array.from(uniqueLanguages).join('\n');
}
