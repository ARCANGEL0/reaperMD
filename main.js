
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



import './config.js'
import { createRequire } from 'module'
import path, { join } from 'path'
import {fileURLToPath, pathToFileURL} from 'url'
import { platform } from 'process'
import * as ws from 'ws'
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch } from 'fs'
import yargs from 'yargs'
import { spawn, exec } from 'child_process'
import lodash from 'lodash'
import chalk from 'chalk'
import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'  
import syntaxerror from 'syntax-error'
import { tmpdir } from 'os'
import { format } from 'util'
import P from 'pino'
import pino from 'pino'
import Pino from 'pino'
import { Boom } from '@hapi/boom'
import { makeWASocket, protoType, serialize } from './lib/simple.js'
import {Low, JSONFile} from 'lowdb'
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js'
import store from './lib/store.js'
import readline from 'readline'
import NodeCache from 'node-cache'
const { proto} = (await import('@whiskeysockets/baileys')).default;
const { DisconnectReason, Browsers,useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys')
const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
  return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '')
global.timestamp = { start: new Date }

const __dirname = global.__dirname(import.meta.url);

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');


global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`));

global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) {
return new Promise((resolve) => setInterval(async function() {
if (!global.db.READ) {
clearInterval(this);
resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
}}, 1 * 1000));
}
if (global.db.data !== null) return;
global.db.READ = true;
await global.db.read().catch(console.error);
global.db.READ = null;
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {}),
};
global.db.chain = chain(global.db.data);
};
loadDatabase();

/* ------------------------------------------------*/

global.chatgpt = new Low(new JSONFile(path.join(__dirname, '/db/chatgpt.json')));
global.loadChatgptDB = async function loadChatgptDB() {
if (global.chatgpt.READ) {
return new Promise((resolve) =>
setInterval(async function() {
if (!global.chatgpt.READ) {
clearInterval(this);
resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data );
}}, 1 * 1000));
}
if (global.chatgpt.data !== null) return;
global.chatgpt.READ = true;
await global.chatgpt.read().catch(console.error);
global.chatgpt.READ = null;
global.chatgpt.data = {
users: {},
...(global.chatgpt.data || {}),
};
global.chatgpt.chain = lodash.chain(global.chatgpt.data);
};
loadChatgptDB();

/* ------------------------------------------------*/

global.authFile = `fsocietyData`
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = global.botNumberCode

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

//const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
//const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: '' })
const question = (texto) => {
return new Promise((resolver) => {
rl.question(texto, (respuesta) => {
resolver(respuesta.trim())
}) })
}

let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./${authFile}/creds.json`)) {
do {
let lineM = ' ━━━━━━━━━━━⬣ 𓄿 ⬣━━━━━━━━━━━━'
opcion = await question(`╭${lineM} 
┊ ${chalk.blueBright('╭─┅──┅❖ ')}
┊ ${chalk.blueBright('┊')} ${chalk.blue.bgBlue.bold.cyan('CODIGO DE AUTENTICAÇÃO')}
┊ ${chalk.blueBright('╰┅┅─┅──┅❖ ')}   
┊ ${chalk.blueBright('╭─┅──┅❖ ')}     
┊ ${chalk.blueBright('┊')} ${chalk.green.bgMagenta.bold.yellow('¿CÓMO DESEA CONECTARSE?')}
┊ ${chalk.blueBright('┊')} ${chalk.bold.redBright('⇢  Opcao 1:')} ${chalk.greenBright('Código QR.')}
┊ ${chalk.blueBright('┊')} ${chalk.bold.redBright('⇢  Opcao 2:')} ${chalk.greenBright('Código de 8 digitos.')}
┊ ${chalk.blueBright('╰─┅──┅❖ ')}
┊ ${chalk.blueBright('╭┅┅┅─┅──┅❖ ')}     
┊ ${chalk.blueBright('┊')} ${chalk.italic.magenta('Numerk')}
┊ ${chalk.blueBright('┊')} ${chalk.italic.magenta('Opcao para conexao.')}
┊ ${chalk.blueBright('╰┅┅┅┅─┅──┅❖ ')} 
┊ ${chalk.blueBright('╭┅┅┅─┅──┅❖ ')}    
┊ ${chalk.blueBright('┊')} ${chalk.red.bgRed.bold.green('Dica:')}
┊ ${chalk.blueBright('┊')} ${chalk.italic.cyan('Se usa Termux, Replit, Linux, ou Windows')}
┊ ${chalk.blueBright('┊')} ${chalk.italic.cyan('Use estes comandos para uma execução directa:')}
┊ ${chalk.blueBright('┊')} ${chalk.bold.yellow(`npm run qr ${chalk.italic.magenta('(Inicia com código QR)')}`)}
┊ ${chalk.blueBright('┊')} ${chalk.bold.yellow(`npm run code ${chalk.italic.magenta('(Inicia com código de 8 dígitos)')}`)}
┊ ${chalk.blueBright('┊')} ${chalk.bold.yellow(`npm start ${chalk.italic.magenta('(Inicio predeterminado com opcoes)')}`)}
┊ ${chalk.blueBright('╰┅┅┅┅┅❖')} 
╰${lineM}\n${chalk.bold.magentaBright('༒︎  ')}`)

if (!/^[1-2]$/.test(opcion)) {
console.log(chalk.bold.redBright(`NAO SERAO ACEITES NÚMEROS QUE NÃO SEJAM  ${chalk.bold.greenBright("1")} OU ${chalk.bold.greenBright("2")}, TAMPOUCO LETRAS OU SÍMBOLOS ESPECIAIS.
${chalk.bold.yellowBright("Copie o trecho obscuro e copie em vossa console")}`))
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./${authFile}/creds.json`))
}

  
const connectionOptions = {
  logger: pino({ level: 'silent' }),
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
browser: opcion == '1' ? ['bot-MD', 'Edge', '20.0.04'] : methodCodeQR ? ['bot-MD', 'Edge', '20.0.04'] : ["Ubuntu", "Chrome", "20.0.04"],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
syncFullHistory: false


// logger: pino({ level: 'silent' }),
// printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
// mobile: MethodMobile,
// // browser: ['Chrome (Linux)','',''],
// browser: Browsers.macOS("Safari"),
//     // version
// connectTimeoutMs: 5000,
// keepAliveIntervalMs: 2000,
// emitOwnEvents: true,
// fireInitQueries: true,
// generateHighQualityLinkPreview: false,
// syncFullHistory: true,
// markOnlineOnConnect: true,
// auth: {
// creds: state.creds,
// keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
// },
// getMessage: (clave) => {
// return (store.loadMessage(clave.remoteJid, clave.id))?.message || undefined;
// },
// msgRetryCounterCache,
// msgRetryCounterMap,
// defaultQueryTimeoutMs: undefined,   
// version
}
global.conn = makeWASocket(connectionOptions)

	
if (!fs.existsSync(`./${authFile}/creds.json`)) {

if (opcion === '2' || methodCode) {
//if (fs.existsSync(`./${authFile}/creds.json`)) {
//console.log(chalk.bold.redBright(`PRIMERO BORRE EL ARCHIVO ${chalk.bold.greenBright("creds.json")} QUE SE ENCUENTRA EN LA CARPETA ${chalk.bold.greenBright(authFile)} Y REINICIE.`))
//process.exit()
//}
opcion = '2'
if (!conn.authState.creds.registered) {  
//if (MethodMobile) throw new Error('No se puede usar un código de emparejamiento con la API móvil')

let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.bold.redBright(`Configurar arquivos ${chalk.bold.greenBright("config.js")} Diga-me o codigo do pais, ó pobre alma, ${chalk.bold.yellowBright("Exemplo: +593090909090")}`)))
process.exit(0)
}} else {
while (true) {
addNumber = await question(chalk.bgBlack(chalk.bold.greenBright(`Por favor, diga-me o numero do whatsapp no qual onde minha solene alma sera reencarnada .\n${chalk.bold.yellowBright("Dica: Copie e cole o numero neste console")}\n${chalk.bold.yellowBright("Exemplo: +593090909090")}\n${chalk.bold.magentaBright('---> ')}`)))
addNumber = addNumber.replace(/[^0-9]/g, '')

if (addNumber.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
break 
} else {
console.log(chalk.bold.redBright("Coloque o código de pais."))
}}
rl.close()  
}


setTimeout(async () => {
 
let codeBot = await conn.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
console.log(chalk.bold.white(chalk.bgMagenta(`Codigo de autênticao ༒︎:`)), chalk.bold.white(chalk.white(codeBot)))

  
}, 2000)
}}
if (MethodMobile) {
  
//if (fs.existsSync(`./${authFile}/creds.json`)) {
//console.log(chalk.bold.redBright(`PRIMERO BORRE EL ARCHIVO ${chalk.bold.greenBright("creds.json")} QUE SE ENCUENTRA EN LA CARPETA ${chalk.bold.greenBright(authFile)} Y REINICIE.`))
//process.exit()
//}
opcion = '2'
if (!conn.authState.creds.registered) {  
//if (MethodMobile) throw new Error('No se puede usar un código de emparejamiento con la API móvil')

let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.bold.redBright(`Configurar arquivos ${chalk.bold.greenBright("config.js")} Diga-me o codigo do pais, ó pobre alma, ${chalk.bold.yellowBright("Exemplo: +593090909090")}`)))
process.exit(0)
}} else {
while (true) {
addNumber = await question(chalk.bgBlack(chalk.bold.greenBright(`Por favor, diga-me o numero do whatsapp no qual onde minha solene alma sera reencarnada .\n${chalk.bold.yellowBright("Dica: Copie e cole o numero neste console")}\n${chalk.bold.yellowBright("Exemplo: +593090909090")}\n${chalk.bold.magentaBright('---> ')}`)))
addNumber = addNumber.replace(/[^0-9]/g, '')

if (addNumber.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
break 
} else {
console.log(chalk.bold.redBright("Coloque o código de pais."))
}}
rl.close()  
}


setTimeout(async () => {
let codeBot = await conn.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
console.log(chalk.bold.white(chalk.bgMagenta(`Codigo de autênticao ༒︎:`)), chalk.bold.white(chalk.white(codeBot)))
}, 2000)
}}

	
}

conn.isInit = false
conn.well = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', "robotBOT"], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '2', '-type', 'f', '-delete'])))}, 30 * 1000)}
if (opts['server']) (await import('./server.js')).default(global.conn, PORT)


async function connectionUpdate(update) {  
const {connection, lastDisconnect, isNewLogin} = update


global.stopped = connection
if (isNewLogin) conn.isInit = true
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
await global.reloadHandler(true).catch(console.error)
//console.log(await global.reloadHandler(true).catch(console.error));
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined || methodCodeQR) {
if (opcion == '1' || methodCodeQR) {
console.log(chalk.bold.yellow(langTOGGLE['smsCodigoQR']()))}
}
if (connection == 'open') {
console.log(chalk.bold.greenBright(langTOGGLE['smsConexion']()))}
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
if (reason == 405) {
  console.log(connection)
await fs.unlinkSync("./fsocietyData/" + "creds.json")
return console.log(chalk.bold.redBright("\n[ ❌ ]  Perdão pelo infortúnio mas estou encontrando erros para me emergir, irei começar o reinicio do servidor")) 
process.send('reset')}
if (connection === 'close') {
if (reason === DisconnectReason.badSession) {
console.log(DisconnectReason)
console.log(connection)

console.log(chalk.bold.cyanBright(langTOGGLE['smsConexionOFF']()))
} else if (reason === DisconnectReason.connectionClosed) {
console.log(chalk.bold.magentaBright(langTOGGLE['smsConexioncerrar']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.connectionLost) {
console.log(chalk.bold.blueBright(langTOGGLE['smsConexionperdida']()))
await global.reloadHandler(true).catch(console.error)
console.log('CONEXAO FALHOU MISERAVELMENTE ')
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(chalk.bold.yellowBright(langTOGGLE['smsConexionreem']()))
} else if (reason === DisconnectReason.loggedOut) {
console.log(chalk.bold.redBright(langTOGGLE['smsConexionOFF']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.restartRequired) {
console.log(chalk.bold.cyanBright(langTOGGLE['smsConexionreinicio']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.timedOut) {
console.log(chalk.bold.yellowBright(langTOGGLE['smsConexiontiem']()))
await global.reloadHandler(true).catch(console.error) 
console.log('TIMEOUT👇👇👇👇')
//process.send('reset')
} else {
console.log(chalk.bold.redBright(langTOGGLE['smsConexiondescon'](reason, connection)))
}}
}
process.on('uncaughtException', console.error);
//process.on('uncaughtException', (err) => {
//console.error('Se ha cerrado la conexión:\n', err)
//process.send('reset') })


let isInit = true;
let handler = await import('./handler.js');
global.reloadHandler = async function(restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error);
if (Object.keys(Handler || {}).length) handler = Handler;
} catch (e) {
console.error(e);
}
if (restatConn) {
const oldChats = global.conn.chats;
try {
global.conn.ws.close();
} catch { }
conn.ev.removeAllListeners();
global.conn = makeWASocket(connectionOptions, {chats: oldChats});
isInit = true;
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler);
conn.ev.off('group-participants.update', conn.participantsUpdate);
conn.ev.off('groups.update', conn.groupsUpdate);
conn.ev.off('message.delete', conn.onDelete);
conn.ev.off('call', conn.onCall);
conn.ev.off('connection.update', conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate);
}

//Información para Grupos
conn.welcome = langTOGGLE['smsWelcome']() 
conn.bye = langTOGGLE['smsBye']() 
conn.spromote = langTOGGLE['smsSpromote']() 
conn.sdemote = langTOGGLE['smsSdemote']() 
conn.sDesc = langTOGGLE['smsSdesc']() 
conn.sSubject = langTOGGLE['smsSsubject']() 
conn.sIcon = langTOGGLE['smsSicon']() 
conn.sRevoke = langTOGGLE['smsSrevoke']() 

conn.handler = handler.handler.bind(global.conn);
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
conn.onDelete = handler.deleteUpdate.bind(global.conn);
conn.onCall = handler.callUpdate.bind(global.conn);
conn.connectionUpdate = connectionUpdate.bind(global.conn);
conn.credsUpdate = saveCreds.bind(global.conn, true);



 conn.ev.on('messages.upsert', conn.handler);
conn.ev.on('group-participants.update', conn.participantsUpdate);
conn.ev.on('groups.update', conn.groupsUpdate);
conn.ev.on('message.delete', conn.onDelete);
conn.ev.on('call', conn.onCall);
conn.ev.on('connection.update', conn.connectionUpdate);
conn.ev.on('creds.update', conn.credsUpdate);
isInit = false
return true
}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename));
const module = await import(file);
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(e);
delete global.plugins[filename];
}}}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
const dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(` Atualizado '${filename}' com sucesso  𓄿`)
else {
conn.logger.warn(`Arquivo eliminado ༒︎ : '${filename}'`)
return delete global.plugins[filename];
}
} else conn.logger.info(`NOVOS PLUGINS : '${filename}'`)
const err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true,
});
if (err) conn.logger.error(`Peco perdao pelo infortúnio , mas estou deparando com erros de sintaze, averigue o pobre alma: ༒︎
'${filename}'\n${format(err)}`);
else {
try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`));
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(`Erro com plugins:  '${filename}\n${format(e)}'`);
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
}}}};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
const test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version']),
].map((p) => {
return Promise.race([
new Promise((resolve) => {
p.on('close', (code) => {
resolve(code !== 127);
});
}),
new Promise((resolve) => {
p.on('error', (_) => resolve(false));
})]);
}));
const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find};
Object.freeze(global.support);
}

function clearTmp() {
const tmpDir = join(__dirname, 'tmp')
const filenames = readdirSync(tmpDir)
filenames.forEach(file => {
const filePath = join(tmpDir, file)
unlinkSync(filePath)})

const pdfdir = join(__dirname, 'pdfs')
const filenames2 = readdirSync(pdfdir)
filenames2.forEach(file => {
const filePath2 = join(pdfdir, file)
unlinkSync(filePath2)})

}

function purgeSession() {
  const gitCommand = 'git pull origin master && git add code_database.json && git commit -m "Backup database" && git push origin master';
  
  
  exec(gitCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Database salvo no github: ${stdout}`);
  console.log('Backup de dados feito com sucesso!.');
});

let prekey = []
let directorio = readdirSync("./fsocietyData")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-')
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./fsocietyData/${files}`)
})
} 

function purgeSessionSB() {
try {
const listaDirectorios = readdirSync('./robotBOT/');
let SBprekey = [];
listaDirectorios.forEach(directorio => {
if (statSync(`./robotBOT/${directorio}`).isDirectory()) {
const DSBPreKeys = readdirSync(`./robotBOT/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-')
})
SBprekey = [...SBprekey, ...DSBPreKeys];
DSBPreKeys.forEach(fileInDir => {
if (fileInDir !== 'creds.json') {
unlinkSync(`./robotBOT/${directorio}/${fileInDir}`)
}})
}})
if (SBprekey.length === 0) {
console.log(chalk.bold.green(langTOGGLE.smspurgeSessionSB1()))
} else {
console.log(chalk.bold.cyanBright(langTOGGLE.smspurgeSessionSB2()))
}} catch (err) {
console.log(chalk.bold.red(langTOGGLE.smspurgeSessionSB3() + err))
}}

function purgeOldFiles() {
const directories = ['./fsocietyData/', './robotBOT/']
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
if (file !== 'creds.json') {
const filePath = path.join(dir, file);
unlinkSync(filePath, err => {
if (err) {
console.log(chalk.bold.red(`${langTOGGLE.smspurgeOldFiles3()} ${file} ${langTOGGLE.smspurgeOldFiles4()}` + err))
} else {
console.log(chalk.bold.green(`${langTOGGLE.smspurgeOldFiles1()} ${file} ${langTOGGLE.smspurgeOldFiles2()}`))
} }) }
}) }) }) }

setInterval(async () => {
await clearTmp()
console.log(chalk.bold.cyanBright(langTOGGLE.smsClearTmp()))}, 1000 * 60 * 4) // 4 min 

setInterval(async () => {
await purgeSession()
console.log(chalk.bold.cyanBright(langTOGGLE.smspurgeSession()))}, 1000 * 60 * 10) // 10 min

setInterval(async () => {
await purgeSessionSB()}, 1000 * 60 * 10)

setInterval(async () => {
await purgeOldFiles()
console.log(chalk.bold.cyanBright(langTOGGLE.smspurgeOldFiles()))}, 1000 * 60 * 10)

_quickTest().then(() => conn.logger.info(chalk.bold(langTOGGLE['smsCargando']().trim()))).catch(console.error)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(langTOGGLE['smsMainBot']().trim()))
import(`${file}?update=${Date.now()}`)
})