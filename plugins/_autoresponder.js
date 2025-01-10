
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

/*    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen2, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣   🐈', body: '𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣  ', sourceUrl: `https://github.com/ARCANGEL0/Bytesec-MD`, thumbnail: imagen2}}})}*/
    
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
  
// Calculate prize per winner
let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresNumeroExato.length);
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores += `\n @${winner.split('@')[0]}`
});



// List each winner and their share of the prize
    let txtA = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━ 
                 𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
𝑨𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒄𝒆𝒅𝒊𝒅𝒂𝒔 𝒂 𝒄𝒆𝒍𝒆𝒔𝒕𝒊𝒂𝒍 𝒇𝒐𝒓𝒕𝒖𝒏𝒂
    
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂𝒎 𝒐 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐: 
  ${vencedores}
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
       
       await conn.sendMessage(m.chat, {text: txtA, }  ,{ mentions: conn.parseMention(txtA) });
       
     return !0
  } else if (vencedoresAnimal.length > 0) {
  
 // Calculate prize per winner
let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresAnimal.length);
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores +=   `\n @${winner.split('@')[0]}`
});
  
       let txtB = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
                          𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
𝑨𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒄𝒆𝒅𝒊𝒅𝒂𝒔 𝒂 𝒄𝒆𝒍𝒆𝒔𝒕𝒊𝒂𝒍 𝒇𝒐𝒓𝒕𝒖𝒏𝒂
    
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂𝒎 𝒐 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐: 
  ${vencedores}
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
    await conn.sendMessage(m.chat, {text: txtB, }  ,{ mentions: conn.parseMention(txtB) });
     return !0
  } else {
       let txtC = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
                      𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
  𝑵𝒆𝒏𝒉𝒖𝒎𝒂 𝒂𝒍𝒎𝒂 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒆 𝒂𝒄𝒆𝒓𝒕𝒐𝒖 𝒆𝒔𝒕𝒆 𝒋𝒐𝒈𝒐
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
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
  return 'Animal não encontrado';
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
