
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


let handler = async (m, { conn,__dirname, text, usedPrefix, command, isOwner, args }) => {
  const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

  if(!text){
    return conn.reply(m.chat, `*─┅──┅❖ 𓄿 ❖─┅──┅*
✞︎ 𝚁𝚊𝚗𝚔𝚒𝚗𝚐 ✞︎

𝑺𝒆𝒍𝒆𝒄𝒊𝒐𝒏𝒆 𝒐 𝒕𝒊𝒑𝒐 𝒅𝒆 𝒓𝒂𝒏𝒌𝒊𝒏𝒈 𝒂 𝒆𝒙𝒊𝒃𝒊𝒓:

_.${command} *coins*_ 
_.${command} *nivel*_ 
_.${command} *roubos*_ 
_.${command} *pontos*_ 
_.${command} *almas*_ 

*─┅──┅❖ ❖─┅──┅*`, fkontak, m)
  }

async function initializeAttributes(user) {
    
    if (user.money === undefined) user.money = 0;
    if (user.almas === undefined) user.almas = 0;
    if (user.steals === undefined) user.steals = 0;
    if (user.pontos === undefined) user.pontos = 0;
    if (user.level === undefined) {
      user.level = 0
      user.role =''
    };
}

async function getTopPlayers(chatId, attribute, topN = 10) {
    const chat = global.db.data.chats[chatId];
    if (!chat || !chat.users) return [];

    const excludedIds = [global.criador, conn.user.jid];

    // Fetch group metadata
    const groupMetadata = await conn.groupMetadata(chatId);
    const groupParticipants = groupMetadata.participants.map(participant => participant.id);

    const users = Object.entries(chat.users)
        .filter(([userId]) => !excludedIds.includes(userId) && groupParticipants.includes(userId))
        .map(([user, data]) => {
            initializeAttributes(data);
            return { user, ...data };
        });

    return users.sort((a, b) => b[attribute] - a[attribute]).slice(0, topN);
}

async function sendTopPlayersMessage(chatId, attribute) {
    const validAttributes = ["coins", "almas", "xp", "pontos", 'roubos',"nivel", "quiz"];
    if (!validAttributes.includes(attribute)) {
        return conn.reply(m.chat, `*─┅──┅❖ 𓄿 ❖─┅──┅*
✞︎ 𝚁𝚊𝚗𝚔𝚒𝚗𝚐 ✞︎

𝑺𝒆𝒍𝒆𝒄𝒊𝒐𝒏𝒆 𝒐 𝒕𝒊𝒑𝒐 𝒅𝒆 𝒓𝒂𝒏𝒌𝒊𝒏𝒈 𝒂 𝒆𝒙𝒊𝒃𝒊𝒓:

_.${command} *coins*_ 
_.${command} *nivel*_ 
_.${command} *roubos*_ 
_.${command} *pontos*_ 
_.${command} *almas*_ 

*─┅──┅❖ ❖─┅──┅*`, fkontak, m)
    }
    let titlen, desc, categ, tipo
     
     
if(attribute=="coins") {
       tipo= 'money'
       titlen = 'җ ʙʏᴛᴇᴄᴏɪɴꜱ'
       categ = 'җ ʙʏᴛᴇᴄᴏɪɴꜱ'
       desc = '𝑨𝒒𝒖𝒊 𝒋𝒂𝒛 𝒐𝒔 𝒎𝒆𝒎𝒃𝒓𝒐𝒔 𝒎𝒂𝒊𝒔 𝒓𝒊𝒄𝒐𝒔 𝒅𝒆𝒔𝒕𝒂 𝒔𝒐𝒄𝒊𝒆𝒅𝒂𝒅𝒆, 𝒐𝒔𝒕𝒆𝒏𝒕𝒂𝒏𝒅𝒐 𝒆𝒎 𝒔𝒖𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂'
       
     }
     else if(attribute=="nivel") {
       tipo= 'level'
       titlen = '𝙽𝚒𝚟𝚎𝚕'
       categ = '𝙽𝚒𝚟𝚎𝚕'
       desc = '𝑨𝒒𝒖𝒊 𝒋𝒂𝒛 𝒐𝒔 𝒎𝒆𝒎𝒃𝒓𝒐𝒔 𝒎𝒂𝒊𝒔 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒕𝒆𝒔 𝒆 𝒔𝒖𝒂𝒔 𝒑𝒐𝒔𝒊𝒄𝒐𝒆𝒔 𝒏𝒆𝒔𝒕𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅𝒆'
       
     }
     else if(attribute=="roubos") {
       tipo= 'steals'
       titlen = '𝚕𝚊𝚍𝚛𝚘𝚎𝚜'
       categ = '𝚁𝚘𝚞𝚋𝚘𝚜'
       desc = '𝑨𝒒𝒖𝒊 𝒋𝒂𝒛 𝒂𝒔 𝒎𝒂𝒊𝒐𝒓𝒆𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒇𝒖𝒓𝒕𝒊𝒗𝒂𝒔 𝒅𝒆𝒔𝒕𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅𝒆. 𝑹𝒐𝒖𝒃𝒂𝒏𝒅𝒐 𝒆𝒎 𝒎𝒆𝒊𝒐 𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐'
       
     }
     else if(attribute=="pontos") {
       tipo= 'pontos'
       titlen = '𝚙𝚘𝚗𝚝𝚘𝚜'
       categ = '𝚙𝚘𝚗𝚝𝚘𝚜'
       desc = '𝑨𝒒𝒖𝒊 𝒋𝒂𝒛 𝒐𝒔 𝒎𝒆𝒎𝒃𝒓𝒐𝒔 𝒄𝒐𝒎 𝒂𝒔 𝒎𝒂𝒊𝒐𝒓𝒆𝒔 𝒑𝒐𝒏𝒕𝒖𝒂𝒄𝒐𝒆𝒔 𝒆𝒏𝒕𝒓𝒆 𝒎𝒆𝒖𝒔 𝒋𝒐𝒈𝒐𝒔'
       
     }
     else if(attribute=="almas") {
       tipo= 'almas'
       titlen = '𝚊𝚜𝚜𝚊𝚜𝚜𝚒𝚗𝚘𝚜'
       categ = '𝚊𝚕𝚖𝚊𝚜'
       desc = '𝑨𝒒𝒖𝒊 𝒋𝒂𝒛 𝒐𝒔 𝒎𝒂𝒊𝒐𝒓𝒆𝒔 𝒍𝒖𝒏𝒂𝒕𝒊𝒄𝒐𝒔 𝒆 𝒉𝒐𝒎𝒊𝒄𝒊𝒅𝒂𝒔 𝒅𝒆𝒔𝒕𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅𝒆. 𝑨𝒄𝒖𝒔𝒂𝒅𝒐𝒔 𝒅𝒆 𝒄𝒆𝒊𝒇𝒂𝒓 𝒆𝒎 𝒊𝒏𝒖𝒎𝒆𝒓𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 ☥'
       
     }
     
    const topPlayers = await getTopPlayers(chatId, tipo, 10);
    if (topPlayers.length === 0) return "No users found.";
   
    let message = `*─┅──┅❖ 𓄿 ❖─┅──┅*
 ✞︎ 𝚁𝚊𝚗𝚔𝚒𝚗𝚐 𝚍𝚎 ${titlen} ✞
 ${desc}
 
 `
       ;
    topPlayers.forEach(player => {
        message += `
⎔⎓── @${player.user.split('@')[0]}
${categ}: ${player[tipo]}
${attribute == 'nivel' ? `
𝚁𝚊𝚗𝚔: ${player['role']}` : ''}`
    })
    message += `*─┅──┅❖ 𓁺 ❖─┅──┅*`
    return message;
}


sendTopPlayersMessage(m.chat, text).then(message => conn.reply(m.chat, message, m, { mentions: conn.parseMention(message) }));
}



handler.command = /^(rank|placar|ranking)$/i;

export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}