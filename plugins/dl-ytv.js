
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────
import {exec} from 'child_process'

import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from '@distube/ytdl-core'
import axios from 'axios'
import pkg from '@neoxr/youtube-scraper'
const { Youtube } = pkg
let handler = async (m, { conn, args, isAdmin,usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}❖─┅──┅𝗡𝘂𝗺 𝗿𝗲𝗶𝗻𝗼 𝗱𝗲 𝘀𝗼𝗺𝗯𝗿𝗮𝘀, 𝗼𝗻𝗱𝗲 𝗼𝘀 𝗰𝗼𝗿𝘃𝗼𝘀 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝗺 𝘀𝗲𝗴𝗿𝗲𝗱𝗼𝘀 𝗽𝗿𝗼𝗶𝗯𝗶𝗱𝗼𝘀, 𝗮𝗴𝘂𝗮𝗿𝗱𝗼 𝗻𝗮 𝗽𝗲𝗻𝘂𝗺𝗯𝗿𝗮. ─┅──┅❖ \n𝗥𝗲𝘃𝗲𝗹𝗲-𝗺𝗲 𝗼 𝗟𝗶𝗻𝗸 𝗱𝗼 𝘀𝗲𝘂 𝗱𝗲𝘀𝗲𝗷𝗼 𝗻𝗼 𝗲𝗹𝗼 𝗱𝗶𝗴𝗶𝘁𝗮𝗹 𝗾𝘂𝗲 𝘁𝗿𝗮𝗿𝗲𝗶 𝗮 𝘀𝘂𝗮 𝗯𝘂𝘀𝗰𝗮 𝗲𝗻𝘁𝗮𝗼\n𝙀𝙓:\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)
  if (!(isAdmin || isOwner) && global.db.data.chats[m.chat].autolevelup && global.db.data.chats[m.chat].users[m.sender].money < 125) {
await conn.sendMessage(m.chat ,{text: global.db.data.chats[m.chat].language === 'en' ? `> [⚠] ʏᴏᴜ'ʀᴇ ᴏᴜᴛ ᴏꜰ ʙʏᴛᴇᴄᴏɪɴꜱ, ᴋɪᴅ.` : `> [⚠] ᴠᴏᴄᴇ ᴇꜱᴛᴀ ꜱᴇᴍ ʙʏᴛᴇᴄᴏɪɴ ᴀʟɢᴜᴍ, ɢᴀʀᴏᴛᴏ!`},{quoted:m})
 return !0
}
m.react("⏳")
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0];
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `${langTOGGLE['smsAvisoFG']()} ❖─┅──┅𝗤𝘂𝗲 𝗶𝗻𝗳𝗼𝗿𝘁𝘂𝗻𝗶𝗼, 𝗺𝗮𝘀 𝗿𝗲𝗰𝗲𝗶𝗼 𝗾𝘂𝗲 𝗻ã𝗼 𝘀𝗲 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮 𝗯𝘂𝘀𝗰𝗮 𝗮𝗹𝗴𝘂𝗺𝗮 𝗮𝗼 𝗻𝘂𝗺𝗲𝗿𝗼 𝗾𝘂𝗲 𝗺𝗲 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝘀.─┅──┅❖\n 𝗗𝗲𝘀𝘃𝗲𝗻𝗱𝗮, 𝘀𝗼𝗺𝗯𝗿𝗮, 𝘂𝗺 𝗻𝘂𝗺𝗲𝗿𝗼 𝗱𝗲𝗻𝘁𝗿𝗲 𝗮 𝗺𝗶𝗿𝗶𝗮𝗱𝗲 𝘀𝗼𝗺𝗯𝗿𝗶𝗮, 𝗱𝗲 𝘂𝗺 𝗮 ${matchingItem.urls.length}*`;
}} else {
throw `${langTOGGLE['smsAvisoMG']()} 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝘽𝙐́𝙎𝘾𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙈 𝘾𝙊𝙈𝘼𝙉𝘿𝙊  ${usedPrefix}playlist <texto>*`;
}} else {
throw `${langTOGGLE['smsAvisoMG']()} 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝘽𝙐́𝙎𝘾𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙈 𝘾𝙊𝙈𝘼𝙉𝘿𝙊  ${usedPrefix}playlist <texto>*`;
}}}  
  m.react("⏳")
await conn.reply(m.chat, `${langTOGGLE['smsAvisoEG']()}❖─┅──┅𝙏𝙚𝙪 𝙫𝙞𝙙𝙚𝙤 𝙧𝙚𝙨𝙨𝙤𝙖 𝙘𝙤𝙢𝙤 𝙪𝙢 𝙡𝙪𝙜𝙪𝙗𝙧𝙚 𝙨𝙪𝙨𝙨𝙪𝙧𝙧𝙤, 𝙖 𝙚𝙨𝙥𝙚𝙧𝙖 𝙙𝙚 𝙨𝙪𝙖 𝙘𝙝𝙚𝙜𝙖𝙙𝙖. ─┅──┅❖\n
𝘼𝙜𝙪𝙖𝙧𝙙𝙚 𝙗𝙧𝙚𝙫𝙚𝙢𝙚𝙣𝙩𝙚 𝙦𝙪𝙚 𝙤 𝙡𝙖𝙢𝙚𝙣𝙩𝙤 𝙙𝙚 𝙨𝙚𝙪 𝙫𝙞𝙙𝙚𝙤 𝙧𝙚𝙘𝙖𝙞𝙧𝙖 𝙨𝙤𝙗𝙧𝙚 𝙤 𝙘𝙝𝙖𝙩. . . ⌛`, fkontak, m)


try {

  const randomDg = Math.floor(Math.random() * 1000) + 1;
  const outputFileName = `tmp/${randomDg}.mp4`;
  const command = `yt-dlp -x "${yt_play[0].url}" --no-warnings -o "${outputFileName}"`;
  
  
  
  exec(command, async (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error.message}`);
        throw error;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        throw stderr;
    }
    if(global.db.data.chats[m.chat].autolevelup){
      global.db.data.chats[m.chat].users[m.sender].money -= 125
       m.react("📀")
      await m.reply(` 125 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ ${usedText}`)
    }
  console.log(`File downloaded at ${outputFilename}`)
 conn.sendFile(m.chat, `tmp/${randomDg}.mp4`,'err.mp4',null,m)
  
  })
  
  
    
 
  } 

catch(e){
  console.log(e)
  try {
const video = await ytmp4(youtubeLink);
await conn.sendMessage(m.chat, { video: { url: video }, fileName: `video.mp4`, mimetype: 'video/mp4', caption: ``}, { quoted: m })
if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 125
 m.react("📀")
await m.reply(" 125 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}

}
catch(e){
  console.log(e)
  m.react("💀")
      sendSystemErrorAlert(global.db.data.chats[m.chat].language);
}
}
}
handler.level = 6
handler.command = ['ytv']
export default handler

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})}

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
  console.log('👈👈👈 1')
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
  console.log('👈👈👈 2')
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
  console.log('👈👈👈 3')
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
  console.log('👈👈👈 4')
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};
