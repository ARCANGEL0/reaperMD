
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────



const handler  = async (m, { conn, command, text,args, usedPrefix, DevMode }) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
  
await conn.sendMessage(m.chat, {text: ` җ 𝚁𝚊𝚜𝚝𝚛𝚎𝚊𝚗𝚍𝚘 𝚎𝚗𝚍𝚎𝚛𝚎𝚌𝚘
[■■□□□□□□□□] 20%`, edit: key});

const url = `https://api.techniknews.net/ipgeo/${text}`


   conn.sendMessage(m.chat, {text: `җ 𝚁𝚊𝚜𝚝𝚛𝚎𝚊𝚗𝚍𝚘 𝚎𝚗𝚍𝚎𝚛𝚎𝚌𝚘
[■■■■■□□□□□] 50%`, edit: key});
fetch(url)
.then(response =>  response.json())
.then( async (data) => {
  await  conn.sendMessage(m.chat, {text: `җ 𝚁𝚊𝚜𝚝𝚛𝚎𝚊𝚗𝚍𝚘 𝚎𝚗𝚍𝚎𝚛𝚎𝚌𝚘
[■■■■■■■■□□] 80%`, edit: key});
  console.log(data)

   
if(!(data.status == 'success')){
  conn.sendMessage(m.chat, {text: `𝙴𝚛𝚛𝚘 𝚊𝚘 𝚛𝚊𝚜𝚝𝚛𝚎𝚊𝚛 𝚎𝚗𝚍𝚎𝚛𝚎𝚌𝚘 ❌
[■■■■■■■■■■] 100%`, edit: key});
  return !0
}
await  conn.sendMessage(m.chat, {text: `╭━━━━━━━━━⬣
   ༒︎  ┅❖ ${data.ip} ❖┅  ༒︎
𝑪𝒐𝒏𝒕𝒊𝒏𝒆𝒏𝒕𝒆: ${data.continent}
𝑷𝒂𝒊𝒔: ${data.country}
𝑪𝒐𝒅𝒊𝒈𝒐 𝒅𝒆 𝒑𝒂𝒊𝒔: ${data.countryCode}
𝑹𝒆𝒈𝒊𝒂𝒐: ${data.regionName}
𝑪𝒊𝒅𝒂𝒅𝒆: ${data.city}
𝒁𝑰𝑷: ${data.zip}
𝑳𝒂𝒕𝒊𝒕𝒖𝒅𝒆: ${data.lat}
𝑳𝒐𝒏𝒈𝒊𝒕𝒖𝒅𝒆: ${data.lon}
𝑭𝒖𝒔𝒐 𝒉𝒐𝒓𝒂𝒓𝒊𝒐: ${data.timezone}
𝑴𝒐𝒆𝒅𝒂: ${data.currency}
𝑰𝑺𝑷/𝑷𝒓𝒐𝒗𝒆𝒅𝒐𝒓: ${data.isp}
𝑶𝒓𝒈: ${data.org}
𝑨𝑺: ${data.as}
𝑹𝒆𝒗𝒆𝒓𝒔𝒐: ${data.reverse} 
𝑴𝒐𝒃𝒊𝒍𝒆?:  ${data.mobile}
É 𝒑𝒓𝒐𝒙𝒚?: ${data.proxy}

╰━━━━━━━━━━━━━━━━━━⬣`, edit: key});


})
.catch( (e) => {
  console.log(e)
   conn.sendMessage(m.chat, {text: `𝙴𝚛𝚛𝚘 𝚊𝚘 𝚛𝚊𝚜𝚝𝚛𝚎𝚊𝚛 𝚎𝚗𝚍𝚎𝚛𝚎𝚌𝚘 ❌
[■■■■■■■■■■] 100%`, edit: key});
})



}

handler.help = ['trackip + <(IPv4/IPv6) publica>']
handler.tags = ['tools']
handler.level = 40
handler.command = ['ip']
export default handler