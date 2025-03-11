


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

    const backupDir = '/root/drive/backups/';
    const gitBackup = spawn('sh', ['-c', `cp database.json ${backupDir}; cd ${backupDir}; git add . && git commit -m "ReaperMD backup" && git push -f origin master`], { shell: true });

    gitBackup.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    gitBackup.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    gitBackup.on('close', (code) => {
        if (code === 0) {
            console.log(`[${now.toISOString()}] Backup completed.`);
            global.lastBackup = now;
        } else {
            console.error(`Backup process exited with code ${code}`);
        }
    });
}

}



 


