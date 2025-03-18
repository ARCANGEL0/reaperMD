
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯

import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
  
  
let chat = global.db.data.chats[m.chat]


if( new Date() > global.db.data.chats[m.chat].users[m.sender].regPrazo || Date() > global.db.data.chats[m.chat].users[m.sender].regPrazo) {
  global.db.data.chats[m.chat].users[m.sender].regPrazo = ''
  global.db.data.chats[m.chat].users[m.sender].regTimeStart = ''
  global.db.data.chats[m.chat].users[m.sender]. registradoBlock= false
}

if( global.db.data.chats[m.chat].bicho && (new Date() > global.db.data.chats[m.chat].bicho.horarioSorteio || Date() > global.db.data.chats[m.chat].bicho.horarioSorteio)) {
delete global.db.data.chats[m.chat].bicho
 
  console.log('Executing scheduled task...');

 
 
 await execute()
 
 await   verificarVencedores()
    
    delete global.db.data.chats[m.chat].bicho
  
 
 
} 


return !0 }
export default handler

async function verificarVencedores() {
  const vencedoresNumeroExato = [];
  const vencedoresAnimal = [];
  
  
// Sorteio de um número entre 1 e 100
let numer = Math.floor(Math.random() * 100) + 1;

// Encontrar o animal sorteado
const animalia= encontrarAnimal(numer);
global.db.data.chats[m.chat].bicho.animal = animalia
global.db.data.chats[m.chat].bicho.numero = numer

   let apostas = global.db.data.chats[m.chat].bicho.players
   let numeroSorteado =  global.db.data.chats[m.chat].bicho.numero
   
   let animalSorteado = global.db.data.chats[m.chat].bicho.animal
  Object.keys(apostas).forEach(jogador => {
    if (apostas[jogador].numero == numeroSorteado) {
      vencedoresNumeroExato.push(jogador);
    } else if (apostas[jogador].animal == animalSorteado) {
      vencedoresAnimal.push(jogador);
    }
  });

  if (vencedoresNumeroExato.length > 0) {

let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresNumeroExato.length);
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores += `\n @${winner.split('@')[0]}`
});


let txtA = global.db.data.chats[m.chat].language === 'pt' ?
`${global.heading} beast --show
𓉘🞢𓉝  ᴊᴏɢᴏ ᴅᴏ ʙɪᴄʜᴏ ᴇɴᴄᴇʀʀᴀᴅᴏ> ‎ 
> ⫻ ᴀɴɪᴍᴀʟ sᴏʀᴛᴇᴀᴅᴏ: *${animalSorteado}*
> ⫻ ɴᴜ́ᴍᴇʀᴏ sᴏʀᴛᴇᴀᴅᴏ: ${numeroSorteado}
> ⸻⸻⸻⸻
> 𐠠 ᴠᴇɴᴄᴇᴅᴏʀᴇs 〔ᴀɴɪᴍᴀʟ〕:
${vencedores}`

:

`${global.heading} beast --show
𓉘🞢𓉝  -ᴀɴɪᴍᴀʟ- ɢᴀᴍᴇ ʜᴀs ᴇɴᴅᴇᴅ
> ⫻ ᴀɴɪᴍᴀʟ: *${animalSorteado}*
> ⫻ ɴᴜᴍʙᴇʀ: ${numeroSorteado}
> ⸻⸻⸻⸻
> 𐠠 ᴡɪɴɴᴇʀs 〔ᴀɴɪᴍᴀʟ〕:
${vencedores}`
  


       await conn.sendMessage(m.chat, {text: txtA, }  ,{ mentions: conn.parseMention(txtA) });
       
     return !0
  } else if (vencedoresAnimal.length > 0) {

let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresAnimal.length);
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores +=   `\n @${winner.split('@')[0]}`
});
  
let txtB = global.db.data.chats[m.chat].language === 'pt' ?
`${global.heading} beast --show
𓉘🞢𓉝  ᴊᴏɢᴏ ᴅᴏ ʙɪᴄʜᴏ ᴇɴᴄᴇʀʀᴀᴅᴏ> ‎ 
> ⫻ ᴀɴɪᴍᴀʟ sᴏʀᴛᴇᴀᴅᴏ: *${animalSorteado}*
> ⫻ ɴᴜ́ᴍᴇʀᴏ sᴏʀᴛᴇᴀᴅᴏ: ${numeroSorteado}
> ⸻⸻⸻⸻
> 𐠠 ᴠᴇɴᴄᴇᴅᴏʀᴇs 〔ɴᴜᴍ.〕:
${vencedores}`

:

`${global.heading} beast --show
𓉘🞢𓉝  -ᴀɴɪᴍᴀʟ- ɢᴀᴍᴇ ʜᴀs ᴇɴᴅᴇᴅ
> ⫻ ᴀɴɪᴍᴀʟ: *${animalSorteado}*
> ⫻ ɴᴜᴍʙᴇʀ: ${numeroSorteado}
> ⸻⸻⸻⸻
> 𐠠 ᴡɪɴɴᴇʀs 〔ɴᴜᴍ.〕:
${vencedores}`
  
    await conn.sendMessage(m.chat, {text: txtB, }  ,{ mentions: conn.parseMention(txtB) });
     return !0
  } else {
    let txtB = global.db.data.chats[m.chat].language === 'pt' ?
    `${global.heading} beast --show
𓉘🞢𓉝  ᴊᴏɢᴏ ᴅᴏ ʙɪᴄʜᴏ ᴇɴᴄᴇʀʀᴀᴅᴏ> ‎ 
> ⫻ ᴀɴɪᴍᴀʟ sᴏʀᴛᴇᴀᴅᴏ: *${animalSorteado}*
> ⫻ ɴᴜ́ᴍᴇʀᴏ sᴏʀᴛᴇᴀᴅᴏ: ${numeroSorteado}
> ⸻⸻⸻⸻
> ⵁ sᴇᴍ ᴠᴇɴᴄᴇᴅᴏʀᴇs`


:

`${global.heading} beast --show
𓉘🞢𓉝  -ᴀɴɪᴍᴀʟ- ɢᴀᴍᴇ ʜᴀs ᴇɴᴅᴇᴅ
> ⫻ ᴀɴɪᴍᴀʟ: *${animalSorteado}*
> ⫻ ɴᴜᴍʙᴇʀ: ${numeroSorteado}
> ⸻⸻⸻⸻
> ⵁ ɴᴏ ᴡɪɴɴᴇʀs`
      
       await conn.sendMessage(m.chat, {text: txtC, }  ,{ mentions: conn.parseMention(txtC) });
     return !0
  }
}
  function encontrarAnimal(numeroSorteado) {
  for (let i = 0; i < global.db.data.chats[m.chat].bicho.animais.length; i++) {
    const numerosDoAnimal = [i * 4 + 1, i * 4 + 2, i * 4 + 3, i * 4 + 4];
    if (numerosDoAnimal.includes(numeroSorteado)) {
      return global.db.data.chats[m.chat].bicho.animais[i];
    }
  }
   let txtT = global.db.data.chats[m.chat].language === 'pt'
   ?
   `Aɴɪᴍᴀʟ ɴᴀ̃ᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ`
   :
   `ᴀɴɪᴍᴀʟ ɴᴏᴛ ꜰᴏᴜɴᴅ`
  return txtT;
}

 
 async function execute(){
   let groups = Object.keys(await conn.groupFetchAllParticipating())
      const mentionIds = [];
  
  for (let i = 0; i < groups.length; i++) {
    const id = groups[i];
    const participants = (await conn.groupMetadata(id)).participants.map(v => v.id);
    mentionIds.push(...participants);
  }
  
 }
