


//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────── ──────────────

const handler = async (m, {conn, isMods,participants, groupMetadata,usedprefix,isCriadora, isAdmin,isOwner}) => {
  const language = global.db.data.chats[m.chat].language;
  function getCurrentDate(format) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date();
  return format === 'pt' ? date.toLocaleDateString('pt-BR', options) : date.toLocaleDateString('en-US', options);
}
    const date = getCurrentDate(language);

  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  let username = conn.getName(who)
  const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
  console.log(admins)
  console.log(who)
  console.log("e admin   " +admins.includes(who))
  let admcheck = admins.includes(who)
  
  if(!global.db.data.chats[m.chat].users[who].adm)
  global.db.data.chats[m.chat].users[who].adm=false
  
  global.db.data.chats[m.chat].users[who].adm =  admcheck
   //user admins? 
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[who]){
  global.db.data.chats[m.chat].users[who]={ 
    exp: 0,
        limit:0,
        role:'⌥ 𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        rce:0,
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
if(!global.db.data.chats[m.chat].users[who].limit ||
global.db.data.chats[m.chat].users[who].limit<0){
  global.db.data.chats[m.chat].users[who].limit = 0
}
if(!global.db.data.chats[m.chat].users[who].kills ||
global.db.data.chats[m.chat].users[who].kills<0){
  global.db.data.chats[m.chat].users[who].kills = 0
}
if(!global.db.data.chats[m.chat].users[who].money ||
global.db.data.chats[m.chat].users[who].money<0){
  global.db.data.chats[m.chat].users[who].money = 0
}



if(global.db.data.chats[m.chat].users[who].money< 0){
  global.db.data.chats[m.chat].users[who].money=0
}
let user = global.db.data.chats[m.chat].users[who]


/// information information
const usernames = global.db.data.chats[m.chat].users[who].name
if(m.sender== "5513997626809@s.whatsapp.net")
{
  const nati = global.db.data.users[who];
  nati.parceiro ='ᎻΣΝᎡᎽ Ꮯ.Ᏼ λᎡᏟᎪΝᏀᎬᏞϴ'
  
}

////
function checkProfileExistence(who) {
  const user = global.db.data.users[who];
  const chatUser  = global.db.data.chats[m.chat].users[who];

  // Check if any of the properties exist
  const hasProfileData = user.nome || chatUser .morada || user.age || user.profissao || 
                         user.time || user.esportes || user.religiao || 
                         user.parceiro || user.hobbies || user.generos || 
                         user.musica || user.animais || user.instagram || 
                         user.website || user.links || user.biografia;


 const profileText = global.db.data.chats[m.chat].language === 'en' ?
`| [+] 𝙿̷𝚁̷𝙾̷𝙵̷𝙸̷𝙻̷𝙴̷` :
`| [+] 𝙿̷𝙴̷𝚁̷𝙵̷𝙸̷𝙻̷`
  return hasProfileData ? profileText : '';
}

// Example usage
const profileStatus = checkProfileExistence(who);

const userdata = global.db.data.users[who];



const profileLines = [
  language === 'en' 
    ? (userdata.nome ? '> ┏ ɴᴀᴍᴇ: ' + userdata.nome : null)
    : (userdata.nome ? '> ┏ ɴᴏᴍᴇ: ' + userdata.nome : null),

  language === 'en' 
    ? (userdata.morada ? '> ┣ ᴀᴅᴅʀᴇꜱꜱ: ' + userdata.morada : null)
    : (userdata.morada ? '> ┣ ᴇɴᴅᴇʀᴇᴄᴏ: ' + userdata.morada : null),

  language === 'en' 
    ? (userdata.age ? '> ┣ ᴀɢᴇ: ' + userdata.age : null)
    : (userdata.age ? '> ┣ ɪᴅᴀᴅᴇ: ' + userdata.age : null),

  language === 'en' 
    ? (userdata.profissao ? '> ┣ ᴊᴏʙ: ' + userdata.profissao : null)
    : (userdata.profissao ? '> ┣ ᴘʀᴏꜰɪꜱꜱᴀᴏ: ' + userdata.profissao : null),
  language === 'en' 
    ? (userdata.study ? '> ┣ ꜱᴛᴜᴅʏɪɴɢ/ɢʀᴀᴅᴜᴀᴛᴇᴅ ɪɴ: ' + userdata.study : null)
    : (userdata.study ? '> ┣ ᴇꜱᴛᴜᴅᴀɴᴅᴏ/ꜰᴏʀᴍᴀᴅᴏ ᴇᴍ: ' + userdata.study : null),

  language === 'en' 
    ? (userdata.time ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ꜱᴘᴏʀᴛ ʟᴇᴀɢᴜᴇ: ' + userdata.time : null)
    : (userdata.time ? '> ┣ ᴛɪᴍᴇ ᴘʀᴇꜰᴇʀɪᴅᴏ: ' + userdata.time : null),

  language === 'en' 
    ? (userdata.esportes ? '> ┣ ꜱᴘᴏʀᴛꜱ ᴘʀᴀᴄᴛɪᴄᴇᴅ: ' + userdata.esportes : null)
    : (userdata.esportes ? '> ┣ ᴇꜱᴘᴏʀᴛᴇꜱ ᴘʀᴀᴛɪᴄᴀᴅᴏꜱ: ' + userdata.esportes : null),

  language === 'en' 
    ? (userdata.religiao ? '> ┣ ʀᴇʟɪɢɪᴏɴ: ' + userdata.religiao : null)
    : (userdata.religiao ? '> ┣ ʀᴇʟɪɢɪᴀᴏ: ' + userdata.religiao : null),

  language === 'en' 
    ? (userdata.parceiro ? '> ┣ ᴍᴀʀʀɪᴇᴅ ᴛᴏ: @' + userdata.parceiro.split('@')[0] : null)
    : (userdata.parceiro ? '> ┣ ᴄᴀꜱᴀᴅᴏ/ᴀ ᴄᴏᴍ: @' + userdata.parceiro.split('@')[0] : null),

  language === 'en' 
    ? (userdata.hobbies ? '> ┣ ʜᴏʙʙɪᴇꜱ: ' + userdata.hobbies : null)
    : (userdata.hobbies ? '> ┣ ɪɴᴛᴇʀᴇꜱꜱᴇꜱ & ʜᴏʙʙɪᴇꜱ: ' + userdata.hobbies : null),
 
    language === 'en' 
    ? (userdata.system ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴏꜱ:' + userdata.system : null)
    : (userdata.system ? '> ┣ ꜱɪꜱᴛᴇᴍᴀ ᴏᴘᴇʀᴀᴄɪᴏɴᴀʟ ᴘʀᴇꜰᴇʀɪᴅᴏ: ' + userdata.system : null),
    language === 'en' 
    ? (userdata.languages ? '> ┣ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʟᴀɴɢᴜᴀɢᴇꜱ' + userdata.languages : null)
    : (userdata.languages ? '> ┣ ʟɪɴɢᴜᴀɢᴇɴꜱ ᴅᴇ ᴘʀᴏɢʀᴀᴍᴀᴄᴀᴏ: ' + userdata.languages : null),

  language === 'en' 
    ? (userdata.generos ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴍᴜꜱɪᴄ ɢᴇɴʀᴇꜱ: ' + userdata.generos : null)
    : (userdata.generos ? '> ┣ ɢᴇɴᴇʀᴏꜱ ᴍᴜꜱɪᴄᴀɪꜱ: ' + userdata.generos : null),

  language === 'en' 
    ? (userdata.serie ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴛᴠ ꜱʜᴏᴡ: ' + userdata.serie : null)
    : (userdata.serie ? '> ┣ ꜱᴇʀɪᴇ ꜰᴀᴠᴏʀɪᴛᴀ: ' + userdata.serie : null),

  language === 'en' 
    ? (userdata.musica ? '> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴍᴜꜱɪᴄ: ' + userdata.musica : null)
    : (userdata.musica ? '> ┣ ᴍᴜꜱɪᴄᴀ ᴘʀᴇꜰᴇʀɪᴅᴀ: ' + userdata.musica : null),

  language === 'en' 
    ? (userdata.animais ? '> ┣ ᴘᴇᴛꜱ: ' + userdata.animais : null)
    : (userdata.animais ? '> ┣ ᴀɴɪᴍᴀɪꜱ ᴅᴇ ᴇꜱᴛɪᴍᴀᴄᴀᴏ: ' + userdata.animais : null),

    userdata.instagram ? '> ┣ ɪɴꜱᴛᴀɢʀᴀᴍ: instagram.com/' + userdata.instagram : null,

    userdata.website ? '> ┣ ᴡᴇʙꜱɪᴛᴇ: ' + userdata.website : null,
    userdata.links ? '> ┣ ʟɪɴᴋꜱ: ' + userdata.links : null,

  language === 'en' 
    ? (userdata.biografia ? '> ┗ ᴀʙᴏᴜᴛ ᴍᴇ:\n> . . . . . . . . . . . . . . . . . .\n\n> ' + userdata.biografia : null)
    : (userdata.biografia ? '> ┗ ꜱᴏʙʀᴇ ᴍɪᴍ:\n> . . . . . . . . . . . . . . . . . .\n> ‎ \n> ' + userdata.biografia : null)
];

const profileString = profileLines.filter(line => line !== null).join('\n');
console.log(profileString);




  
if(who == global.criador){

  const ageHex = (() => {
    const dob = new Date(2000, 8, 11);
    const age = new Date().getFullYear() - dob.getFullYear() - (new Date() < new Date(new Date().getFullYear(), dob.getMonth(), dob.getDate()) ? 1 : 0);
    return `0x${age.toString(16)}`;
})();

const myProfile = global.db.data.chats[m.chat].language === 'en' ? 
`> ┏ ɴᴀᴍᴇ: Ɦ𝝣ƝɌỴ 𝛌𝐑𝐂𝚲𝐍𝐆𝐄𝐋𝚯
> ┣ ᴀᴅᴅʀᴇꜱꜱ: 127.0.0.1
> ┣ ᴀɢᴇ: ${ageHex}
> ┣ ᴊᴏʙ: DΞVΞLØPΞR̟
> ┣ ꜱᴘᴏʀᴛꜱ ᴘʀᴀᴄᴛɪᴄᴇᴅ: 𝒇𝒐𝒐𝒕𝒃𝒂𝒍𝒍❟ 𝒃𝒂𝒔𝒌𝒆𝒕❟ 𝒃𝒐𝒙𝒊𝒏𝒈❟ 𝒄𝒉𝒆𝒔𝒔
> ┣ ʀᴇʟɪɢɪᴏɴ: ᚜𝐆᚛ // 𝗩∴𝗗∴𝗦∴𝗔
> ┣ ꜱᴛᴜᴅʏɪɴɢ/ɢʀᴀᴅᴜᴀᴛᴇᴅ ɪɴ: 𝙂𝙧𝙖𝙙𝙪𝙖𝙩𝙚𝙙 𝙞𝙣 𝙎𝘿𝘼 𝙖𝙣𝙙 𝙨𝙩𝙪𝙙𝙮𝙞𝙣𝙜 𝘾𝙮𝙗𝙚𝙧𝙨𝙚𝙘𝙪𝙧𝙞𝙩𝙮
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴏꜱ: (𝘽𝙡𝙖𝙘𝙠) 𝘼𝙧𝙘𝙝 𝙇𝙞𝙣𝙪𝙭
> ┣ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʟᴀɴɢᴜᴀɢᴇꜱ: 𝘾#❟ 𝙋𝙮𝙩𝙝𝙤𝙣❟ 𝙅𝙖𝙫𝙖❟ 𝙍𝙪𝙗𝙮❟ 𝙎𝙌𝘓❟ 𝙏𝙮𝙥𝙚𝙨𝙘𝙧𝙞𝙥𝙩❟ 𝙍❟ [...]
> ┣ ʜᴏʙʙɪᴇꜱ: ᴄᴏᴅɪɴɢ & ʜᴀᴄᴋɪɴɢ
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴛᴠ ꜱʜᴏᴡ: 𝑴𝒓. 𝑹𝒐𝒃𝒐𝒕 𝖋
> ┣ ꜰᴀᴠᴏʀɪᴛᴇ ᴍᴜꜱɪᴄ: 𝑭𝒆𝒆𝒅 𝒕𝒉𝒆 𝒘𝒐𝒍𝒇 - 𝐵𝑟𝑒𝑎𝑘𝑖𝑛𝑔 𝐵𝑒𝑛𝑗𝑎𝑚𝑖𝑛
> ┣ ᴘᴇᴛꜱ: 1 𝘣𝘭𝘢𝘤𝘬 𝘬𝘪𝘵𝘵𝘺
> ┣ ɪɴꜱᴛᴀɢʀᴀᴍ: instagram.com/h.arcangelo
> ┗ ᴡᴇʙꜱɪᴛᴇ: https://arcangelo.net
` 
:
`> ┏ ɴᴏᴍᴇ: Ɦ𝝣ƝɌỴ 𝛌𝐑𝐂𝚲𝐍𝐆𝐄𝐋𝚯
> ┣ ᴇɴᴅᴇʀᴇᴄᴏ: 127.0.0.1
> ┣ ɪᴅᴀᴅᴇ: ${ageHex}
> ┣ ᴘʀᴏꜰɪꜱꜱᴀᴏ: DΞVΞLØPΞR̟
> ┣ ᴇꜱᴘᴏʀᴛᴇꜱ: 𝒇𝒖𝒕𝒆𝒃𝒐𝒍❟ 𝒃𝒂𝒔𝒒𝒖𝒆𝒕𝒆❟ 𝒃𝒐𝒙𝒆❟ 𝒙𝒂𝒅𝒓𝒆𝒛
> ┣ ʀᴇʟɪɢɪᴀᴏ: ᚜𝐆᚛ 𝗧∴𝗙∴𝗔
> ┣ ᴇꜱᴛᴜᴅᴀɴᴅᴏ/ꜰᴏʀᴍᴀᴅᴏ ᴇᴍ: 𝙁𝙤𝙧𝙢𝙖𝙙𝙤 𝙚𝙢 𝘼𝘿𝙎 𝙚 𝙚𝙨𝙩𝙪𝙙𝙖𝙣𝙙𝙤 𝘾𝙮𝙗𝙚𝙧𝙨𝙚𝙘𝙪𝙧𝙞𝙩𝙮
> ┣ ꜱɪꜱᴛᴇᴍᴀ ᴏᴘᴇʀᴀᴄɪᴏɴᴀʟ ᴘʀᴇꜰᴇʀɪᴅᴏ: (𝘽𝙡𝙖𝙘𝙠) 𝘼𝙧𝙘𝙝 𝙇𝙞𝙣𝙪𝙭
> ┣ ʟɪɴɢᴜᴀɢᴇɴꜱ ᴅᴇ ᴘʀᴏɢʀᴀᴍᴀᴄᴀᴏ: 𝘾#❟ 𝙋𝙮𝙩𝙝𝙤𝙣❟ 𝙅𝙖𝙫𝙖❟ 𝙍𝙪𝙗𝙮❟ 𝙎𝙌𝘓❟ 𝙏𝙮𝙥𝙚𝙨𝙘𝙧𝙞𝙥𝙩❟ 𝙍❟ [...]
> ┣ ʜᴏʙʙɪᴇꜱ: ᴄᴏᴅɪɴɢ & ʜᴀᴄᴋɪɴɢ
> ┣ ꜱᴇʀɪᴇ ꜰᴀᴠᴏʀɪᴛᴀ: 𝑴𝒓. 𝑹𝒐𝒃𝒐𝒕 𝖋
> ┣ ᴍᴜꜱɪᴄᴀ ᴘʀᴇꜰᴇʀɪᴅᴀ: 𝑭𝒆𝒆𝒅 𝒕𝒉𝒆 𝒘𝒐𝒍𝒇 - 𝐵𝑟𝑒𝑎𝑘𝑖𝑛𝑔 𝐵𝑒𝑛𝑗𝑎𝑚𝑖𝑛
> ┣ ᴘᴇᴛꜱ: 1 𝘨𝘢𝘵𝘪𝘯𝘩𝘰 𝘱𝘳𝘦𝘵𝘰
> ┣ ɪɴꜱᴛᴀɢʀᴀᴍ: instagram.com/h.arcangelo
> ┗ ᴡᴇʙꜱɪᴛᴇ: https://arcangelo.net
`

  let profile =`┌──[ Ǥнѳᔕт ]─[~]─[${date}] 
└─ $ harvester -e @${who.split('@')[0] } 
> [!] 404
> /// 𝚊̷𝚗̷𝚘̷𝚗̷𝚢̷𝚖̷𝚘̷𝚞̷𝚜̷
> ʀᴀɴᴋ: ${language === 'en' ? '𝚃𝚑𝚎 𝙰𝚛𝚌𝚑𝚒𝚝𝚎𝚌𝚝' : '𝙾 𝙰𝚛𝚚𝚞𝚒𝚝𝚎𝚝𝚘' }
> ʟᴇᴠᴇʟ: 𝟹̷𝟹̷𝟶̷𝟷̷
> xᴘ: 0̵̺͆͗̎̐͜0̶̰̄̇0̵̦͕̭͕̀̀͂0̵̮̀1̸̢̛̝͖̀̉͠3̴̭̭̳͊̀3̷͚͖͋7̴̖̆̿̊̐4̶̨̈́̒͒̿8̶̛̫̘͑̅̓9̷̲̬̻̙̆̚5̸̗̉1̷͈̫͎̼̂͑̚0̴̥̝̌̏͝
> . . . . . . . . . . . . . . . . .
> ✇ ɴᴏᴅᴇs: ∞	
> 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ: ∞	
> ⧗ ᴇᴛʜᴇʀᴇᴜᴍ: ∞	
> [*] 𝐎𝐒: 𖤂 𝗕𝗟𝝠𝗖𝗞 𝝺𝗥𝗖𝗛
> ‎ 
${profileStatus}
${myProfile}
`
  return conn.sendMessage(m.chat, {text: profile, mentions: [who,global.db.data.users[who]?.parceiro]}, {quoted: fkontak})
}



  let msg =  `
┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ harvester -e @${who.split('@')[0] } 
> ‎ 
| [+] USER_LOG
${usernames ? '> ' + usernames + '\n' : '> ‎ '}
${admcheck ? '> Λᴅᴍɪɴ' : '> ‎ '}
> ʀᴀɴᴋ: ${user.role}
> ʟᴇᴠᴇʟ: ${user.level}
> xᴘ: ${user.exp}
> . . . . . . . . . . . . . . . . .
> ✇ ɴᴏᴅᴇs: ${user.kills} 
> 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ: ${user.money.toFixed(2)}
> ⧗ ᴇᴛʜᴇʀᴇᴜᴍ: ${user.limit}
> ‎ 
${profileStatus}
${profileString}
`
  
  
  await conn.sendMessage(m.chat, {text: msg, mentions: [who,global.db.data.users[who]?.parceiro]}, {quoted: fkontak})
  
  
  
};
handler.help = ['profile', 'perfil'];
handler.tags = ['grupo'];
handler.command = /^(perfil|profile)$/i;
export default handler;
