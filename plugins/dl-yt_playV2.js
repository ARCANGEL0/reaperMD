
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
let handler = async (m, { participants,conn, command, args, text, usedPrefix, isAdmin,isOwner}) => {
  
   if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].download===false){
   m.react("❌")
   
   return !0;
 } 
 const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
 const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  let admcheck = admins.includes(who)
  
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
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
  }
}
 if (!(isAdmin || isOwner) && global.db.data.chats[m.chat].autolevelup && global.db.data.chats[m.chat].users[m.sender].money < 120) {
await conn.sendMessage(m.chat ,{text: `╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑺𝒆𝒎 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐-𝒕𝒆 𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂 𝒇𝒊𝒏𝒂𝒏𝒄𝒆𝒊𝒓𝒂, 𝒄𝒐𝒎𝒐 𝒐 𝒄𝒐𝒓𝒗𝒐 𝒒𝒖𝒆 𝒆𝒔𝒑𝒓𝒆𝒊𝒕𝒂 𝒂 𝒊𝒏𝒔𝒐𝒍𝒗ê𝒏𝒄𝒊𝒂.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`},{quoted:m})
 return !0
}
if (!text) throw `${mg}
╭━━━━━━━━━⬣
┃
┃ 🕯️🪦 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐚𝐥 𝐨 𝐚𝐮𝐝𝐢𝐨 𝐨𝐮 
┃ 𝐯𝐢𝐝𝐞𝐨 𝐪𝐮𝐞 𝐚𝐬𝐬𝐨𝐦𝐛𝐫𝐚 𝐬𝐮𝐚 
┃ 𝐦𝐞𝐧𝐭𝐞, 𝐪𝐮𝐚𝐢𝐬 𝐩𝐞𝐧𝐬𝐚𝐦𝐞𝐧𝐭𝐨𝐬 
┃ 𝐢𝐧𝐞𝐛𝐫𝐢𝐚𝐧𝐭𝐞𝐬 𝐟𝐨𝐠𝐞𝐦 𝐝𝐞 𝐬𝐮𝐚 
┃ 𝐬𝐚𝐧𝐢𝐝𝐚𝐝𝐞 𝐞 𝐛𝐮𝐬𝐜𝐚𝐫𝐞𝐢 𝐩𝐚𝐫𝐚 𝐚 
┃ 𝐬𝐞𝐮 𝐝𝐞𝐬𝐞𝐣𝐨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ ${usedPrefix + command} Horror Vacui - Darkness*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${eg}╭━━━━━━━━━⬣
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐬𝐨𝐥𝐞𝐧𝐞𝐦𝐞𝐧𝐭𝐞 𝐪𝐮𝐞 𝐚 
┃ 𝐯𝐨𝐳 𝐝𝐨 𝐥𝐚𝐦𝐞𝐧𝐭𝐨 𝐜𝐡𝐞𝐠𝐚𝐫𝐚 𝐚 
┃ 𝐬𝐮𝐚𝐬 𝐦𝐚𝐨𝐬
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛',
body: `${vs}`,         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/ARCANGEL0/Edgar-WhatsappBOT `}}}) 
 try {
const mediaa = await ytPlay(text);
const audiocore = mediaa.result2?.[0]?.audio || mediaa.result2?.[1]?.audio || mediaa.result2?.[2]?.audio || null;
const aa = await conn.sendMessage(m.chat, {audio: {url: audiocore}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 120
await m.reply("༒︎ 120 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}
if (!aa) {
throw new Error();
}} catch {
const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
const json = await res.json();
const aa_1 = await conn.sendMessage(m.chat, {audio: {url: json.result.audio}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 120
await m.reply("༒︎ 120 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}
if (!aa_1) aa_1 = await conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, {mimetype: 'audio/mp4'});
}}
if (command == 'play.2') {
conn.reply(m.chat, `${eg}╭━━━━━━━━━⬣
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐬𝐨𝐥𝐞𝐧𝐞𝐦𝐞𝐧𝐭𝐞 𝐪𝐮𝐞 𝐚 
┃ 𝐯𝐨𝐳 𝐝𝐨 𝐥𝐚𝐦𝐞𝐧𝐭𝐨 𝐜𝐡𝐞𝐠𝐚𝐫𝐚 𝐚 
┃ 𝐬𝐮𝐚𝐬 𝐦𝐚𝐨𝐬
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛',
body: `${vs}`,         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/ARCANGEL0/Edgar-WhatsappBOT `}}})
try {
const mediaa = await ytPlayVid(text);
if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 120
await m.reply("༒︎ 120 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}
const aa_2 = await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `${wm}`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
if (!aa_2) {
throw new Error();
}} catch {
const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
const json = await res.json();
if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 120
await m.reply("༒︎ 120 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}
await conn.sendFile(m.chat, json.result.video, 'error.mp4', `${wm}`, m);
}}} catch {
m.reply(`${fg}╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨
┃𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞.
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 
┃ 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚
┃ 𝐞𝐱𝐢𝐭𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`)
handler.limit = 0 //No gastada limite si fallas
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
handler.limit = 5
export default handler

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
})}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
const {contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {audio: item.url, size: bytes};
}}
const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, result2: resultFix, thumb});
}).catch(reject);
})}

async function ytMp4(url) {
return new Promise(async (resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
const {qualityLabel, contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {video: item.url, quality: qualityLabel, size: bytes};
}}
const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
}).catch(reject);
})}

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getAudio = await ytMp3(random);
resolve(getAudio);
}).catch(reject);
})}

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getVideo = await ytMp4(random);
resolve(getVideo);
}).catch(reject);
})}

/*import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙏𝙄𝙏𝙇𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${eg}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙀𝙇 𝘼𝙐𝘿𝙄𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙒𝘼𝙄𝙏 𝘼 𝙈𝙊𝙈𝙀𝙉𝙏 𝙁𝙊𝙍 𝙏𝙃𝙀 𝘼𝙐𝘿𝙄𝙊 𝙋𝙇𝙀𝘼𝙎𝙀`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛',
body: '`${vs}`',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/ARCANGEL0/Edgar-WhatsappBOT `}}}) 
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
//https://leyscoders-api.herokuapp.com/api/playmp3?q=lebih%20baik%20darinya&apikey=Your_Key
  //("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `${eg}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙒𝘼𝙄𝙏 𝘼 𝙈𝙊𝙈𝙀𝙉𝙏 𝙁𝙊𝙍 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊 𝙋𝙇𝙀𝘼𝙎𝙀`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛',
body: '`${vs}`',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/ARCANGEL0/Edgar-WhatsappBOT `}}})
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg}𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊\n𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler*/
