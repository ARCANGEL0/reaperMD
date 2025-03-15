

 const userSpamData = {}
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin,participants, isROwner, isPrems}) {
const chat = global.db.data.chats[m.chat]
if (!m.isGroup) return
if (chat.modoadmin) return  
if (!chat.antiSpam) return
// if (global.isOwner || isROwner || isAdmin) return
  
let user = global.db.data.chats[m.chat].users[m.sender]
const sender = m.sender
const currentTime = new Date().getTime()
const timeWindow = 5000 // tiempo límite 
const messageLimit = 6

let time, time2, time3, mensaje, motive
time = 30000 // 30 seg
time2 = 60000 // 1 min
time3 = 120000 // 2 min

if(!user.lastMessageTime) user.lastMessageTime = currentTime


const timeDifference = currentTime - user.lastMessageTime


const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(m.sender)

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
        role:'⌥ 𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        messageCount: 0,
        adv:0,
        lastMessageTime:'',
        silenced: false
  }
}




if (user.messageCount>8 && timeDifference <= timeWindow) {
  
  
  
user.messageCount += 1

  if (!user.silenced && user.messageCount >= messageLimit) {
    
  global.db.data.chats[m.chat].users[m.sender].silenced = true
    console.log('SPAM DETECTADO!!!!')
const mention = `@${sender.split("@")[0]}`

if(!global.db.data.chats[m.chat].users[m.sender].adv){ 
     global.db.data.chats[m.chat].users[m.sender].adv = 0
   }
if(global.db.data.chats[m.chat].users[m.sender].adv>=3){
  
  
await conn.reply(m.chat,`${langTOGGLE['smsAdveu7']()}\n*@${m.sender.split(`@`)[0]}* ${langTOGGLE['smsAdveu8']()}`, m, { mentions: [m.sender] })

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove') //@${who.split`@`[0]}
global.db.data.chats[m.chat].users[m.sender].adv =0
  return !0
  
}

   
console.log('spam flow starting, running procedures')
const spamWarningMsg = global.db.data.chats[m.chat].language === 'pt'
    ? 
        `${global.heading} ./silence.py --mute 1 -p
𓉘ⵑ𓉝 sᴘᴀᴍ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ
> ⳼ ${mention} sɪʟᴇɴᴄɪᴀᴅᴏ ᴘᴏʀ 30 ᴍɪɴᴜᴛᴏs
> ‎ 
⮝>  𝐬𝐭𝐝: ꜰʟᴏᴏᴅ ᴅᴇ ᴍᴇɴsᴀɢᴇɴs
`
    
    : `${global.heading} ./silence.py --mute 1 -p
𓉘ⵑ𓉝 sᴘᴀᴍ ᴅᴇᴛᴇᴄᴛᴇᴅ
> ⳼ ${mention} sɪʟᴇɴᴄᴇᴅ ꜰᴏʀ 30 ᴍɪɴᴜᴛᴇs
> ‎ 
> ⮝ 𝐬𝐭𝐝: ᴍᴇssᴀɢᴇs ꜰʟᴏᴏᴅ`



console.log(spamWarningMsg.getRandom())
await conn.reply(m.chat, spamWarningMsg.getRandom() , m, { mentions: [m.sender] })  

 setTimeout( async () => {
   global.db.data.chats[m.chat].users[m.sender].adv += 1
   
  global.db.data.chats[m.chat].users[m.sender].silenced = false;
   const desmutemsg = global.db.data.chats[m.chat].language === 'pt'
    ? 
    `${global.heading} ./silence.py --unmute
𓉘🞢𓉝 ${mention} ᴅᴇsᴍᴜᴛᴀᴅᴏ
> ‎ 
> ⮝ 𝐬𝐭𝐝: ᴀɢᴏʀᴀ ᴄᴏɴsᴇɢᴜᴇ ᴇɴᴠɪᴀʀ ᴍᴇɴsᴀɢᴇɴs`
    :
    `${global.heading} ./silence.py --unmute
𓉘🞢𓉝 ${mention} ᴜɴᴍᴜᴛᴇᴅ
> ‎ 
> ⮝ 𝐬𝐭𝐝: ᴄᴀɴ ɴᴏᴡ ᴄʜᴀᴛ ꜰʀᴇᴇʟʏ`
  
  
  await conn.reply(m.chat, desmutemsg.getRandom(), m, { mentions: [m.sender] })  
},1800000);





// reset 
//userData.messageCount = 1
                
  
  
}

  
} 
// dim



else {
if (timeDifference >= 2000) {
  console.log('comecandklo spam')
user.messageCount = 1
console.log('spammmmmnn')
console.log(timeDifference <= timeWindow)
}
  else {
    user.messageCount += 1
  }
}
user.lastMessageTime = currentTime

  
  
}

export default handler


const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}