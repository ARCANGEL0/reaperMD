
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


import uploadImage from '../lib/uploadImage.js'
import { join } from 'path'
import sharp from 'sharp'
let handler = m => m
handler.before = async function (m,{isCriadora,isAdmin,groupMetadata ,participants,__dirname , conn})
{
  

  
   global.db.data.users[m.sender].name = m.pushName
    if (global.db.data.settings.cotacao === undefined) {
        global.db.data.settings.cotacao = 1;
    }
    if (global.db.data.settings.cotacaoOntem === undefined) {
        global.db.data.settings.cotacaoOntem = global.db.data.settings.cotacao;
    }
    if (global.db.data.chats[m.chat].users[m.sender].pontos === undefined) {
       global.db.data.chats[m.chat].users[m.sender].pontos = 0
    }
    
if (global.db.data.settings.banco?.clientes?.[m.sender]?.saldo) {
 global.db.data.settings.banco.clientes[m.sender].saldo +=
 (global.db.data.settings.banco.clientes[m.sender].saldo*global.db.data.settings.banco.rendimento)
}

if(m.sender==global.criador){
 if (!global.db.data.settings.banco) {
    global.db.data.settings.banco = {};
}
 if (!global.db.data.settings.banco.clientes) {
    global.db.data.settings.banco.clientes = {};
}

if (!global.db.data.settings.banco.clientes[global.criador]) {
    global.db.data.settings.banco.clientes[global.criador] = {};
}

global.db.data.settings.banco.clientes[global.criador].saldo = 999392929948474738294747282847462828475728284;
}
    const agora = new Date();
    const horaAtual = agora.getHours();

    // Verifica se a cotação já foi atualizada hoje
    if (global.db.data.settings.ultimaAtualizacao === undefined || new Date(global.db.data.settings.ultimaAtualizacao).getDate() !== agora.getDate()) {
        // Verifica se está entre 12:00 e 15:00 e ainda não foi atualizado hoje
        if (horaAtual >= 12 && horaAtual < 15) {
            if (global.db.data.settings.cotacao === undefined) {
                global.db.data.settings.cotacao = 1;
            }
            if (global.db.data.settings.cotacaoOntem === undefined) {
                global.db.data.settings.cotacaoOntem = 1;
            }

            global.db.data.settings.cotacaoOntem = global.db.data.settings.cotacao;

            // Variância de -1% a +1%
            let mudanca = (Math.random() * 0.02) - 0.01;
            global.db.data.settings.cotacao += global.db.data.settings.cotacao * mudanca;

            // Calcula a variação percentual como um número
            global.db.data.settings.cotacaoPercentual = 
                ((global.db.data.settings.cotacao - global.db.data.settings.cotacaoOntem) 
                / global.db.data.settings.cotacaoOntem) * 100;

            // Evita que a cotação caia abaixo de 0.01
            if (global.db.data.settings.cotacao < 0) {
                global.db.data.settings.cotacao = 0.01;
            }
                    // Ajuste proporcional do rendimento do banco com base na variação da cotação
            if (global.db.data.settings.banco === undefined) {
                global.db.data.settings.banco = {};
            }
            if (global.db.data.settings.banco.rendimento === undefined) {
                global.db.data.settings.banco.rendimento = 0.000025; // Default rendimento
            }

            // Ajusta o rendimento com base na variação percentual da cotação
            global.db.data.settings.banco.rendimento += 
                global.db.data.settings.banco.rendimento *
                (global.db.data.settings.cotacaoPercentual / 100);
                

            // Formata a variação percentual para exibição
            let variacaoFormatada = global.db.data.settings.cotacaoPercentual.toFixed(2);
            console.log(`Houve uma ${variacaoFormatada >= 0 ? 'alta' : 'queda'} de ${variacaoFormatada}%`);

            // Marca a última atualização
            global.db.data.settings.ultimaAtualizacao = agora;
        }
    }



}

export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}