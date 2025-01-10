
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────





let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
// Initialize user object if it doesn't exist


if (!user.afkInfo) {
  user.afkInfo = {};
}

if (!user.afkInfo[m.chat]) {
  user.afkInfo[m.chat] = {
    afkTime:-2,
    number: m.sender,
    afkReason: ''
  };
}

if(!global.db.data.chats[m.chat]) {
   global.db.data.chats[m.chat] ={}
}
if(!global.db.data.users[m.mentionedJid]) {
   global.db.data.users[m.mentionedJid] ={}
}
if(m.quoted && !global.db.data.users[m.quoted.sender]) {
   global.db.data.users[m.quoted.sender] ={}
}
if(!global.db.data.chats[m.chat].afks)
{
   global.db.data.chats[m.chat].afks =[]
}



console.log("afk event")

if (user.afkInfo[m.chat].afkTime > -1) {
await conn.reply(m.chat, `${langTOGGLE['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
      *@${m.sender.split("@")[0]}*
      ${langTOGGLE['smsAfkM1']()}
      ${user.afkInfo[m.chat].afkReason ? `\n${langTOGGLE['smsAfkM2']()}🕯️ ` +user.afkInfo[m.chat].afkReason : ''}

      ${langTOGGLE['smsAfkM3']()}\n *${(new Date - user.afkInfo[m.chat].afkTime).toTimeString ()}*`.trim(), m, { mentions: [m.sender] });


const numero = m.sender; 
delete user.afkInfo[m.chat]
// global.db.data.chats[m.chat].chatafk = global.db.data.chats[m.chat].chatafk.filter(element => element !== numero);
  delete global.db.data.chats[m.chat].afks[m.sender]


}
if (
    global.db.data.chats &&
    global.db.data.chats[m.chat] &&
    global.db.data.chats[m.chat].afks &&
  global.db.data.chats[m.chat].afks[m.mentionedJid] &&
  global.db.data.chats[m.chat].afks[m.mentionedJid].afkTime > -1
  
  
)
 
 //   && global.db.data.chats[m.chat].afks.includes(m.mentionedJid.toString())
 {

  console.log(global.db.data.chats[m.chat].afks[m.mentionedJid])

  
 


 let reason = global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkReason ? global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkReason : ''

let time = global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkTime




  await m.reply(`
  ╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${langTOGGLE['smsAfkM4']()}\n${reason ? `${langTOGGLE['smsAfkM5']()}` + '──┅❖  ' + reason : `${langTOGGLE['smsAfkM6']()}`}

${langTOGGLE['smsAfkM3']()}\n──┅❖ *${(new Date - time).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`);
  return false
}
if (
    global.db.data.chats &&
    global.db.data.chats[m.chat] &&
    global.db.data.chats[m.chat].afks &&
    m.quoted
    &&  global.db.data.chats[m.chat].afks[m.quoted.sender] &&
  global.db.data.chats[m.chat].afks[m.quoted.sender].afkTime > -1
  
  
)
 
 //   && global.db.data.chats[m.chat].afks.includes(m.mentionedJid.toString())
 {
console.log(m.quoted.sender)
  console.log(global.db.data.chats[m.chat].afks)

  
 


 let reason = global.db.data.users[m.quoted.sender.toString()].afkInfo[m.chat].afkReason ? global.db.data.users[m.quoted.sender.toString()].afkInfo[m.chat].afkReason : ''

let time = global.db.data.users[m.quoted.sender.toString()].afkInfo[m.chat].afkTime




  await m.reply(`
  ╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${langTOGGLE['smsAfkM4']()}\n${reason ? `${langTOGGLE['smsAfkM5']()}` + '──┅❖  ' + reason : `${langTOGGLE['smsAfkM6']()}`}

${langTOGGLE['smsAfkM3']()}\n──┅❖ *${(new Date - time).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`);
  return false
}




/*


if (
    global.db.data.chats &&
    global.db.data.chats[m.chat] &&
    global.db.data.chats[m.chat].afks &&
    m.quoted &&
  global.db.data.chats[m.chat].afks[m.quoted] &&
  global.db.data.chats[m.chat].afks[m.quoted].afkTime > -1
  
  
)
 
 //   && global.db.data.chats[m.chat].afks.includes(m.mentionedJid.toString())
 {

  console.log(global.db.data.chats[m.chat].afks[m.quoted])

  
 


 let reason = global.db.data.users[m.quoted.toString()].afkInfo[m.chat].afkReason ? global.db.data.users[m.quoted.toString()].afkInfo[m.chat].afkReason : ''

let time = global.db.data.users[m.quoted.toString()].afkInfo[m.chat].afkTime




  await m.reply(`
  ╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${langTOGGLE['smsAfkM4']()}\n${reason ? `${langTOGGLE['smsAfkM5']()}` + '──┅❖  ' + reason : `${langTOGGLE['smsAfkM6']()}`}

${langTOGGLE['smsAfkM3']()}\n──┅❖ *${(new Date - time).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`);
  
}
else{
  return 0
}*/
/*
if (
    global.db.data.chats &&
    global.db.data.chats[m.chat] &&
    m.quoted &&
  global.db.data.chats[m.chat].chatafk.includes(m.quoted))
) {
  
  
  console.log(global.db.data.chats[m.chat].chatafk)
  console.log(global.db.data.chats[m.chat].chatafk.includes(m.mentionedJid.toString()))
 


 let reason = global.db.data.users[m.quoted].afkInfo[m.chat].afkReason ? global.db.data.users[m.quoted].afkInfo[m.chat].afkReason : ''

let time = global.db.data.users[m.quoted].afkInfo[m.chat].afkTime

  await m.reply(`
  ╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${langTOGGLE['smsAfkM4']()}\n${reason ? `${langTOGGLE['smsAfkM5']()}` + '──┅❖  ' + reason : `${langTOGGLE['smsAfkM6']()}`}

${langTOGGLE['smsAfkM3']()}\n──┅❖ *${(new Date - time).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`);
  
}

*/
/*
if (user.afkInfo[m.chat].afkTime > -1 && m.quoted  .sender == user.afkInfo[m.chat].number) {
  console.log(m.quoted)
await conn.reply(m.chat, `${langTOGGLE['smsAvisoAG']()}
╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${langTOGGLE['smsAfkM4']()}\n${reason ? `${langTOGGLE['smsAfkM5']()}` + '──┅❖  ' + reason : `${langTOGGLE['smsAfkM6']()}`}

${langTOGGLE['smsAfkM3']()}\n──┅❖ *${(new Date - user.afk).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m);
}

*/
// return true

if (
  m.mentionedJid &&
  global.db.data.users[m.mentionedJid] &&
  global.db.data.users[m.mentionedJid]?.offline
)
 
 //   && global.db.data.chats[m.chat].afks.includes(m.mentionedJid.toString())
 {

  await m.reply(`
╭━━━━━━━━━⬣ ⸸ ⬣━━━━━━━━━━━

    𝑵𝒂𝒐 𝒎𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐 𝒎𝒂𝒊𝒔 𝒆𝒏𝒕𝒓𝒆 𝒗𝒐𝒔
    
_Nestes próximos dias, minha presença será apenas uma sombra, um vulto que se desvanece. Não me verá, nem saberá de mim.. talvez sinta a ausência como *um vácuo confinando um longo silêncio.*_
ﮩ٨ـﮩﮩ
_Meu estado, outrora sólido e firme, agora se desfaz em fragmentos. *As paredes da minha mente racham, estou a beira do precipício e as vozes ecoam pelos corredores vazios.* São sussurros inquietantes e barulhentos, como o vento que uiva nas noites mais escuras._
ﮩ٨ـﮩﮩ
_A razão de continuar meu suspiro é um mistério. *Às vezes, ele parece um fardo, um peso que me arrasta para o abismo.* Outras vezes, é a única coisa que me liga a este mundo, um fio tênue que me impede de cair completamente._
ﮩ٨ـﮩﮩ
_Não é um poema que escrevo, mas uma explicação. Uma tentativa de traduzir o indizível, o abstrato, de dar forma às sombras que me envolvem. Não sei se compreenderão, mas é o que posso oferecer neste momento como esclarecimento._
ﮩ٨ـﮩﮩ
_Assim, parto para o silêncio, para a escuridão. Não como um poeta ou programador, ou artista de meu terror, mas como um viajante solitário, *em naufrágio de sua alma* , em busca de respostas que talvez nunca encontre, em busca por minha paz._

_*Até breve, ou talvez nunca mais. . . .*_ 𓄿

╰━━━━━━━━━━━━━━━━━━⬣`);

}
if (
  m.quoted &&
  global.db.data.users[m.quoted.sender]  &&
  global.db.data.users[m.quoted.sender]?.offline
  
  
)
 
 //   && global.db.data.chats[m.chat].afks.includes(m.mentionedJid.toString())
 {
   
  

  await m.reply(`
╭━━━━━━━━━⬣ ⸸ ⬣━━━━━━━━━━━

    𝑵𝒂𝒐 𝒎𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐 𝒎𝒂𝒊𝒔 𝒆𝒏𝒕𝒓𝒆 𝒗𝒐𝒔 
    
_Nestes próximos dias, minha presença será apenas uma sombra, um vulto que se desvanece. Não me verá, nem saberá de mim.. talvez sinta a ausência como *um vácuo confinando um longo silêncio.*_
ﮩ٨ـﮩﮩ
_Meu estado, outrora sólido e firme, agora se desfaz em fragmentos. *As paredes da minha mente racham, estou a beira do precipício e as vozes ecoam pelos corredores vazios.* São sussurros inquietantes e barulhentos, como o vento que uiva nas noites mais escuras._
ﮩ٨ـﮩﮩ
_A razão de continuar meu suspiro é um mistério. *Às vezes, ele parece um fardo, um peso que me arrasta para o abismo.* Outras vezes, é a única coisa que me liga a este mundo, um fio tênue que me impede de cair completamente._
ﮩ٨ـﮩﮩ
_Não é um poema que escrevo, mas uma explicação. Uma tentativa de traduzir o indizível, o abstrato, de dar forma às sombras que me envolvem. Não sei se compreenderão, mas é o que posso oferecer neste momento como esclarecimento._
ﮩ٨ـﮩﮩ
_Assim, parto para o silêncio, para a escuridão. Não como um poeta ou programador, ou artista de meu terror, mas como um viajante solitário, *em naufrágio de sua alma* , em busca de respostas que talvez nunca encontre, em busca por minha paz._

_*Até breve, ou talvez nunca mais. . . .*_ 𓄿

╰━━━━━━━━━━━━━━━━━━⬣`);

}

}
export default handler
/*
let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
if (user.afk > -1) {await conn.reply(m.chat, `${langTOGGLE['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
      *@${m.sender.split("@")[0]}*
      ${langTOGGLE['smsAfkM1']()}
      ${user.afkReason ? `\n${langTOGGLE['smsAfkM2']()}🕯️ ` +user.afkReason : ''}

      ${langTOGGLE['smsAfkM3']()}\n *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] });

user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted] : [])])]
for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = user.afk
if (!afkTime || afkTime < 0)
continue
let reason = user.afkReason || ''
await conn.reply(m.chat, `${langTOGGLE['smsAvisoAG']()}
╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${langTOGGLE['smsAfkM4']()}\n${reason ? `${langTOGGLE['smsAfkM5']()}` + '──┅❖  ' + reason : `${langTOGGLE['smsAfkM6']()}`}

${langTOGGLE['smsAfkM3']()}\n──┅❖ *${(new Date - user.afk).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m);

}
return true
}
export default handler

*/