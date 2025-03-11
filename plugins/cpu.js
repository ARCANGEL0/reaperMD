
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
import si from 'systeminformation'; // Import systeminformation module for detailed system information

let handler = async (m, { conn, command, usedPrefix,participants,groupMetadata }) => {
  
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //


    let picture = 'https://itzpire.com/file/034330669708.jpg';
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
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 2000) }) * 1000}
let uptime = '> ' + clockString(_uptime, global.db.data.chats[m.chat].language)
    try {
      
  //await m.reply('_Realizando test_')
  
        let NotDetect = 'Nao detectado';
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
        let name = await conn.getName(m.sender);
        let _uptime = process.uptime() * 1000;

        // Get detailed system information using systeminformation module
        let systemInfo = await si.system();
        
        let graphicsInfo = await si.graphics();
        let osInfo = await si.osInfo(); // Corrected function call
 
        let cpuData = await si.cpu();
    //    console.log(cpuData)
        let currentLoad = await si.currentLoad();
        let memData = await si.mem();
     //   console.log(currentLoad)
        let fsSize = await si.fsSize();
        let battery = await si.battery();
        let temperatures = await si.cpuTemperature();
        let networkStats = await si.networkStats();
        let wifiNetworks = await si.wifiNetworks();
        let gpuData = await si.graphics();
console.log(temperatures)
        await Promise.all([p1, p2, p3, p4]);

        // Extracted relevant OS information
        let osPlatform = osInfo.platform;
        let osRelease = osInfo.release;
        // Assuming `currentLoad` is the array containing system load information

const systemLoadPercentage = currentLoad.currentLoad.toFixed(2); // Rounded to two decimal places


        // Handle undefined value for currentLoad.currentload
        // Supondo que global.db.data.chats[m.chat].users seja o objeto que contém informações de usuários

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
  
  
  
let botStatus 

if(global.db.data.chats[m.chat].isBanned && global.db.data.chats[m.chat].language == 'pt') {
  botStatus = '⚠︎ Ｂｌｏｑｕｅａｄｏ'
}
else if(global.db.data.chats[m.chat].isBanned && global.db.data.chats[m.chat].language == 'en') {
  botStatus = '⚠︎ Ｂｌｏｃｋｅｄ'
}
// inactive
else if(global.db.data.chats[m.chat].desativado && global.db.data.chats[m.chat].language == 'pt') {
  botStatus = '⚠︎ Ｄｅｓａｔｉｖａｄｏ'
}
else if(global.db.data.chats[m.chat].desativado && global.db.data.chats[m.chat].language == 'en') {
  botStatus = '⚠︎ Ｄｅａｃｔｉｖａｔｅｄ'
}
//admin
else if(global.db.data.chats[m.chat].modoadmin && global.db.data.chats[m.chat].language == 'pt') {
  botStatus = '⚠︎ Ａｐｅｎａｓ ａｄｍｉｎ'
}
else if(global.db.data.chats[m.chat].modoadmin && global.db.data.chats[m.chat].language == 'en') {
  botStatus = '⚠︎ Ａｄｍｉｎ ｏｎｌｙ'
}
else {
  botStatus = `ΒYƬΣSΞC-MĐ 𖠑 v${vs}`
}
const header =`
> -------------------------------------
> ${botStatus}
> [+] 𝚂𝚝𝚊𝚝𝚞𝚜
> ------------------------------------- 
`
const header2 = `
v@reaper:#~ uptime
${uptime}
`

const grupo = `
v@reaper:~# groupstat *${groupMetadata.subject}*
${
  global.db.data.chats[m.chat].language === 'pt'
    ? `> Usuários: *${participants.length}* | Silenciados: *${silenciados}* | Advertidos: *${avisados}* | Exilados: *${banidos}*`
    : `> Users: *${participants.length}* | Silenced: *${silenciados}* | Warned: *${avisados}* | Exiled: *${banidos}*`
}
`;

console.log(grupo);


        const chtds = `
v@reaper:~# chatstat -a
${
  global.db.data.chats[m.chat].language === 'pt'
    ? `> Total de Chats: ${chats.length} | Usuários: ${Object.keys(global.db.data.users).length} | Chats Privados: ${chats.length - groupsIn.length} | Chats Banidos: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} | Usuários Bloqueados: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}`
    : `> Total Chats: ${chats.length} | Users: ${Object.keys(global.db.data.users).length} | Private Chats: ${chats.length - groupsIn.length} | Banned Chats: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} | Blocked Users: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}`
}
`;

console.log(chtds);


        const system = `
v@reaper:~# lscpu
${
  global.db.data.chats[m.chat].language === 'pt'
    ? `> INFORMAÇÕES DO SISTEMA
> SO             : ${osPlatform}
> Nome do Host   : robot
> Arquitetura    : ${osInfo.arch}
> Distro         : ${osInfo.distro}
> Kernel         : ${osInfo.kernel} (Versão: ${osRelease})
> Modelo de CPU  : ${cpuModel}
> Núcleos de CPU : ${cpuCore}
> Uso de CPU     : ${cpuPer}%
> RAM            : ${formatBytes(memData.total)} total, ${formatBytes(memData.free)} livre (${Math.round(memData.used / memData.total * 100)}% em uso)
> Espaço em Disco: ${formatBytes(fsSize.reduce((acc, curr) => acc + curr.size, 0))} total, ${formatBytes(fsSize.reduce((acc, curr) => acc + curr.used, 0))} usado (${Math.round(fsSize.reduce((acc, curr) => acc + curr.used, 0) / fsSize.reduce((acc, curr) => acc + curr.size, 0) * 100)}% em uso)
> Carga do Sistema : ${systemLoadPercentage}%`
    : `> SYSTEM INFORMATION
> OS            : ${osPlatform}
> Hostname      : robot
> Architecture  : ${osInfo.arch}
> Distro        : ${osInfo.distro}
> Kernel        : ${osInfo.kernel} (Release: ${osRelease})
> CPU Model     : ${cpuModel}
> CPU Cores     : ${cpuCore}
> CPU Usage     : ${cpuPer}%
> RAM           : ${formatBytes(memData.total)} total, ${formatBytes(memData.free)} free (${Math.round(memData.used / memData.total * 100)}% used)
> Disk Space    : ${formatBytes(fsSize.reduce((acc, curr) => acc + curr.size, 0))} total, ${formatBytes(fsSize.reduce((acc, curr) => acc + curr.used, 0))} used (${Math.round(fsSize.reduce((acc, curr) => acc + curr.used, 0) / fsSize.reduce((acc, curr) => acc + curr.size, 0) * 100)}% used)
> System Load   : ${systemLoadPercentage}%`
}`

console.log(systemInfo);

  const footer = `> ‎ 
> # Maintained by ByteSec`
  
  switch (command){
    
    case 'status':
      conn.sendMessage(m.chat, { image: { url: picture }, caption: `${header}
${header2}
${grupo}
${chtds}
${system}
${footer}  ` }, { quoted: m }, { mentions: [m.sender] });
      break
    case 'neofetch': case 'cpu':
      conn.sendMessage(m.chat, { image: { url:picture }, caption: `${header}
${system}
${footer}  ` }, { quoted: m }, { mentions: [m.sender] });
      break
    case 'infochats':
      conn.sendMessage(m.chat, { image: { url:picture }, caption: `${header}
${chtds}
${footer}  ` }, { quoted: m }, { mentions: [m.sender] });
      break
    case 'infogrupo':
      conn.sendMessage(m.chat, { image: { url:picture }, caption: `${header}
${header2}
${grupo}
${footer}  ` }, { quoted: m }, { mentions: [m.sender] });
      break
  }
  
        console.log(OS);
    } catch (e) {
        console.log(e);
        conn.reply(m.chat, e, m);
    }
}

handler.help = ['status']
handler.tags = ['info']
handler.command = /^(cpu|status|infogrupo|infochats)$/i

export default handler

function clockString(ms, lang) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;

    if (lang === 'pt') {
        return [d, ' *Dias* ', h, ' *Horas,* ', m, ' *Minutos* *e* ', s, ' *Segundos* ']
            .map(v => v.toString().padStart(2, '0')).join('');
    } else {
        return [d, ' *Days* ', h, ' *Hours,* ', m, ' *Minutes* *and* ', s, ' *Seconds* ']
            .map(v => v.toString().padStart(2, '0')).join('');
    }
}
      