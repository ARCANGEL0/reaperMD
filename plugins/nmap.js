
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';

const handler  = async (m, { conn, command, text,args, usedPrefix, DevMode }) => {
  
  
  if(!text){
    return m.reply(`𝙴𝚍𝚐𝚊𝚛𝙽𝙴𝚃 𝚟𝟹
    
    🌒 *_MENU DE AJUDA_*
 Uso: nmap [Tipo(s) de Escaneamento] [Opções] {especificação de alvo}
    
*〘〙ESPECIFICAÇÃO DE ALVO:*
— Pode passar nomes de host, endereços IP, redes, etc. Ex: scanme.nmap.org, microsoft.com/24, 192.168.0.1; 10.0.0-255.1-254
*-iL <inputfilename>:* Entrada de lista de hosts/redes
*-iR <num hosts>:* Escolher alvos aleatórios
*--exclude <host1[,host2][,host3],...>*: Excluir hosts/redes
--excludefile <exclude_file>: Excluir lista de um arquivo

*〘〙DESCOBERTA DE HOSTS:*
*-sL:* Listar alvos a serem escaneados
*-sn:* Desativar escaneamento de portas
*-Pn: Pular descoberta de host-PS/PA/PU/PY[portlist]: Descoberta TCP SYN/ACK, UDP ou SCTP para portas especificadas
*-PE/PP/PM:* Probes de descoberta de pedido ICMP echo, timestamp e netmask
*-PO[protocol list]:* Ping de Protocolo IP
*-n/-R:* Nunca resolver DNS/Sempre resolver [padrão: às vezes]
*--dns-servers <serv1[,serv2],...>:* Especificar servidores DNS personalizados
*--system-dns:* Usar resolvedor DNS do sistema
*--traceroute:* Traçar caminho de hops para cada host

*〘〙TÉCNICAS DE ESCANEAMENTO:*
*-sS/sT/sA/sW/sM:* Escaneamentos TCP SYN/Connect()/ACK/Window/Maimon
*-sU:* Escaneamento UDP
*-sN/sF/sX:* Escaneamentos TCP Null, FIN e Xmas
*--scanflags <flags>:* Personalizar flags de escaneamento TCP
*-sI <zombie host[:probeport]>:* Escaneamento ocioso
*-sY/sZ:* Escaneamentos SCTP INIT/COOKIE-ECHO
*-sO:* Escaneamento de protocolo IP
*-b <FTP relay host>:* Escaneamento de bounce FTP

*〘〙ESPECIFICAÇÃO DE PORTA E ORDEM DE ESCANEAMENTO:*
*-p <port ranges>:* Escanear apenas as portas especificadasEx: -p22; -p1-65535; -p U:53,111,137,T:21-25,80,139,8080,S:9
*--exclude-ports <port ranges>:* Excluir as portas especificadas do escaneamento
*-F:* Modo rápido - Escanear menos portas que o padrão
*-r:* Escanear portas consecutivamente - não aleatorizar
*--top-ports <number>:* Escanear <número> de portas mais comuns
*--port-ratio <ratio>:* Escanear portas mais comuns que DETECÇÃO DE SERVIÇO/VERSÃO:
*-sV:* Probar portas abertas para determinar serviço/versão
*--version-intensity <level>:* Configurar de 0 (leve) a 9 (tentar todas as probes)
*--version-light:* Limitar a probes mais prováveis (intensidade 2)
*--version-all:* Tentar todas as probes (intensidade 9)
*--version-trace:* Mostrar atividade detalhada de escaneamento de versão (para depuração)ESCANEAMENTO DE SCRIPT:
*-sC:* Equivalente a --script=default--script=<Lua scripts>: Lista separada por vírgulas de diretórios, arquivos de script ou categorias de script
*--script-args=<n1=v1,[n2=v2,...]>:* Fornecer argumentos para scripts
*--script-args-file=filename:* Fornecer argumentos de script NSE em um arquivo
*--script-trace:* Mostrar todos os dados enviados e recebidos
*--script-updatedb:* Atualizar banco de dados de scripts
*--script-help=<Lua scripts>:* Mostrar ajuda sobre scriptsDETECÇÃO DE SO:
*-O:* Habilitar detecção de SO
*--osscan-limit:* Limitar detecção de SO a alvos promissores
*--osscan-guess:* Adivinhar SO mais agressivamente

*〘〙TEMPO E DESEMPENHO:*
*-T<0-5>:* Configurar modelo de tempo (maior é mais rápido)
*--min-hostgroup/max-hostgroup <size>:* Tamanhos de grupo de escaneamento de hosts paralelos
*--min-parallelism/max-parallelism <numprobes>:* Paralelização de probes
*--min-rtt-timeout/max-rtt-timeout/initial-rtt-timeout <time>:* Especificar tempo de round trip de probe
*--max-retries <tries>:* Limitar número de retransmissões de probes de escaneamento de portas
*--host-timeout <time>:* Desistir do alvo após esse tempo
*--scan-delay/--max-scan-delay <time>:* Ajustar atraso entre probes
*--min-rate <number>:* Enviar pacotes não mais lento que <número> por segundo
*--max-rate <number>:* Enviar pacotes não mais rápido que <número> por segundo

*〘〙EVASÃO DE FIREWALL/IDS E SPOOFING:*
*-f; --mtu <val>:* Fragmentar pacotes (opcionalmente com MTU especificado)
*-D <decoy1,decoy2[,ME],...>:* Encobrir escaneamento com iscas
*-S <IP_Address>:* Falsificar endereço de origem-e <iface>: Usar interface especificada
*-g/--source-port <portnum>:* Usar número de porta especificado
*--proxies <url1,[url2],...>:* Relé de conexões através de proxies HTTP/SOCKS4
*--data <hex string>:* Anexar payload personalizado aos pacotes enviados
*--data-string <string>:* Anexar string ASCII personalizada aos pacotes enviados
*--data-length <num>:* Anexar dados aleatórios aos pacotes enviados
*--ip-options <options>:* Enviar pacotes com opções IP especificadas
*--ttl <val>:* Configurar campo time-to-live do IP
*--spoof-mac <mac address/prefix/vendor name>:* Falsificar endereço MAC
*--badsum:* Enviar pacotes com checksum TCP/UDP/SCTP falso

*〘〙SAÍDA:*
*-oN/-oX/-oS/-oG <file>:* Saída do escaneamento em formato normal, XML, script kiddie, e Grepable, respectivamente
*-oA <basename>:* Saída nos três formatos principais de uma vez
*-v: Aumentar nível de verbosidade (use -vv ou mais para maior efeito)*
*-d:* Aumentar nível de depuração (use -dd ou mais para maior efeito)
*--reason:* Mostrar razão de um estado de porta particular
*--open:* Mostrar apenas portas abertas (ou possivelmente abertas)
*--packet-trace:* Mostrar todos os pacotes enviados e recebidos
*--iflist:* Mostrar interfaces de host e rotas (para depuração)
*--append-output:* Anexar em vez de sobrescrever arquivos de saída especificados
*--resume <filename>:* Retomar escaneamento abortado
*--stylesheet <path/URL>:* Folha de estilo XSL para transformar saída XML em HTML
*--webxml:* Referenciar folha de estilo do Nmap.Org para XML mais portátil
*--no-stylesheet:* Prevenir associação de folha de estilo XSL com saída XMLDIVERSOS:
*-6:* Habilitar escaneamento IPv6-A: Habilitar detecção de SO, detecção de versão, escaneamento de script e traceroute
*--datadir <dirname>:* Especificar localização de arquivos de dados personalizados do Nmap
*--send-eth/--send-ip:* Enviar usando quadros ethernet brutos ou pacotes IP
*--privileged:* Assumir que o usuário tem privilégios completos
*--unprivileged:* Assumir que o usuário não tem privilégios de soquetes brutos
*-V:* Mostrar número da versão
*-h:* Mostrar esta página de resumo de ajuda
━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━`)
  }
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
// await delay(1000 * 2);
await conn.sendMessage(m.chat, {text: ` 👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■□□□□□□□□] 20%`, edit: key});



const apiUrl = 'http://127.0.0.1:8330/nmap';

const scanNetwork = async (ip, nmapArgs) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip, nmap_args: nmapArgs }),
        });
        

        if (!response.ok) {
            console.log(`Error: ${response.statusText}`);
        }
await conn.sendMessage(m.chat, {text: `👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■■■■■■■□□] 80%`, edit: key});
        const responseData = await response.json();
        console.log('Scan results:', responseData.output);
await conn.sendMessage(m.chat, {text: `👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■■■■■■■■■] 100%`, edit: key});
        m.reply(`_𝙴𝚍𝚐𝚊𝚛𝙽𝙴𝚃 𝚟𝟹_
      🌒 Resultados do escaneamento: 
      
     ${ responseData.output} `)
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Parse bot command
try{
    
await conn.sendMessage(m.chat, {text: `👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■■■■□□□□□] 50%`, edit: key});
    const ip = args[0]
    console.log(ip)
    const nmapArgs = args.slice(1);
    scanNetwork(ip, nmapArgs);

}
catch (e){
  console.log(e)
  await conn.sendMessage(m.chat, {text: `𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌
[■■■■■■■■■■] 100%`, edit: key});
}
// Example usage: .scan 127.0.0.1 -sS -A



}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.level = 44
handler.command = ['nmap']

export default handler

/*let MessageType =  (await import(global.baileys)).default
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let name = await conn.getName(m.sender)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

//------- Nombre
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`
  let insta = `https://www.instagram.com/gata_dios`
  let teksnomor = `
• @${wm.split`@`[0]} •
------- ${wm} -------
`
conn.reply(m.chat, 'Mario.js', fkontak,  m)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let teksbio = `𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 💖🐈
*Wa.me/573136855110*

𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 💖🐈
*wa.me/593993684821*
*---------------------*

*CENTER ByteSec*
*centerByteSec@gmail.com*

𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
*${asistencia}*`
  let teks = ' '
const sections = [
   {
	title: `PROPIETARIO/OWNER`,
	rows: [
	    {title: "📱 • NOMBRE", rowId: ".owner nombre"},
	{title: "🙌 • NUMERO", rowId: ".owner bio"},
	{title: "🌐 • CUENTAS OFICIALES", rowId: ".cuentasgb"},
	{title: "😸 • GRUPOS", rowId: ".grupos"},
	{title: "🌎 • SCRIPT", rowId: ".sc"},
	]
    },{
	title: `–––––––·• APOYA AL BOT –––––––·•`,
	rows: [
	    {title: "💹 • DONAS", rowId: ".paypal"},
	{title: "🤖 • INSTALARBOT", rowId: ".instalarbot"},
	{title: "🌟 • PREMIUM", rowId: ".pasepremium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `╭━━━✦ *OWNER ✦━━━━⬣
┃დ HOLA 👋 ${name}
┃≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┃${wm}
╰━━━━━✦ *${vs}* ✦━━━━⬣`,
  buttonText: "HAGA CLICK AQUI",
  sections
}

  try {
    if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nombre':
          await conn.reply(m.chat, `𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝘽𝙊𝙏 : ${gt} 🐈`, fkontak, m)
         // conn.reply(m.chat, "Nombre del bot : ByteSec-MD 🐈", m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
             await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', teksbio, fkontak)
         // conn.sendButton(m.chat, teksbio, fkontak, pp, [`☘️ 𝗠 𝗘 𝗡 𝗨`, `.menu`], m)
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return  await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', teksbio, fkontak)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler*/
