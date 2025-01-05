
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import uploadImage from '../lib/uploadImage.js'
import { Chess } from 'chess.js';

//or


let handler = async (m, { conn, text, usedPrefix, command, isAdmin, isOwner, args }) => {
  if(!(isAdmin || isOwner|| m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 

  const key = m.chat;
  conn.chess = conn.chess || {};
  let chessData = conn.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  global.db.data.chats[m.chat].chess = chessData
  conn.chess[key] = chessData;
  const { gameData, fen, currentTurn, players, hasJoined } = chessData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'delete') {
    delete conn.chess[key];
    return conn.reply(m.chat, `
━━━━━━━━━⬣✖️♟️⬣━━━━━━━━
☥ 𝙰 𝚙𝚊𝚛𝚝𝚒𝚍𝚊 𝚏𝚘𝚒 𝚎𝚗𝚌𝚎𝚛𝚛𝚊𝚍𝚊
━━━━━━━━━⬣✖️♟️⬣━━━━━━━━`
,m);
  }

  if (feature === 'novo') {
    if (gameData) {
      return conn.reply(m.chat, `━━━━━━━━━⬣✖️♟️⬣━━━━━━━━
🕰️ 𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚎𝚖 𝚙𝚛𝚘𝚐𝚛𝚎𝚜𝚜𝚘
━━━━━━━━━⬣✖️♟️⬣━━━━━━━━`, m);
    }
    chessData.gameData = { status: 'waiting', black: null, white: null };
    return conn.reply(m.chat,
`━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━
𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚒𝚗𝚒𝚌𝚒𝚊𝚍𝚊
𝙰𝚐𝚞𝚊𝚛𝚍𝚊𝚗𝚍𝚘 𝚓𝚘𝚐𝚊𝚍𝚘𝚛𝚎𝚜. . .
━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━`
    , m);
  }

  if (feature === 'entrar') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return conn.reply(m.chat,
`━━━━━━━━━⬣♟️⬣━━━━━━━━
❌ 𝘝𝘰𝘤𝘦 𝘫𝘢 𝘦𝘴𝘵𝘢 𝘯𝘦𝘴𝘵𝘢 𝘱𝘢𝘳𝘵𝘪𝘥𝘢
━━━━━━━━━⬣♟️⬣━━━━━━━━`, m);
    }
    if (!gameData || gameData.status !== 'waiting') {
      return conn.reply(m.chat,
`━━━━━━━━━⬣♟️✖️⬣━━━━━━━━
𝘚𝘦𝘮 𝘱𝘢𝘳𝘵𝘪𝘥𝘢𝘴 𝘦𝘮 𝘦𝘴𝘱𝘦𝘳𝘢. . .
𝘋𝘪𝘨𝘪𝘵𝘦 ${usedPrefix + command} novo 𝘱𝘢𝘳𝘢 𝘨𝘦𝘳𝘢𝘳 𝘶𝘮𝘢
━━━━━━━━━⬣♟️🐈‍⬛⬣━━━━━━━━`, m);
    }
    if (players.length >= 2) {
      return conn.reply(m.chat,
`━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━
𝘖 𝘫𝘰𝘨𝘰 𝘴𝘦𝘳𝘢 𝘪𝘯𝘪𝘤𝘪𝘢𝘥𝘰. . .
━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━`, m);
    }
    players.push(senderId);
    hasJoined.push(senderId);
    if (players.length === 2) {
      gameData.status = 'ready';
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gameData.black = black;
      gameData.white = white;
      chessData.currentTurn = white;
      return conn.reply(m.chat, `
╭━━━━━━━━━⬣
┃♟️📜 𝙋𝙖𝙧𝙩𝙞𝙙𝙖 𝙚𝙢 𝙥𝙧𝙚𝙥𝙖𝙧𝙖𝙘𝙖𝙤
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝕻𝖗𝖊𝖙𝖔𝖘: @${black.split('@')[0]}
┃ 𝕭𝖗𝖆𝖓𝖈𝖔𝖘: @${white.split('@')[0]}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝘿𝙞𝙜𝙞𝙩𝙚 ${usedPrefix + command} play 𝙥𝙖𝙧𝙖 𝙘𝙤𝙢𝙚𝙘𝙖𝙧
╰━━━━━━━━━━━━━━━━━━⬣`, m, { mentions: hasJoined });
    } else {
      return conn.reply(m.chat,
`━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━
𝚅𝚘𝚌𝚎 𝚎𝚗𝚝𝚛𝚘𝚞 𝚗𝚊 𝚙𝚊𝚛𝚝𝚒𝚍𝚊 🪶
𝙰𝚐𝚞𝚊𝚛𝚍𝚎 𝚙𝚘𝚛 𝚖𝚊𝚒𝚜 𝚞𝚖 𝚓𝚘𝚐𝚊𝚍𝚘𝚛
━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━`, m);
    }
  }

  if (feature === 'play') {
    if (gameData.status !== 'ready') {
      return conn.reply(m.chat, 
`━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━
𝙲𝚊𝚛𝚘 𝚒𝚗𝚝𝚎𝚛𝚕𝚘𝚌𝚞𝚝𝚘𝚛. . .
𝚊𝚐𝚞𝚊𝚛𝚍𝚎 𝚙𝚘𝚛 𝚖𝚊𝚒𝚜 𝚞𝚖 𝚓𝚘𝚐𝚊𝚍𝚘𝚛 𝚙𝚊𝚛𝚊 𝚌𝚘𝚖𝚎𝚌𝚊𝚛 ❌
━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━`, m);
    }
    gameData.status = 'playing';
    const senderId = m.sender;
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      chessData.fen = fen;
      const encodedFen = encodeURIComponent(fen);
      const turn = `🎲 𝕭𝖗𝖆𝖓𝖈𝖔 @${gameData.white.split('@')[0]}`;
      const flipParam = senderId === gameData.black ? '' : '&flip=true';
      const flipParam2 = senderId === gameData.black ? '' : '-flip';
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
      try {
        await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [gameData.white] });
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, { mentions: [gameData.black] });
      }
      return;
    } else {
      return conn.reply(m.chat,`━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━
𝙲𝚊𝚛𝚘 𝚒𝚗𝚝𝚎𝚛𝚕𝚘𝚌𝚞𝚝𝚘𝚛. . .
𝚊𝚐𝚞𝚊𝚛𝚍𝚎 𝚙𝚘𝚛 𝚖𝚊𝚒𝚜 𝚞𝚖 𝚓𝚘𝚐𝚊𝚍𝚘𝚛 𝚙𝚊𝚛𝚊 𝚌𝚘𝚖𝚎𝚌𝚊𝚛 ❌
━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━`, m);
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender;
    if (!gameData || gameData.status !== 'playing') {
      return conn.reply(m.chat, `━━━━━━━━━⬣♟️❌⬣━━━━━━━━
𝙾 𝚓𝚘𝚐𝚘 𝚊𝚒𝚗𝚍𝚊 𝚗𝚊𝚘 𝚌𝚘𝚖𝚎𝚌𝚘𝚞
━━━━━━━━━⬣♟️⬣━━━━━━━━`, m);
    }
    if (currentTurn !== senderId) {
      const chess = new Chess(fen);
      console.log(
chess.isCheckmate())
      return conn.reply(m.chat, `
      ━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━
      ⏳ *É a vez do ${chessData.currentTurn === gameData.white ? '𝕭𝖗𝖆𝖓𝖈𝖔' : '𝕻𝖗𝖊𝖙𝖔'} de jogar.*
      ━━━━━━━━━⬣♟️🕰️⬣━━━━━━━━`, m, {
        contextInfo: {
          mentionedJid: [currentTurn]
        }
      });
    }
    const chess = new Chess(fen);
    if (chess.isCheckmate()) {
      global.db.data.chats[m.chat].users[m.sender].exp += 100
      global.db.data.chats[m.chat].users[m.sender].money += 80
      global.db.data.chats[m.chat].users[m.sender].limit += 2
      delete conn.chess[key];
      return conn.reply(m.chat,
`━━━━━━━━━⬣♟️𝕮𝖍𝖊𝖈𝖐𝖒𝖆𝖙𝖊⬣━━━━━━━━

𝚅𝚎𝚗𝚌𝚎𝚍𝚘𝚛:  @${m.sender.split('@')[0]}
| ━━⬣ 𝑹𝒆𝒄𝒆𝒃𝒆𝒓𝒂𝒔
| җ ʙʏᴛᴇᴄᴏɪɴꜱ 𒌐 _*+80*_
| ⧗ ᴇᴛʜᴇʀᴇᴜᴍ 𒌐 _*+2*_
| 𓂀 𝑥𝑝 𒌐 _*+100*_
━━━━━━━━━⬣♟️💀⬣━━━━━━━━`

, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    if (chess.isDraw()) {
      delete conn.chess[key];
      return conn.reply(m.chat,       
`━━━━━━━━━⬣♟️𝕰𝖒𝖕𝖆𝖙𝖊⬣━━━━━━━━
𝙹𝚘𝚐𝚊𝚍𝚘𝚛𝚎𝚜: 
${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}
━━━━━━━━━⬣♟️💀⬣━━━━━━━━`, m, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
    const [from, to] = args;
    try {
      chess.move({ from, to, promotion: 'q' });
    } catch (e) {
      return conn.reply(m.chat, ` ━━━━━━━━━⬣✖️⬣━━━━━━━━
      『⚠ 𝙼𝚘𝚟𝚒𝚖𝚎𝚗𝚝𝚘 𝚒𝚗𝚟𝚊𝚕𝚒𝚍𝚘』
       ━━━━━━━━━⬣✖️⬣━━━━━━━━
      `, m);
    }
    chessData.fen = chess.fen();
    const currentTurnIndex = players.indexOf(currentTurn);
    const nextTurnIndex = (currentTurnIndex + 1) % 2;
    chessData.currentTurn = players[nextTurnIndex];
    const encodedFen = encodeURIComponent(chess.fen());
    const currentColor = chessData.currentTurn === gameData.white ? '𝕭𝖗𝖆𝖓𝖈𝖔' : '𝕻𝖗𝖊𝖙𝖔';
    const turn = `🎲 ${currentColor} @${chessData.currentTurn.split('@')[0]}\n\n${chess.getComment() || ''}`;
    const flipParam = senderId === gameData.black ? '' : '&flip=true';
    const flipParam2 = senderId === gameData.black ? '' : '-flip';
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
    try {
      console.log(chess.isCheck())
      if (chess.isCheck()){
        let checks = `${turn}
𝙴𝚜𝚝𝚊 𝚎𝚖 𝚌𝚑𝚎𝚚𝚞𝚎! 𓂀
`

await conn.sendFile(m.chat, boardUrl, '', checks, m, false, { mentions: [chessData.currentTurn] });
      }
      else if (chess.isCheckmate()) {
      global.db.data.chats[m.chat].users[m.sender].exp += 100
      global.db.data.chats[m.chat].users[m.sender].money += 80
      global.db.data.chats[m.chat].users[m.sender].limit += 2
      delete conn.chess[key];
      return conn.reply(m.chat,
`━━━━━━━━━⬣♟️𝕮𝖍𝖊𝖈𝖐𝖒𝖆𝖙𝖊 ⬣━━━━━━━━

𝚅𝚎𝚗𝚌𝚎𝚍𝚘𝚛:  @${m.sender.split('@')[0]}
| ━━⬣ 𝑹𝒆𝒄𝒆𝒃𝒆𝒓𝒂𝒔
| җ ʙʏᴛᴇᴄᴏɪɴꜱ 𒌐 _*+80*_
| ⧗ ᴇᴛʜᴇʀᴇᴜᴍ 𒌐 _*+2*_
| 𓂀 𝑥𝑝 𒌐 _*+100*_
━━━━━━━━━⬣♟️💀 ⬣━━━━━━━━`

, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    else if (chess.isDraw()) {
      delete conn.chess[key];
      return conn.reply(m.chat,       
`━━━━━━━━━⬣♟️𝕰𝖒𝖕𝖆𝖙𝖊 ⬣━━━━━━━━
𝙹𝚘𝚐𝚊𝚍𝚘𝚛𝚎𝚜: 
${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}
━━━━━━━━━⬣♟️💀 ⬣━━━━━━━━`, m, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
     else{ await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [chessData.currentTurn] }); }
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
      await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, { mentions: [chessData.currentTurn] });
    }
    chess.deleteComment();
    return;
  }

  if (feature === 'info') {
    return conn.reply(m.chat, `━━━━━━━━━⬣♟️𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 ⬣━━━━━━━━

*${usedPrefix + command} novo* ➥ Cria uma partida de xadrez
*${usedPrefix + command} entrar* - ➥ Entra em uma partida em espera
*${usedPrefix + command} play* ➥ Inicia o jogo se a partida tiver 2 participantes
*${usedPrefix + command} delete* ➥ Apaga a partida existente 
*${usedPrefix + command} [posicao inicial] [posicao final]* ➥ Faz um movimento no jogo de xadrez

─┅──┅❖  _𝐄𝐱𝐞𝐦𝐩𝐥𝐨:_
*${usedPrefix + command} novo* Cria uma partida
*${usedPrefix + command} entrar* entra na partida existente
Após 2 jogadores entrarem, digite ${usedPrefix + command} play 
para movimentar peças, faça como o exemplo
${usedPrefix + command} h1 h3
 ━━━━━━━━━⬣ִ ࣪𖤐⬣━━━━━━━━
    `, m);
  }
  return conn.reply(m.chat, ` 
╭━━━━━━━━━⬣
┃
┃ ❌✒️𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐭𝐨! 
┃ 𝐑𝐞𝐭𝐨𝐫𝐧𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐧𝐞𝐬𝐭𝐞 
┃ 𝐯𝐚𝐥𝐞 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐝𝐞 𝐭𝐫𝐮𝐪𝐮𝐞𝐬 𝐝𝐞 
┃ 𝐥𝐨𝐠𝐢𝐜𝐚 𝐜𝐨𝐦 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 
┃ 𝐚𝐩𝐫𝐨𝐩𝐫𝐢𝐚𝐝𝐨
┃
┃ 𝐔𝐬𝐞 ${usedPrefix + command} info 𝐩𝐚𝐫𝐚 
┃ 𝐯𝐞𝐫 𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, m);
  
}
handler.command = ['chess']

handler.owner = false
export default handler

