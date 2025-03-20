
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts'
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author } = require(join(__dirname, './package.json'))
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
 
say('R.E.A.P.E.R\n\nPROJECT', {
font: 'tiny',
align: 'left',
colors: ['red', 'white']  
})

say(`Creator: Henry Arcangelo 
Github: ARCANGEL0`, {
font: 'console',
align: 'left',
colors: ['white', 'white']
  
})

say(`Phone: +351927285125
Instagram: @h.arcangelo\n\n\n`, {
font: 'console',
align: 'left',
colors: ['white', 'white']})

let isRunning = false
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
const args = [join(__dirname, file), ...process.argv.slice(2)]

setupMaster({
exec: args[0],
args: args.slice(1)})
const p = fork()
p.on('message', (data) => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}
})
p.on('exit', (_, code) => {
isRunning = false;
console.error('⚠️ ERROR ⚠️ >> ', code)
p.process.kill()
isRunning = false
start.apply(this, arguments)
if (process.env.pm_id) {
process.exit(1)
} else {
process.exit()
}})
const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test']) {
if (!rl.listenerCount()) {
rl.on('line', (line) => {
p.emit('message', line.trim())
})
}}}
start('main.js')
