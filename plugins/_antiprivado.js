
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


export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner,isAllowed ,plugin,usedPrefix, command }) {
  
  
if (m.isBaileys && m.fromMe) return !0
if(global.db.data.chats[m.chat].fim) return !1
if (m.isGroup) return !1
if (m.fromMe) return !1
if (!m.message) return !0

const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot
chat = global.db.data.chats[m.chat]

if(!global.db.data.chats[m.chat].first || typeof global.db.data.chats[m.chat].first === 'undefined'){

global.db.data.chats[m.chat].first = true
global.db.data.chats[m.chat].langAnswered = false
global.db.data.chats[m.chat].privateChat = true

  
    let getLang = await m.reply(`v@reaper:~# lang-config
╭ . . . . . . . . . . . . . . . . . . . . . . .
> [+] LANG CONFIG
> -----------------------
> ‎ 
> ⁅1⁆ 🇧🇷 Português
> ⁅2⁆ 🇺🇸 English
> ‎ 
╰─────────
`)

 global.db.data.chats[m.chat].langChangeID = getLang.key.id
  
  

}
if (global.db.data.chats[m.chat].first && m.text) {
if(m.text ==1){
  await conn.sendMessage(m.chat,
        {
            text: `v@reaper:~# lang-config
╭ . . . . . . . . . . . . . . . . . . . . . . .
> [+] LANG CONFIG
> -----------------------
> ‎ 
> 𝙸𝚍𝚒𝚘𝚖𝚊 𝚊𝚕𝚝𝚎𝚛𝚊𝚍𝚘 𝚙𝚊𝚛𝚊 𝐏𝐨𝐫𝐭𝐮𝐠𝐮𝐞̂𝐬  
> ‎ 
╰─────────`
    
        }
        ,m)
   
    m.react("✅")
  global.db.data.chats[m.chat].language ='pt'
  global.db.data.chats[m.chat].langAnswered = true 
  global.db.data.chats[m.chat].msgCount =0
  return !0
} 
else if(m.text==2){
    m.react("✅")
        await conn.sendMessage(m.chat, {
            text: `v@reaper:~# lang-config
╭ . . . . . . . . . . . . . . . . . . . . . . .
> [+] LANG CONFIG
> -----------------------
> ‎ 
> 𝙻𝚊𝚗𝚐𝚞𝚊𝚐𝚎 𝚌𝚑𝚊𝚗𝚐𝚎𝚍 𝚝𝚘 𝐄𝐧𝐠𝐥𝐢𝐬𝐡
> ‎ 
╰─────────`
       
        },m);
  global.db.data.chats[m.chat].language ='en'
  global.db.data.chats[m.chat].langAnswered = true   global.db.data.chats[m.chat].msgCount =0
  return !0
  
}

  else{
    await m.reply(`v@reaper:~# lang-config
╭ . . . . . . . . . . . . . . . . . . . . . . .
> [+] LANG CONFIG
> -----------------------
> ‎ 
> ⁅1⁆ 🇧🇷 Português
> ⁅2⁆ 🇺🇸 English
> ‎ 
╰─────────
`)
 m.react("❌")  
    
    return !0 
  }
  
  
  
  
  
}

else {
  user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}
global.db.data.chats[m.chat].autolevelup = false
 if(!isAllowed && !m.fromMe && bot.antiPrivate && global.db.data.chats[m.chat].msgCount >= 10){
   
   const language = global.db.data.chats[m.chat].language;

   const message = language === 'pt' ? `
> 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs}:~# cat /etc/trial.md  
> ‎  
*[+]* *Pᴇʀɪ́ᴏᴅᴏ ᴅᴇ Tᴇsᴛᴇ:* Encerrado.  
*[+] ᴜsᴜᴀ́ʀɪᴏ:* ${m.pushName}
> ————————————————————————————————————————————————
> *[𝗔𝗡𝗔́𝗟𝗜𝗦𝗘 𝗧𝗘́𝗖𝗡𝗜𝗖𝗔 𝗖𝗢𝗡𝗖𝗟𝗨𝗜́𝗗𝗔]:*
> O ᴘᴇʀɪ́ᴏᴅᴏ ᴇxᴘᴇʀɪᴍᴇɴᴛᴀʟ ᴛᴇʀᴍɪɴᴏᴜ. Vᴏᴄᴇ̂ ᴛᴇᴠᴇ ᴀᴄᴇssᴏ ᴀ ʀᴇᴄᴜʀsᴏs ʙᴀ́sɪᴄᴏs. Sᴇ ᴅᴇsᴇᴊᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ᴜsᴀɴᴅᴏ ᴏ ᴘʀᴏᴊᴇᴛᴏ R.Ξ.Λ.P.E.R ᴅᴇᴠᴇ ᴇɴᴛʀᴀʀ ᴇᴍ ᴄᴏɴᴛᴀᴛᴏ ᴄᴏᴍ ᴏ Dᴇsᴇɴᴠᴏʟᴠᴇᴅᴏʀ
> ‎
*[𝗖𝗢𝗡𝗧𝗔𝗧𝗢]:*
> Eɴᴛʀᴇ ᴇᴍ ᴄᴏɴᴛᴀᴛᴏ: *+351927285125*. 
> ‎
*[𝙰𝙶𝙴𝙽𝚃]:* Vance
*[𝚂𝚃𝙰𝚃𝚄𝚂]:* *Inativo*
> ‎  
> ⚊ 〔𝗥𝝣𝝠𝗣𝗘𝗥 v${vs}〕 ⚊   ` : `
> 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs}:~# cat /etc/trial.md  
> ‎  
*[+]* *ᴛʀɪᴀʟ ᴘᴇʀɪᴏᴅ:* Ended.  
*[+] ᴜsᴇʀ:* ${m.pushName}  
> ————————————————————————————————————————————————  
> *[𝗩𝗔𝗟𝗜𝗗𝗔𝗧𝗜𝗢𝗡]:*  
> Tʜᴇ ᴇxᴘᴇʀɪᴍᴇɴᴛᴀʟ ᴘᴇʀɪᴏᴅ ʜᴀs ᴄᴏɴᴄʟᴜᴅᴇᴅ. Yᴏᴜ ʜᴀᴅ ᴀᴄᴄᴇss ᴛᴏ ʙᴀsɪᴄ ʀᴇsᴏᴜʀᴄᴇs. Iꜰ ʏᴏᴜ ᴡɪsʜ ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ ᴜsɪɴɢ ᴛʜᴇ R.Ξ.Λ.P.E.R ᴘʀᴏᴊᴇᴄᴛ, ʏᴏᴜ ᴍᴜsᴛ ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ Dᴇᴠᴇʟᴏᴘᴇʀ.  
> ‎  
*[𝗖𝗢𝗡𝗧𝗔𝗖𝗧]:* 
> Reach out at: *+351927285125*.  
> ‎  
*[𝙰𝙶𝙴𝙽𝚃]:* Vance  
*[𝚂𝚃𝙰𝚃𝚄𝚂]:* *Inactive*  
> ‎  
> ⚊ 〔𝗥𝝣𝝠𝗣𝗘𝗥 v${vs}〕 ⚊   
   `;


 m.reply(message)
global.db.data.chats[m.chat].fim = true
}
else if (!isAllowed && bot.antiPrivate) {
  global.db.data.chats[m.chat].msgCount+=1

return !1
}

}

}

