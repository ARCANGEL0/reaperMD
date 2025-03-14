
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import schedule from 'node-schedule'

let handler = async (m, { conn,isAdmin,isOwner, command, text,participants }) => {

  
    function getCurrentDate(format) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date();
  return format === 'pt' ? date.toLocaleDateString('pt-BR', options) : date.toLocaleDateString('en-US', options);
}
    const date = getCurrentDate(global.db.data.chats[m.chat].language);
	function checkTimeleft(){
    let currentTime = new Date();
  let timeRemaining = new Date(global.db.data.users[m.sender].regPrazo - currentTime);

  // Calculate days, hours, and minutes remaining
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = timeRemaining.getUTCHours() + (days * 24);
  let minutes = timeRemaining.getUTCMinutes();

  // Convert hours and minutes to string format with leading zeros if necessary
  let formattedHours = String(hours).padStart(2, '0');
  let formattedMinutes = String(minutes).padStart(2, '0');

  let timeLeft = `${formattedHours}:${formattedMinutes}`;

  console.log(`Time left: ${timeLeft}`);
  return timeLeft;
}

const language = global.db.data.chats[m.chat].language;

  let username = conn.getName(m.sender)
  const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
  console.log(admins)
  console.log(m.sender)
  console.log("e admin   " +admins.includes(m.sender))
  let admcheck = admins.includes(m.sender)
  
  
   //user admins? 
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
        role:'𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        silenced: false,
        maxlevel: false,
        cocriador: false,
        slots:3,

  }
}
if(global.db.data.chats[m.chat].users[m.sender].money< 0){
  global.db.data.chats[m.chat].users[m.sender].money=0
}
if (global.db.data.users[m.sender]?.registradoBlock) {
  let left1 = checkTimeleft();

  if (isNaN(left1)) {
    global.db.data.chats[m.chat].users[m.sender].regTimeStart = '';
    global.db.data.chats[m.chat].users[m.sender].regPrazo = '';
    global.db.data.chats[m.chat].users[m.sender].regMsg = '';
    global.db.data.chats[m.chat].users[m.sender].registradoBlock = false;
  } else {
  

const waitReg = language === 'en'  ? 
`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ usermod -aG @${m.sender.split('@')[0] } 
> ‎ 
> [!] ᴄᴀʟᴍ ᴅᴏᴡɴ, ᴋɪᴅᴅᴏ. ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ᴜᴘᴅᴀᴛᴇᴅ ʏᴏᴜʀ ʟᴏɢꜱ ʀᴇᴄᴇɴᴛʟʏ, ʏᴏᴜ ɢᴏᴛᴛᴀ ᴄᴏᴏʟᴅᴏᴡɴ ᴀɴᴅ ᴡᴀɪᴛ ${left1} ʜᴏᴜʀꜱ. ᴄᴏᴍᴇ ʙᴀᴄᴋ ʟᴀᴛᴇʀ, ᴘᴀʟ
> ‎ 
` 
:
`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ usermod -aG @${m.sender.split('@')[0] } 
> ‎ 
> [!] ᴇꜱᴘᴇʀᴀ ᴀɪ, ɢᴀʀᴏᴛᴏ! ᴠᴏᴄᴇ ᴊᴀ ᴀᴛᴜᴀʟɪᴢᴏᴜ ꜱᴇᴜꜱ ʀᴇɢɪꜱᴛʀᴏꜱ ʀᴇᴄᴇɴᴛᴇᴍᴇɴᴛᴇ, ʀᴇʟᴀxᴇ ꜱᴜᴀ ᴀɴꜱɪᴇᴅᴀᴅᴇ ᴇ ᴀɢᴜᴀʀᴅᴇ ᴜᴍᴀꜱ ${left1} ʜᴏʀᴀꜱ. ᴠᴏʟᴛᴇ ᴍᴀɪꜱ ᴛᴀʀᴅᴇ, ɢᴀʀᴏᴛᴏ
> ‎`

await conn.sendMessage(m.chat, {text: waitReg, mentions: [m.sender]}, {quoted: m})
  
  
  }
}
  
if(!global.db.data.users[m.sender]. registradoBlock) {
  global.db.data.users[m.sender].registradoBlock = true
  
  let timeSt = new Date();
  
  let timeNF = new Date(timeSt.getTime() + 48 * 3600 * 1000);
// let timeNF = new Date(timeSt.getTime() + 30 * 1000);
  let momentDate = moment(timeNF)
let tims =  momentDate.format('HH:mm')
  const [hours, minutes] = tims.split(':').map(Number);
  
  global.db.data.users[m.sender].regTimeStart = timeSt
  global.db.data.users[m.sender].regPrazo = timeNF
  
  const scheduledTime2 = new Date();
  scheduledTime2.setHours(hours, minutes, 0, 0);
  
  
  const job2 = schedule.scheduleJob(scheduledTime2, async () => {
       global.db.data.users[m.sender].registradoBlock = false
   global.db.data.users[m.sender].regTimeStart = ''
  global.db.data.users[m.sender].regPrazo = ''

  }); 
  
  
}



let mentionedJid = [m.sender]

const textoP = language === 'en'  ? 
`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ usermod -aG @${m.sender.split('@')[0] } 
> ‎ 
| [!] 𝘘𝘶𝘰𝘵𝘦 𝘵𝘩𝘪𝘴 𝘮𝘦𝘴𝘴𝘢𝘨𝘦 𝘢𝘯𝘥 𝘢𝘯𝘴𝘸𝘦𝘳 𝘵𝘩𝘦
𝘧𝘰𝘭𝘭𝘰𝘸𝘪𝘯𝘨 𝘲𝘶𝘦𝘴𝘵𝘪𝘰𝘯𝘴, 𝘬𝘪𝘥.\n| 𝘐𝘧 𝘺𝘰𝘶 𝘸𝘢𝘯𝘵 𝘵𝘰
𝘴𝘬𝘪𝘱 𝘢𝘯𝘺 𝘲𝘶𝘦𝘴𝘵𝘪𝘰𝘯, 𝘫𝘶𝘴𝘵 𝘢𝘯𝘴𝘸𝘦𝘳 𝘸𝘪𝘵𝘩 *"."* 𝘰𝘳
*"𝘱𝘢𝘴s"*
> ‎
> ᴡʜᴀᴛ'ꜱ ʏᴏᴜʀ ɴᴀᴍᴇ, ᴋɪᴅᴅᴏ?
> ‎
` 
:
`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ usermod -aG @${m.sender.split('@')[0] } 
> ‎ 
| [!] 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘮𝘪𝘯𝘩𝘢𝘴 𝘱𝘦𝘳𝘨𝘶𝘯𝘵𝘢𝘴 𝘮𝘢𝘳𝘤𝘢𝘯𝘥𝘰 𝘦𝘴𝘵𝘢 𝘮𝘦𝘯𝘴𝘢𝘨𝘦𝘯, 𝘨𝘢𝘳𝘰𝘵𝘰! \n| 𝘚𝘦 𝘷𝘰𝘤𝘦 𝘥𝘦𝘴𝘦𝘫𝘢𝘳 𝘱𝘶𝘭𝘢𝘳 𝘢 𝘱𝘦𝘳𝘨𝘶𝘯𝘵𝘢, 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘤𝘰𝘮 *"."* 𝘰𝘶 *"𝘱𝘢𝘴𝘴𝘰"*
> ‎
> Qᴜᴀʟ ᴏ ꜱᴇᴜ ɴᴏᴍᴇ, ɢᴀʀᴏᴛᴏ/ᴀ/ᴇ?
> ‎`


let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 0
  
}
handler.help = ['textoPe *<nome>*']
handler.tags = ['fun']
handler.command = ['registrar', 'login']
handler.level=1
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}