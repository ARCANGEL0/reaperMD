
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import poker from 'poker-hands'
let handler = async (m, { conn, text,groupMetadata, usedPrefix, command,isAdmin, isOwner, args }) => {
console.log(poker.judgeWinner(['9S 5C 6C 6S 7S 3H KD', '2C 3S 8S TD TD TD TD']))
const key=m.chat
if(!(isAdmin || isOwner|| m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
 
if(!global.db.data.chats[m.chat].pokers){
  global.db.data.chats[m.chat].pokers = {
    gameData: null,
    table: [],
    images: [],
    currentTurn: null,
    players: [],
    hasJoined: [],
    hands:{},
    bet: 0,
    total: 0
  };
}
  let players = global.db.data.chats[m.chat].pokers.players;
  let hasJoined = global.db.data.chats[m.chat].pokers.hasJoined;
  let gameData = global.db.data.chats[m.chat].pokers.gameData;
  
  const feature = args[0]?.toLowerCase();
  if(isOwner && feature=='apagar'){
    m.react("✅")
    delete global.db.data.chats[m.chat].pokers
  }
  else if (!feature || feature === 'info') {
    return conn.sendFile(m.chat, `https://telegra.ph/file/f4381707e21287ac409db.jpg`, 'error.jpg', `━━━━━⬣𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂⬣━━━━

*${usedPrefix + command} novo* ➥ Cria uma mesa
*${usedPrefix + command} entrar* - ➥ Entra em uma mesa em espera
*${usedPrefix + command} jogar* ➥ Inicia o jogo e distribui as cartas
*${usedPrefix + command} sair* ➥ Sai da mesa

_Jogando:_

*Suas cartas serão enviadas no pv*
*Responda a mensagem em seu turno com F para desistir, C para cobrir o valor da mesa ou R {valor} para aumentar o valor da aposta, caso o valor na mesa seja maior que seu saldo, você não desistir ou apostar _tudo_ com a*

 ━━━━━━━━━⬣ִ ࣪𖤐⬣━━━━━━━━`, m);
   
  }
  else if (feature === 'novo') {
    if (global.db.data.chats[m.chat].pokers.gameData) {
      return conn.reply(m.chat, `━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━
🕰️ 𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚎𝚖 𝚙𝚛𝚘𝚐𝚛𝚎𝚜𝚜𝚘
━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━`, m);
    }
    global.db.data.chats[m.chat].pokers.gameData = "lobby";
    return conn.reply(m.chat,
`━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚒𝚗𝚒𝚌𝚒𝚊𝚍𝚊
𝙰𝚐𝚞𝚊𝚛𝚍𝚊𝚗𝚍𝚘 𝚓𝚘𝚐𝚊𝚍𝚘𝚛𝚎𝚜. . .
━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`
    , m);
  }
else if(feature=='sair'){
  const userId = m.sender;
  if (!players.includes(userId)) {
        return conn.reply(m.chat,
`━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
❌ 𝘝𝘰𝘤𝘦 𝘯𝘢𝘰 𝘦𝘴𝘵𝘢 𝘯𝘦𝘴𝘵𝘢 𝘱𝘢𝘳𝘵𝘪𝘥𝘢
━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`, m);
    }
if (!global.db.data.chats[m.chat].pokers.gameData || global.db.data.chats[m.chat].pokers.gameData !== 'lobby') {
      return conn.reply(m.chat,
`━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━
𝘚𝘦𝘮 𝘱𝘢𝘳𝘵𝘪𝘥𝘢𝘴 𝘦𝘮 𝘦𝘴𝘱𝘦𝘳𝘢. . .
𝘋𝘪𝘨𝘪𝘵𝘦 ${usedPrefix + command} novo 𝘱𝘢𝘳𝘢 𝘨𝘦𝘳𝘢𝘳 𝘶𝘮𝘢
━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━`, m);
    }
    
    // Remove user from players array
    const playerIndex = players.indexOf(userId);
    players.splice(playerIndex, 1);

    // Remove user from hasJoined array
    const joinedIndex = hasJoined.indexOf(userId);
    hasJoined.splice(joinedIndex, 1);

    let message = `━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
🂱 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛

𝘑𝘰𝘨𝘢𝘥𝘰𝘳𝘦𝘴 𝘯𝘢 𝘮𝘦𝘴𝘢:\n`

players.forEach(player => {
    message += `⋆ @${player.split("@")[0]}\n`;
});

message += `━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`
   return conn.reply(m.chat, message, m, { mentions: hasJoined });
}
else if (feature === 'entrar') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return conn.reply(m.chat,
`━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
❌ 𝘝𝘰𝘤𝘦 𝘫𝘢 𝘦𝘴𝘵𝘢 𝘯𝘦𝘴𝘵𝘢 𝘱𝘢𝘳𝘵𝘪𝘥𝘢
━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`, m);
    }
    if (!global.db.data.chats[m.chat].pokers.gameData || global.db.data.chats[m.chat].pokers.gameData !== 'lobby') {
      return conn.reply(m.chat,
`━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━
𝘚𝘦𝘮 𝘱𝘢𝘳𝘵𝘪𝘥𝘢𝘴 𝘦𝘮 𝘦𝘴𝘱𝘦𝘳𝘢. . .
𝘋𝘪𝘨𝘪𝘵𝘦 ${usedPrefix + command} novo 𝘱𝘢𝘳𝘢 𝘨𝘦𝘳𝘢𝘳 𝘶𝘮𝘢
━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━`, m);
    }
    if (players.length == 5) {
      return conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛
 
 ᴹᵉˢᵃ ᶜᵒᵐ ⁿᵘᵐᵉʳᵒ ᵐᵃˣⁱᵐᵒ ᵈᵉ ʲᵒᵍᵃᵈᵒʳᵉˢ!
━━━━━━━━━⬣ ✮ ⬣━━━━━━━━`, m);

    }
    if(players.length<= 5){
    players.push(senderId);
    hasJoined.push(senderId);
   
   let message = `━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
🂱 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛

𝘑𝘰𝘨𝘢𝘥𝘰𝘳𝘦𝘴 𝘯𝘢 𝘮𝘦𝘴𝘢:\n`

players.forEach(player => {
    message += `⋆ @${player.split("@")[0]}\n`;
});

message += `━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`
   return conn.reply(m.chat, message, m, { mentions: hasJoined });

    }
    if(global.db.data.chats[m.chat].pokers.gameData == 'playing'){
          return conn.reply(m.chat,
`━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
❌ Ｍｅｓａ ｏｃｕｐａｄａ！ 
Ａｇｕａｒｄｅ ｅｎｃｅｒｒａｒｅｍ ｏ ｊｏｇｏ．
━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`, m);
    }
  }

else if(feature=='teste'){
  
 

  
}
else if(feature=='jogar'){
  if (!gameData){
       return conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛

𝘚𝘦𝘮 𝘱𝘢𝘳𝘵𝘪𝘥𝘢𝘴 𝘦𝘮 𝘦𝘴𝘱𝘦𝘳𝘢. . .
𝘋𝘪𝘨𝘪𝘵𝘦 ${usedPrefix + command} novo 𝘱𝘢𝘳𝘢 𝘨𝘦𝘳𝘢𝘳 𝘶𝘮𝘢
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`, m);
  }
  if (gameData=='playing'){
       return conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛

𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚎𝚖 𝚊𝚗𝚍𝚊𝚖𝚎𝚗𝚝𝚘,
𝚊𝚐𝚞𝚊𝚛𝚍𝚎 𝚘 𝚓𝚘𝚐𝚘 𝚎𝚗𝚌𝚎𝚛𝚛𝚊𝚛
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`, m);
  }
  
  if(players.length==1){
    return conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛

𝚅𝚘𝚌𝚎 𝚗𝚊𝚘 𝚙𝚘𝚍𝚎 𝚓𝚘𝚐𝚊𝚛 𝚜𝚘𝚣𝚒𝚗𝚑𝚘, 𝚖𝚘𝚛𝚝𝚊𝚕 𝚒𝚐𝚗𝚘𝚛𝚊𝚗𝚝𝚎...
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`, m);
  }
  
  if(players.length<=5){
    global.db.data.chats[m.chat].pokers.gameData = 'playing'
           conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛

𝙸𝚗𝚒𝚌𝚒𝚊𝚗𝚍𝚘 𝚙𝚊𝚛𝚝𝚒𝚍𝚊 . . .
𝙴𝚗𝚝𝚛𝚎𝚐𝚊𝚗𝚍𝚘 𝚊𝚜 𝚌𝚊𝚛𝚝𝚊𝚜 🂱
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`, m);
  

  
  
  let newDeck = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
const data = await newDeck.json();
let id = data.deck_id
global.db.data.chats[m.chat].pokers.deckID = id
  


let players = global.db.data.chats[m.chat].pokers.players
let msg = `─┅──┅❖ ♱ ❖─┅──┅
🂱 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛

𝙸𝚗𝚒𝚌𝚒𝚊𝚗𝚍𝚘 𝚙𝚊𝚛𝚝𝚒𝚍𝚊 . . .
𝙴𝚗𝚝𝚛𝚎𝚐𝚊𝚗𝚍𝚘 𝚊𝚜 𝚌𝚊𝚛𝚝𝚊𝚜 🂱

─┅❖ _grupo:_  ${groupMetadata.subject}
𝑬𝒔𝒕𝒂𝒔 𝒔𝒂𝒐 𝒔𝒖𝒂𝒔 𝒄𝒂𝒓𝒕𝒂𝒔:`

for (let i = 0; i < players.length; i++) {
  const player = players[i];
  console.log('player loop: ' + player);

  
  let newcards = await fetch(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=2`);
  const datas = await newcards.json();
  let png1 = datas.cards[0].image;
  let png2 = datas.cards[1].image;
  let card1 = datas.cards[0].code;
  let card2 = datas.cards[1].code;
global.db.data.chats[m.chat].pokers.hands[player] =[card1, card2]
  conn.reply(player, msg, null, m);
  conn.sendFile(player, png1, 'error.jpg', ``, m);
  conn.sendFile(player, png2, 'error.jpg', ``, m);
  
}
// Up here.. users cards are given 
global.db.data.chats[m.chat].pokers.bet = 5
let pot = global.db.data.chats[m.chat].pokers.bet
global.db.data.chats[m.chat].pokers.round = 1
let currentUser = global.db.data.chats[m.chat].pokers.currentTurn

global.db.data.chats[m.chat].pokers.currentTurn = players[0]
console.log(global.db.data.chats[m.chat].pokers.hands)

 let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝚃𝚎𝚡𝚊𝚜 𝙷𝚘𝚕𝚍-𝚎𝚖 𝙿𝚘𝚔𝚎𝚛

𝙋𝙤𝙩:  ${pot} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ
𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].pokers.currentTurn.split("@")[0]}

*Opções:*
*(r)* _Raise: Aumentar pot na mesa_
*(c)* _Call: cobrir o pot_
*(f)* _Fold: Sair da mesa_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`
let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [currentUser] });
global.db.data.chats[m.chat].pokers.key = turnMsg.key.id

}
}
// ddd
  else {
    return conn.sendFile(m.chat, `https://telegra.ph/file/f4381707e21287ac409db.jpg`, 'error.jpg', `━━━━━⬣𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂⬣━━━━

*${usedPrefix + command} novo* ➥ Cria uma mesa
*${usedPrefix + command} entrar* - ➥ Entra em uma mesa em espera
*${usedPrefix + command} jogar* ➥ Inicia o jogo e distribui as cartas
*${usedPrefix + command} sair* ➥ Sai da mesa

_Jogando:_

*Suas cartas serão enviadas no pv*
*Responda a mensagem em seu turno com F para desistir, C para cobrir o valor da mesa ou R {valor} para aumentar o valor da aposta, caso o valor na mesa seja maior que seu saldo, você não desistir ou apostar _tudo_ com a*

 ━━━━━━━━━⬣ִ ࣪𖤐⬣━━━━━━━━`, m);
   
  }
}

handler.command = ['poker'] 
export default handler
function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
