
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { performance } from 'perf_hooks';
import osu from 'node-os-utils';
import os from 'os';
import { sizeFormatter } from 'human-readable';
import si from 'systeminformation'; 

// Import


let handler = async (m, { conn, command,  usedPrefix,participants,groupMetadata}) => {
let picture = './media/concept/concept2.jpg'
let name = m.pushName || await conn.getName(m.sender)

const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)

const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}



let format = sizeFormatter({
    std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
});

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 2000) }) * 1000}


//await m.eply('_Realizando test_')

    let NotDetect = '--';
    let old = performance.now();
    let cpu = osu.cpu;
    let cpuCore = cpu.count();
    let drive = osu.drive;
    let mem = osu.mem;
    let netstat = osu.netstat;
    let OS = osu.os.platform();
    let cpuModel = cpu.model();
    let cpuPer;
    let p1 = cpu.usage().then((cpuPercentage) => {
        cpuPer = cpuPercentage;
    }).catch(() => {
        cpuPer = NotDetect;
    });
    let driveTotal, driveUsed, drivePer;
    let p2 = drive.info().then((info) => {
        driveTotal = info.totalGb + ' GB';
        driveUsed = info.usedGb;
        drivePer = info.usedPercentage + '%';
    }).catch(() => {
        driveTotal = NotDetect;
        driveUsed = NotDetect;
        drivePer = NotDetect;
    });
    let ramTotal, ramUsed;
    let p3 = mem.info().then((info) => {
        ramTotal = info.totalMemMb;
        ramUsed = info.usedMemMb;
    }).catch(() => {
        ramTotal = NotDetect;
        ramUsed = NotDetect;
    });
    let netsIn, netsOut;
    let p4 = netstat.inOut().then((info) => {
        netsIn = info.total.inputMb + ' MB';
        netsOut = info.total.outputMb + ' MB';
    }).catch(() => {
        netsIn = NotDetect;
        netsOut = NotDetect;
    });

    let systemInfo = await si.system();
    
    let graphicsInfo = await si.graphics();
    let osInfo = await si.osInfo(); 

    let cpuData = await si.cpu();
    let currentLoad = await si.currentLoad();
    let memData = await si.mem();
    let fsSize = await si.fsSize();
    let battery = await si.battery();
    let temperatures = await si.cpuTemperature();
    let networkStats = await si.networkStats();
    let wifiNetworks = await si.wifiNetworks();
    let gpuData = await si.graphics();
console.log(cpuData)
console.log(systemInfo)
console.log(temperatures)

console.log('gpu blw')
console.log(gpuData)
console.log(graphicsInfo)
console.log('netwr')
console.log(networkStats)
    await Promise.all([p1, p2, p3, p4]);

    let osPlatform = osInfo.platform;
    let osRelease = osInfo.release;


const systemLoadPercentage = currentLoad.currentLoad.toFixed(2); 

let banidos = 0;
let silenciados = 0
let avisados = 0

for (let userId in global.db.data.chats[m.chat].users) {
if (global.db.data.chats[m.chat].users[userId].isKicked === true) {
banidos++;
}
if (global.db.data.chats[m.chat].users[userId].silenced === true) {
silenciados++;
}
if (global.db.data.chats[m.chat].users[userId].adv >0) {
avisados++;
}
}



let neww = performance.now()

let speed = neww - old



let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let uptime = clockString(_uptime)

let shell = `${global.heading} journalctl`
let greetTxt = global.db.data.chats[m.chat].language === 'en' ? 
`ᴜsᴇʀ:`
:
`ᴜsᴜᴀʀɪᴏ:`

let project = `> ///𝗥.𝝣.𝝠.𝗣.𝗘.𝗥 Pʀᴏᴊᴇᴄᴛ
> v${vs}`

let isStatus 

if(global.db.data.chats[m.chat].isBanned && global.db.data.chats[m.chat].language == 'pt') {
    isStatus = '⚠︎ Ｂｌｏｑｕｅａｄｏ'
  }
  else if(global.db.data.chats[m.chat].isBanned && global.db.data.chats[m.chat].language == 'en') {
    isStatus = '⚠︎ Ｂｌｏｃｋｅｄ'
  }
  // inactive
  else if(global.db.data.chats[m.chat].desativado && global.db.data.chats[m.chat].language == 'pt') {
    isStatus = '⚠︎ Ｄｅｓａｔｉｖａｄｏ'
  }
  else if(global.db.data.chats[m.chat].desativado && global.db.data.chats[m.chat].language == 'en') {
    isStatus = '⚠︎ Ｄｅａｃｔｉｖａｔｅｄ'
  }
  //admin
  else if(global.db.data.chats[m.chat].modoadmin && global.db.data.chats[m.chat].language == 'pt') {
    isStatus = '⚠︎ Ａｐｅｎａｓ ａｄｍｉｎ'
  }
  else if(global.db.data.chats[m.chat].modoadmin && global.db.data.chats[m.chat].language == 'en') {
    isStatus = '⚠︎ Ａｄｍｉｎ ｏｎｌｙ'
  }
  else {
    if(global.db.data.chats[m.chat].language == 'en') {
   isStatus = '𓉘𝆺𝅥𓉝 Ｏｎｌｉｎｅ'
    }
    else if(global.db.data.chats[m.chat].language == 'pt') {
   isStatus = '𓉘𝆺𝅥𓉝 Ｏｎｌｉｎｅ'
    }
  }

let status2 = global.db.data.chats[m.chat].language === 'en' ? 
global.opts['self'] ? '𝙥𝙧𝙞𝙫𝙖𝙩𝙚' : '𝙥𝙪𝙗𝙡𝙞𝙘'
:
global.opts['self'] ? '𝙥𝙧𝙞𝙫𝙖𝙙𝙤' : '𝙥𝙪́𝙗𝙡𝙞𝙘𝙤'
let botstatus = `[ ʙᴏᴛ ᴍᴏᴅᴇ: ${status2}` 
let groupstatus = `sᴛᴀᴛᴜs: ${isStatus}`
let timeActive  = global.db.data.chats[m.chat].language === 'en' ? 
`> ᕀ ᴜᴘᴛɪᴍᴇ↴
> ${uptime}`
:
`> ᕀ ᴛᴇᴍᴘᴏ ᴀᴛɪᴠᴏ↴
> ${uptime}`



 let totalChats =  global.db.data.chats[m.chat].language === 'pt'

      ? 
`> ᕀ ᴛᴏᴛᴀʟ ᴅᴇ ᴄʜᴀᴛs: ${chats.length} 
> ᕀ ᴛᴏᴛᴀʟ ᴅᴇ ᴜsᴜᴀ́ʀɪᴏs: ${Object.keys(global.db.data.users).length} 
> ᕀ ᴛᴏᴛ. ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs: ${chats.length - groupsIn.length} | 
> ᕀ ᴛᴏᴛ. ᴄʜᴀᴛs ʙᴀɴɪᴅᴏs: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} | 
> ᕀ ᴛᴏᴛ. ᴜsᴜᴀʀ. ʙʟᴏǫᴜᴇᴀᴅᴏs: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}`
     
      : 
`> ᕀ ᴛᴏᴛᴀʟ ᴄʜᴀᴛs: ${chats.length} 
> ᕀ ᴛᴏᴛᴀʟ ᴅᴇ ᴜsᴇʀs: ${Object.keys(global.db.data.users).length} 
> ᕀ ᴛᴏᴛ. ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛs: ${chats.length - groupsIn.length} | 
> ᕀ ᴛᴏᴛ. ʙᴀɴɴᴇᴅ ᴄʜᴀᴛs: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} | 
> ᕀ ᴛᴏᴛ. ʙᴀɴɴᴇᴅ ᴜsᴇʀs: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}`
        

let groupStats =   global.db.data.chats[m.chat].language === 'pt'
? 
`> ᕀ ᴜsᴜᴀ́ʀɪᴏs: *${participants.length}*
> ᕀ ᴜsᴜᴀ́ʀɪᴏs sɪʟᴇɴᴄɪᴀᴅᴏs: *${silenciados}*
> ᕀ ᴜsᴜᴀ́ʀɪᴏs ᴀᴅᴠᴇʀᴛɪᴅᴏs: *${avisados}* 
> ᕀ ᴜsᴜᴀ́ʀɪᴏs ʙᴀɴɪᴅᴏs: *${banidos}*`
: 

`> ᕀ ᴛᴏᴛᴀʟ ᴜsᴇʀs: *${participants.length}* 
> ᕀ sɪʟᴇɴᴄᴇᴅ ᴜsᴇʀs: *${silenciados}*
> ᕀ ᴡᴀʀɴᴇᴅ ᴜsᴇʀs: *${avisados}* 
> ᕀ ʙʟᴀᴄᴋʟɪsᴛ ᴜsᴇʀs: *${banidos}*`




let systemHeader =  global.db.data.chats[m.chat].language === 'en' ?
`𝗦𝗬𝗦𝗧𝗘𝗠` 
: 
`𝗦𝗜𝗦𝗧𝗘𝗠𝗔`

let sysArch =  global.db.data.chats[m.chat].language === 'en' ?
`ᴀʀᴄʜɪᴛᴇᴄᴛᴜʀᴇ` 
: 
`ᴀʀǫᴜɪᴛᴇᴛᴜʀᴀ`

let sysCPU =  global.db.data.chats[m.chat].language === 'en' ?
`ᴄᴘᴜ ᴍᴏᴅᴇʟ` 
: 
`ᴍᴏᴅᴇʟᴏ ᴅᴇ ᴄᴘᴜ`

let sysCORE =  global.db.data.chats[m.chat].language === 'en' ?
`ᴄᴏʀᴇs` 
: 
`ɴᴜ́ᴄʟᴇᴏs`



let cpUsg =  global.db.data.chats[m.chat].language === 'en' ?
`ᴄᴘᴜ ᴜsᴀɢᴇ` 
: 
`ᴜsᴏ ᴅᴏ ᴄᴘᴜ`


let creator =  global.db.data.chats[m.chat].language === 'en' ?
`ᴄʀɪᴀᴅᴏʀ`
:
`ᴄʀᴇᴀᴛᴏʀ`

let diskSpace =  global.db.data.chats[m.chat].language === 'en' ?
`ᴅɪsᴋ ᴜsᴀɢᴇ` 
: 
`ᴇsᴘᴀᴄ̧ᴏ ᴇᴍ ᴅɪsᴄᴏ`

let sysLoad =  global.db.data.chats[m.chat].language === 'en' ?
`sʏsᴛᴇᴍ ʟᴏᴀᴅ` 
: 
`Cᴀʀɢᴀ ᴅᴏ Sɪsᴛᴇᴍᴀ`


let systemStats = `𓉘ᛜ𓉝 ${systemHeader}
> ᴏs: ${osPlatform}
> ʜᴏsᴛɴᴀᴍᴇ: robot
> ᴜᴘᴛɪᴍᴇ: ${uptime}
> ${sysArch}: ${osInfo.arch}
> ᴅɪsᴛʀᴏ: ${osInfo.distro}
> ᴋᴇʀɴᴇʟ: ${osInfo.kernel} (Versão: ${osRelease})
> ${sysCPU}: ${cpuModel}
> ${sysCORE}: ${cpuCore}
> ${cpUsg}: ${cpuPer}%
> ʀᴀᴍ: ${formatBytes(memData.total)} total, ${formatBytes(memData.free)} livre (${Math.round(memData.used / memData.total * 100)}% em uso)
> ${diskSpace}: ${formatBytes(fsSize.reduce((acc, curr) => acc + curr.size, 0))} total, ${formatBytes(fsSize.reduce((acc, curr) => acc + curr.used, 0))} usado (${Math.round(fsSize.reduce((acc, curr) => acc + curr.used, 0) / fsSize.reduce((acc, curr) => acc + curr.size, 0) * 100)}% em uso)
> ${sysLoad}: ${systemLoadPercentage}%
`

let message = `${shell}
/// 𓉘Ⲗ𓉝 ${greetTxt} ${name}
> ${project}
> ${creator}: 𝛌𝐑𝐂𝚲𝐍𝐆𝐄𝐋𝚯
> ${botstatus}
${timeActive}
> ‎ 
${totalChats}
⸺⸺⸺⸺⸺⸺
> 𓉘~𓉝 ${groupMetadata.subject}
> // ${groupstatus}
> ‎ 
${groupStats}
⸺⸺⸺⸺⸺⸺
${systemStats}
`

await conn.sendFile(m.chat, picture, 'stats.png', message, fkontak)

}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(status?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
