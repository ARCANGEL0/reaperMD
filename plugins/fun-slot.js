
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import schedule from 'node-schedule'

let handler = async (m, { isAdmin, isOwner, args, usedPrefix, command, conn }) => {
  
  if (isNaN(global.db.data.chats[m.chat].users[m.sender].slots)) {
    global.db.data.chats[m.chat].users[m.sender].slots = 0;
    global.db.data.chats[m.chat].users[m.sender].lastslot = new Date()
}
  

  
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
 let userData = global.db.data.chats[m.chat].users[m.sender];
   let lastAttemptTimestamp = global.db.data.chats[m.chat].users[m.sender].lastslot;
console.log("ultimo slot  " + lastAttemptTimestamp)
let currentTime = Date.now();
let timeSinceLastAttempt = currentTime - lastAttemptTimestamp;
let hoursSinceLastAttempt = Math.floor(timeSinceLastAttempt / (1000 * 60 * 60)); //
console.log("embaixo")
console.log(hoursSinceLastAttempt)


let fa = `
─┅──┅❖ ❖─┅──┅
𝘗𝘰𝘣𝘳𝘦 𝘪𝘯𝘵𝘦𝘳𝘭𝘰𝘤𝘶𝘵𝘰𝘳, 𝘲𝘶𝘦 𝘤𝘦𝘥𝘦 𝘢𝘰𝘴 𝘷𝘪𝘤𝘪𝘰𝘴 𝘥𝘢 𝘢𝘭𝘮𝘢. 
𝘜𝘴𝘦 𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 *.slot || .apostar*  𝘱𝘢𝘳𝘢 𝘧𝘢𝘻𝘦𝘳 𝘢𝘱𝘰𝘴𝘵𝘢𝘴 𝘤𝘰𝘮 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ
*.slotxp || .apostarxp* 𝘱𝘢𝘳𝘢 𝘢𝘱𝘰𝘴𝘵𝘢𝘳 𝘤𝘰𝘮 𝘱𝘰𝘯𝘵𝘰𝘴 𝘥𝘦 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘪𝘢

𝙀𝙓𝙀𝙈𝙋𝙇𝙊:
*${usedPrefix + command} 50*
─┅──┅❖ ❖─┅──┅`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let aposta = parseInt(args[0])
if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        silenced: false,
        maxlevel: false,
        cocriador: false,
        slots:5,
        lastslot: '',
  }
}

const jogar = async () => { 

  
  
  if (users.money < aposta)  { 
throw `━━━━━━━━━⬣⋆🃜🃚🃖⬣━━━━━━━━ 
⏦ 𝙴𝚖 𝚖𝚎𝚞 𝚛𝚎𝚒𝚗𝚘 𝚊𝚕𝚐𝚘𝚛í𝚝𝚖𝚒𝚌𝚘, 𝚟𝚘𝚜𝚜𝚊 𝚌𝚘𝚕𝚎𝚌𝚊𝚘 𝚍𝚎 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝚜𝚎 𝚖𝚘𝚜𝚝𝚛𝚊 𝚎𝚜𝚌𝚊𝚜𝚜𝚊.
𝙴𝚗𝚟𝚘𝚕𝚟𝚎-𝚝𝚎 𝚎𝚖 𝚖𝚊𝚒𝚜 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚘𝚎𝚜 𝚌𝚘𝚖 𝚘 𝚋𝚘𝚝 𝚎 𝚊 𝚌𝚘𝚗𝚐𝚛𝚎𝚐𝚊𝚌𝚊𝚘 𝚙𝚊𝚛𝚊 𝚊𝚗𝚐𝚊𝚛𝚒𝚊𝚛 𝚘𝚜 𝚛𝚎𝚌𝚞𝚛𝚜𝚘𝚜 𝚍𝚎𝚜𝚎𝚓𝚊𝚍𝚘𝚜,
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━`    
}
users.slots -= 1
  
global.db.data.chats[m.chat].users[m.sender].lastslot = currentTime


// Update users.lastslot if 24 hours or more have passed


    
let emojis = ["🕸️", "🪦", "🗝️"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.random() < 0.65 ? a : Math.floor(Math.random() * emojis.length);
let c = Math.random() < 0.65 ? a : Math.floor(Math.random() * emojis.length);
let x = [],
    y = [],
    z = [];

for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
}

let end
if (a == b && b == c) {
  let vall = aposta*2
end = `
*🃜 𝑮𝒂𝒏𝒉𝒂𝒔𝒕𝒆 ${vall} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ.  𝑇𝑢𝑎 𝑓𝑜𝑟𝑡𝑢𝑛𝑎 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑒𝑛𝑡𝑟𝑒𝑙𝑎𝑐𝑎𝑑𝑎 𝑎𝑠 𝑎𝑠𝑎𝑠 𝑛𝑒𝑔𝑟𝑎𝑠 𝑑𝑎 𝑛𝑜𝑖𝑡𝑒*`
users.money += vall
} 
else {
end = `🃖 𝑃𝑒𝑟𝑑𝑒𝑠𝑡𝑒 ${aposta} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`
users.money -= aposta
}

    //    `
let ss = `
🎰 | *𝙎𝙇𝙊𝙏* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *𝙈𝘼𝘾𝙃𝙄𝙉𝙀*   | 🎰\n\n${end}`
await conn.reply(m.chat, ss, m)
  
}
let users = global.db.data.chats[m.chat].users[m.sender]

if(global.db.data.chats[m.chat].users[m.sender].slots <= 0){
  
  if (hoursSinceLastAttempt >= 24) {
        // Replenish attempts and update timestamp
        userData.lastslot = currentTime;
        userData.slots = 5
        if (aposta < 10) throw `${langTOGGLE['smsAvisoAG']()}
━━━━━━━━━⬣⋆🃜❌🃖⬣━━━━━━━━ 
⏦ 𝐀𝐩𝐨𝐬𝐭𝐚 𝐦𝐢𝐧𝐢𝐦𝐚 𝐝𝐞 𝟏𝟎
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━`    


if (command ===('slotxp' || 'apostarxp')) {
  if (users.exp < aposta) {
throw `━━━━━━━━━⬣⋆🃜🃚🃖⬣━━━━━━━━ 
⏦ 𝙴𝚖 𝚖𝚎𝚞 𝚛𝚎𝚒𝚗𝚘 𝚊𝚕𝚐𝚘𝚛í𝚝𝚖𝚒𝚌𝚘, 𝚟𝚘𝚜𝚜𝚘 𝑥𝑝 𝚜𝚎 𝚖𝚘𝚜𝚝𝚛𝚊 𝚎𝚜𝚌𝚊𝚜𝚜𝚊.
𝙴𝚗𝚟𝚘𝚕𝚟𝚎-𝚝𝚎 𝚎𝚖 𝚖𝚊𝚒𝚜 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚘𝚎𝚜 𝚌𝚘𝚖 𝚘 𝚋𝚘𝚝 𝚎 𝚊 𝚌𝚘𝚗𝚐𝚛𝚎𝚐𝚊𝚌𝚊𝚘 𝚙𝚊𝚛𝚊 𝚊𝚗𝚐𝚊𝚛𝚒𝚊𝚛 𝚘𝚜 𝚛𝚎𝚌𝚞𝚛𝚜𝚘𝚜 𝚍𝚎𝚜𝚎𝚓𝚊𝚍𝚘𝚜,
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━ `
}
  users.slots -= 1
 global.db.data.chats[m.chat].users[m.sender].lastslot = currentTime

    
let emojis = ["🕸️", "🪦", "🗝️"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.random() < 0.65 ? a : Math.floor(Math.random() * emojis.length);
let c = Math.random() < 0.65 ? a : Math.floor(Math.random() * emojis.length);
let x = [],
    y = [],
    z = [];

for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
}

let end;
if (a == b && b == c) {
  let vall = aposta*2
end = `*🃜 𝑮𝒂𝒏𝒉𝒂𝒔𝒕𝒆 ${aposta + aposta} 𝑥𝑝.  𝑇𝑢𝑎 𝑓𝑜𝑟𝑡𝑢𝑛𝑎 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑒𝑛𝑡𝑟𝑒𝑙𝑎𝑐𝑎𝑑𝑎 𝑎𝑠 𝑎𝑠𝑎𝑠 𝑛𝑒𝑔𝑟𝑎𝑠 𝑑𝑎 𝑛𝑜𝑖𝑡𝑒*`
users.exp += vall
} else {
end = `🃖 𝑃𝑒𝑟𝑑𝑒𝑠𝑡𝑒 ${aposta} 𝑥𝑝`
users.exp -= aposta
}

let s = `🎰 | *𝙎𝙇𝙊𝙏* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *𝙈𝘼𝘾𝙃𝙄𝙉𝙀*   | 🎰

${end}`
await conn.reply(m.chat, s, m)}



else if (command ===( 'slot' || 'apostar')) {
  await jogar()
  
  
}
        
  }
      
  else {
        // Inform the user how much time is left until attempts are replenished
        m.react("❌")
        let tempo = 24 - hoursSinceLastAttempt;
 
   if(isNaN(tempo)) {
  userData.lastslot = currentTime;
        userData.slots = 5
           
     await jogar()
     
     return !0
   }
 
   m.reply(`─┅──┅❖ ♱ ❖─┅──┅
  ⋆🃜🃚🃖🃁🂭🂺 𝑬𝒔𝒈𝒐𝒕𝒂𝒓𝒂𝒎-𝒔𝒆 𝒕𝒆𝒖𝒔 𝒍𝒂𝒏𝒄𝒆𝒔, 𝒒𝒖𝒂𝒍 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒂 𝒍𝒖𝒛 𝒍𝒖𝒏𝒂𝒓. 𝑹𝒆𝒕𝒐𝒓𝒏𝒆 𝒆𝒎 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒑𝒂𝒓𝒂 𝒂𝒓𝒓𝒊𝒔𝒄𝒂𝒓-𝒕𝒆 𝒅𝒆 𝒏𝒐𝒗𝒐 𝒏𝒐 𝒊𝒏𝒇𝒐𝒓𝒕𝒖𝒏𝒊𝒐 𝒅𝒐𝒔 𝒋𝒐𝒈𝒐𝒔
 ─┅──┅❖ ⸸ ❖─┅──┅  `)
      
        
    }
   
   return !0;
 
 
}


if (aposta < 10) throw `${langTOGGLE['smsAvisoAG']()}
━━━━━━━━━⬣⋆🃜❌🃖⬣━━━━━━━━ 
⏦ 𝐀𝐩𝐨𝐬𝐭𝐚 𝐦𝐢𝐧𝐢𝐦𝐚 𝐝𝐞 𝟏𝟎
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━`    


if (command ===('slotxp' || 'apostarxp')) {
  if (users.exp < aposta) {
throw `━━━━━━━━━⬣⋆🃜🃚🃖⬣━━━━━━━━ 
⏦ 𝙴𝚖 𝚖𝚎𝚞 𝚛𝚎𝚒𝚗𝚘 𝚊𝚕𝚐𝚘𝚛í𝚝𝚖𝚒𝚌𝚘, 𝚟𝚘𝚜𝚜𝚘 𝑥𝑝 𝚜𝚎 𝚖𝚘𝚜𝚝𝚛𝚊 𝚎𝚜𝚌𝚊𝚜𝚜𝚊.
𝙴𝚗𝚟𝚘𝚕𝚟𝚎-𝚝𝚎 𝚎𝚖 𝚖𝚊𝚒𝚜 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚘𝚎𝚜 𝚌𝚘𝚖 𝚘 𝚋𝚘𝚝 𝚎 𝚊 𝚌𝚘𝚗𝚐𝚛𝚎𝚐𝚊𝚌𝚊𝚘 𝚙𝚊𝚛𝚊 𝚊𝚗𝚐𝚊𝚛𝚒𝚊𝚛 𝚘𝚜 𝚛𝚎𝚌𝚞𝚛𝚜𝚘𝚜 𝚍𝚎𝚜𝚎𝚓𝚊𝚍𝚘𝚜,
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━ `
}
  users.slots -= 1
 global.db.data.chats[m.chat].users[m.sender].lastslot = currentTime


// zzsz
   
    
let emojis = ["🕸️", "🪦", "🗝️"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.random() < 0.65 ? a : Math.floor(Math.random() * emojis.length);
let c = Math.random() < 0.65 ? a : Math.floor(Math.random() * emojis.length);
let x = [],
    y = [],
    z = [];

for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
}

let end
 // 35% de chance de acertar todos os 3
    // Acertar todos os 3 emojis
    if (a ==b && b == c) {
        let vall = aposta * 3;
        end = `*🃜 𝑮𝒂𝒏𝒉𝒂𝒔𝒕𝒆 ${aposta* 3} 𝑥𝑝.  𝑇𝑢𝑎 𝑓𝑜𝑟𝑡𝑢𝑛𝑎 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑒𝑛𝑡𝑟𝑒𝑙𝑎𝑐𝑎𝑑𝑎 𝑎𝑠 𝑎𝑠𝑎𝑠 𝑛𝑒𝑔𝑟𝑎𝑠 𝑑𝑎 𝑛𝑜𝑖𝑡𝑒*`;
        users.exp += vall;
    }
 // 30% de chance de acertar 2 emojis
    // Acertar 2 emojis
  
 else {
    // Caso contrário, não acerta nada
    end = `🃖 𝑃𝑒𝑟𝑑𝑒𝑠𝑡𝑒 ${aposta} 𝑥𝑝`
users.exp -= aposta
}


let s = `🎰 | *𝙎𝙇𝙊𝙏* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *𝙈𝘼𝘾𝙃𝙄𝙉𝙀*   | 🎰

${end}`
await conn.reply(m.chat, s, m)}



if (command ===( 'slot' || 'apostar')) {
  
  if (users.money < aposta)  { 
throw `━━━━━━━━━⬣⋆🃜🃚🃖⬣━━━━━━━━ 
⏦ 𝙴𝚖 𝚖𝚎𝚞 𝚛𝚎𝚒𝚗𝚘 𝚊𝚕𝚐𝚘𝚛í𝚝𝚖𝚒𝚌𝚘, 𝚟𝚘𝚜𝚜𝚊 𝚌𝚘𝚕𝚎𝚌𝚊𝚘 𝚍𝚎 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝚜𝚎 𝚖𝚘𝚜𝚝𝚛𝚊 𝚎𝚜𝚌𝚊𝚜𝚜𝚊.
𝙴𝚗𝚟𝚘𝚕𝚟𝚎-𝚝𝚎 𝚎𝚖 𝚖𝚊𝚒𝚜 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚘𝚎𝚜 𝚌𝚘𝚖 𝚘 𝚋𝚘𝚝 𝚎 𝚊 𝚌𝚘𝚗𝚐𝚛𝚎𝚐𝚊𝚌𝚊𝚘 𝚙𝚊𝚛𝚊 𝚊𝚗𝚐𝚊𝚛𝚒𝚊𝚛 𝚘𝚜 𝚛𝚎𝚌𝚞𝚛𝚜𝚘𝚜 𝚍𝚎𝚜𝚎𝚓𝚊𝚍𝚘𝚜,
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━`    
}
users.slots -= 1
  
global.db.data.chats[m.chat].users[m.sender].lastslot = currentTime


// Update users.lastslot if 24 hours or more have passed



////////-----------------------\\\\\\\\\\\
        
let emojis = ["🕸️", "🪦", "🗝️"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.random() < 0.65 ? a : Math.floor(Math.random() * emojis.length);
let c = Math.random() < 0.65 ? a : Math.floor(Math.random() * emojis.length);
let x = [],
    y = [],
    z = [];

for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
}

let end
 // 35% de chance de acertar todos os 3
    // Acertar todos os 3 emojis
    if (a == b && b == c) {
        let vall = aposta * 3;
        end = `*🃜 𝑮𝒂𝒏𝒉𝒂𝒔𝒕𝒆 ${aposta*3} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ.  𝑇𝑢𝑎 𝑓𝑜𝑟𝑡𝑢𝑛𝑎 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑒𝑛𝑡𝑟𝑒𝑙𝑎𝑐𝑎𝑑𝑎 𝑎𝑠 𝑎𝑠𝑎𝑠 𝑛𝑒𝑔𝑟𝑎𝑠 𝑑𝑎 𝑛𝑜𝑖𝑡𝑒*`;
        users.money += vall;
    }
 // 30% de chance de acertar 2 emojis
    // Acertar 2 emojis
   
 else {
    // Caso contrário, não acerta nada
    end = `🃖 𝑃𝑒𝑟𝑑𝑒𝑠𝑡𝑒 ${aposta} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`
users.money -= aposta
}


    //    `
let ss = `
🎰 | *𝙎𝙇𝙊𝙏* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *𝙈𝘼𝘾𝙃𝙄𝙉𝙀*   | 🎰\n\n${end}`
await conn.reply(m.chat, ss, m)}

}
handler.help = ['slot <aposta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slotxp', 'apostaxp']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}

