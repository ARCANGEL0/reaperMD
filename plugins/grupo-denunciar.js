
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text, usedPrefix, command,groupMetadata, participants }) => {
 
if (!m.quoted) throw `${mg}Marque a mensagem infratora\n`
if (text && text.length < 5) throw `${fg} ✒️*Mínimo 5 caracteres para realizar o relato*\n.*`
if (text && text.length > 1000) throw `${fg} ✒️ *Máximo 1000 caracteres para o Relato.*\n*`

function getDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então é necessário adicionar 1
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Generate 1 random letter
    code += letters.charAt(Math.floor(Math.random() * letters.length));

    return code;
}
  
console.log(generateRandomCode());
console.log(getDataAtual());

const groupAdms = participants.filter(p => p.admin)
 
  let adms =[]
  const listaAdmin = groupAdms.map((v, i) =>
  adms.push(v.id))
  
   console.log('2🌙')
  console.log(adms)
  
let teks = `─┅──┅❖ ❖─┅──┅
𝗗𝗘𝗡𝗨𝗡𝗖𝗜𝗔 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗔 𓄿

*№: ${generateRandomCode()}*
*Data: ${getDataAtual()}*

_*Denunciante:*_
Nome: ${m.pushName}
Contato: Wa.me/${m.sender.split`@`[0]}

_*Acusado:*_
Nome: ${m.quoted.name}
Contato: Wa.me/${m.quoted.sender.split`@`[0]}

_*Descrição da Ocorrência:*_
${text ? text : 'Sem descrição'}

_*Mensagem do Acusado:*_
${m.quoted.text}

Assinatura:
𝓜𝓮𝓻𝓲𝓽𝓲𝓼𝓼𝓲𝓶𝓸,  𝓔𝓭𝓰𝓪𝓻 𝓐. 𝓟𝓸𝓮


𝗗𝗘𝗡𝗨𝗡𝗖𝗜𝗔 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗔 𓄿
─┅──┅❖ ❖─┅──┅
`
//conn.reply('19393844141@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})

    
  

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
    let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].reportchat){
m.quoted.reply(teks,adms.getRandom())
 return  m.reply(`╭─┅──┅❖  ❖─┅──┅

𝙲𝚊𝚗𝚊𝚕 𝚍𝚎 𝚍𝚎𝚜𝚝𝚒𝚗𝚘 𝚙𝚊𝚛𝚊 𝚍𝚎𝚗𝚞𝚗𝚌𝚒𝚊𝚜 𝚗ã𝚘 𝚍𝚎𝚏𝚒𝚗𝚒𝚍𝚘!

𝑬𝒏𝒗𝒊𝒂𝒏𝒅𝒐 𝒅𝒆𝒏𝒖𝒏𝒄𝒊𝒂 𝒑𝒂𝒓𝒂 𝒖𝒎 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 𝒂𝒍𝒆𝒂𝒕𝒐𝒓𝒊𝒐. . . 
----------

𝙰𝙳𝙼 𝚍𝚎𝚟𝚎 𝚍𝚎𝚏𝚒𝚗𝚒𝚛 𝚘 𝚐𝚛𝚞𝚙𝚘/𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚊 𝚛𝚎𝚌𝚎𝚋𝚎𝚛 𝚊𝚜 𝚍𝚎𝚗ú𝚗𝚌𝚒𝚊𝚜 𝚞𝚜𝚊𝚗𝚍𝚘
*.setcanal* _id do grupo ou telefone_

_Para consultar o id do grupo destinado a receber as denuncias, verifique se o bot encontra-se nele, e digite .id_
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
 } else{
m.quoted.reply(teks,global.db.data.chats[m.chat].reportchat)
}

}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 0
handler.command = /^(denunciar)$/i 
export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}