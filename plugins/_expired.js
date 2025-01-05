
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

export async function all(m, conn,isOwner,plugin,command,isCriadora) {
   
if (!m.isGroup)
return

let chats = global.db.data.chats[m.chat]
if (!chats.expira){
return !0
}


const scheduledDateTime = new Date(chats.expira);

    // Get the current date and time
    const currentDate = new Date();
console.log('teeeest  ' + currentDate < scheduledDateTime)
    // Compare the current date and time with the scheduled date and time
    if (currentDate < scheduledDateTime){
      global.db.data.chats[m.chat].isBanned = false
      return !0
    }
    else if(currentDate >= scheduledDateTime){
      global.db.data.chats[m.chat].isBanned = true
      if (/^[\.\/]/.test(m.text) && currentDate >= scheduledDateTime &&
      !global.criador.includes(m.sender) &&
      !m.sender=='351927232470@s.whatsapp.net' && !m.sender ==
      global.cocriador&& !m.fromMe) {
        // Do something if the current date and time is equal to or after the scheduled date and time
          global.db.data.chats[m.chat].isBanned = true
       
        console.log('expirou');
        if(global.db.data.chats[m.chat].isBanned && !isOwner &&
        !m.sender=='351927232470@s.whatsapp.net'
        && global.db.data.chats[m.chat].firstTime)
 {
   m.reply(`━━━━━━━━━⬣💀⬣━━━━━━━━
 𝙱𝚘𝚝 𝚒𝚗𝚊𝚝𝚒𝚟𝚘 ! ༒︎
 *Este dominio ainda não é cliente dos serviços sombrios de Edgar Allan Bot ִ ࣪𖤐* 
 💵 𝔙𝔞𝔩𝔬𝔯 𝔞 𝔭𝔞𝔤𝔞𝔯 𝔭𝔞𝔯𝔞 𝔞𝔡𝔢𝔰𝔞𝔬: *R$ ${global.db.data.chats[m.chat].boleto}*
 
 *Submeta-se a minha escuridão e desfrute de inúmeros serviços e funcionalidades que tenho a oferecer*

𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒆 𝒎𝒆𝒖 𝒔𝒖𝒑𝒐𝒓𝒕𝒆 𝒑𝒂𝒓𝒂 𝒂𝒅𝒆𝒓𝒊𝒓 𓄿:  
+351 927 285 125 
+55 (45) 9852-7531
 ━━━━━━━━⬣━━━━━━━━`)
 }
 else{ m.reply(`━━━━━━━━━⬣💀⬣━━━━━━━━
 𝙱𝚘𝚝 𝚒𝚗𝚊𝚝𝚒𝚟𝚘 ! ༒︎
 𝗢 𝗽𝗿𝗮𝘇𝗼 𝗱𝗲 𝘂𝘀𝗼 𝗱𝗼 𝗯𝗼𝘁 𝗲𝘅𝗽𝗶𝗿𝗼𝘂! 𖤐
💵 𝔙𝔞𝔩𝔬𝔯 𝔞 𝔭𝔞𝔤𝔞𝔯 𝔡𝔞 𝔪𝔢𝔫𝔰𝔞𝔩𝔦𝔡𝔞𝔡𝔢: *R$ ${global.db.data.chats[m.chat].boleto}*
 
 𝗡𝗮 𝗽𝗲𝗻𝘂𝗺𝗯𝗿𝗮 𝗱𝗶𝗴𝗶𝘁𝗮𝗹, 𝘀𝘂𝗯𝗺𝗲𝘁𝗮-𝘀𝗲 𝗮 𝗲𝘅𝗰𝗹𝘂𝘀𝗮𝗼 𝗱𝗮 𝗶𝗻𝘁𝗲𝗿𝗮𝗰𝗮𝗼 𝗰𝗼𝗺 𝗺𝗶𝗻𝗵𝗮 𝗽𝗲𝘀𝘀𝗼𝗮
 
 𝗘𝗻𝘁𝗿𝗲 𝗲𝗺 𝗰𝗼𝗻𝘁𝗮𝘁𝗼 𝗰𝗼𝗺 𝘂𝗺 𝗱𝗲 𝗺𝗲𝘂𝘀 𝗰𝗿𝗶𝗮𝗱𝗼𝗿𝗲𝘀 𓄿:  
+351 927 285 125 
+55 (45) 9852-7531
 ━━━━━━━━━⬣🚫⬣━━━━━━━━`)
 }
 
/*
m.reply(`━━━━━━━━━⬣💀⬣━━━━━━━━
 🌒🪦 𝙱𝚘𝚝 𝚒𝚗𝚊𝚝𝚒𝚟𝚘 !
 
 𝗢 𝗽𝗿𝗮𝘇𝗼 𝗱𝗲 𝘂𝘀𝗼 𝗱𝗼 𝗯𝗼𝘁 𝗲𝘅𝗽𝗶𝗿𝗼𝘂! җ
 𝗡𝗮 𝗽𝗲𝗻𝘂𝗺𝗯𝗿𝗮 𝗱𝗶𝗴𝗶𝘁𝗮𝗹, 𝘀𝘂𝗯𝗺𝗲𝘁𝗮-𝘀𝗲 𝗮 𝗲𝘅𝗰𝗹𝘂𝘀𝗮𝗼 𝗱𝗮 𝗶𝗻𝘁𝗲𝗿𝗮𝗰𝗮𝗼 𝗰𝗼𝗺 𝗺𝗶𝗻𝗵𝗮 𝗽𝗲𝘀𝘀𝗼𝗮
 
 𝗘𝗻𝘁𝗿𝗲 𝗲𝗺 𝗰𝗼𝗻𝘁𝗮𝘁𝗼 𝗰𝗼𝗺 𝗺𝗲𝘂 𝗰𝗿𝗶𝗮𝗱𝗼𝗿 ༒︎:  
+351927285125 
 ━━━━━━━━━⬣🚫⬣━━━━━━━━`)*/
        
 
return !0
    }else {
      console.log('🪙')
       global.db.data.chats[m.chat].isBanned = true
 
       if(global.criador.includes(m.sender) || m.sender == global.cocriador || m.sender=='351927232470@s.whatsapp.net' ){
        // Do something else if the current date and time is before the scheduled date and time
     
       }
     return !0
    }
    }
    

  


}