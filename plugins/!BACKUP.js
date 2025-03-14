


//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────



import * as fs from 'fs'
import yargs from 'yargs'
import { spawn, exec } from 'child_process'
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, usedPrefix,groupMetadata, participants }) {
  

if (typeof global.lastBackup === 'undefined') global.lastBackup = new Date();

const now = new Date();

if (now - global.lastBackup >= 2 * 60 * 60 * 1000) {

  let backupDir = global.backupFolder // folder name 
  let backupRepo = global.backupGithub // repo of backup

  let gitCommand = `cp database.json ../${backupDir}/ && cp code_database.json ../${backupDir}/ && cd ../${backupDir} && git remote add origin ${backupRepo} && git add code_database.json database.json && git commit -m 'AUTOMATED BACKUP' && git push origin master`


exec(gitCommand, (error, stdout, stderr) => {
if (error) {
  console.error(`Error: ${error.message}`);
  return;
}
if (stderr) {
  console.error(`stderr: ${stderr}`);
  return;
}
console.log(`Database saved at repo: ${stdout}`);
console.log('Backup success!.');
})

}


}



 


