
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//CREADO POR @gata_diosimport translate from '@vitalets/google-translate-api'
import { createCanvas, loadImage } from 'canvas'
// Obter a URL do gráfico
  
    
    
    
    import axios from 'axios';
import translate from '@vitalets/google-translate-api' 
import CoinGecko from 'coingecko-api'
 import fetch from 'node-fetch'
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';



import moment from 'moment';
import fs from 'fs'

import { join } from 'path'; 
import lunr from 'lunr';
import ChartJS from 'chart.js';
const { Chart, registerables } = ChartJS;
import 'chartjs-adapter-moment';

// Registra todos os controladores, elementos, escalas e plugins do Chart.js


let handler = async (m, { conn, args,text, usedPrefix, command,__dirname}) => {
  
  

// Function to fetch all cryptocurrencies from CoinGecko
const fetchAllCryptocurrencies = async () => {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets');
    return response.data.data.map(coin => coin.id.toLowerCase());
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    return [];
  }
};


// Function to score each cryptocurrency based on the user's input
const scoreMatches = (input, cryptocurrencies) => {
  return cryptocurrencies.map(coin => {
    const lowerCoin = coin.toLowerCase();
    let score = 0;
    for (let i = 0; i < Math.min(input.length, coin.length); i++) {
      if (input[i] === lowerCoin[i]) {
        score++;
      } else {
        break; // Stop scoring if characters don't match
      }
    }
    return { coin, score };
  });
};

// Function to find the top 5 closest matches to the user's input
const findTopMatches = (input, cryptocurrencies) => {
  const scoredMatches = scoreMatches(input, cryptocurrencies);
  return scoredMatches
    .sort((a, b) => b.score - a.score) // Sort by score
    .slice(0, 5) // Take top 5 matches
    .map(match => match.coin); // Return only the coin names
};

// Example usage
const execsug = async () => {
  const cryptocurrencies = await fetchAllCryptocurrencies();
  
  const topMatches = findTopMatches(text, cryptocurrencies);
  return m.reply(`╭━━━━━━━━━⬣
_𝗖𝗿𝘆𝗽𝘁𝗼 𝗻𝗮𝗼 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮𝗱𝗮_

𝙽ã𝚘 𝚚𝚞𝚒𝚜 𝚍𝚒𝚣𝚎𝚛..?:
───────────────────────────
⏣ ${topMatches.join('\n⏣ ')}

╰━━━━━━━━━━━━━━━━━━⬣`);
};
  

 if (!text) throw `╭━━━━━━━━━⬣
┃
┃ 🪙 𝑫𝒊𝒈𝒂-𝒎𝒆 𝒒𝒖𝒂𝒍 𝒄𝒓𝒊𝒑𝒕𝒐𝒎𝒐𝒆𝒅𝒂 𝒅𝒆𝒔𝒆𝒋𝒂 𝒅𝒆𝒔𝒑𝒆𝒓𝒕𝒂𝒓 𝒔𝒆𝒖 𝒄𝒐𝒏𝒉𝒆𝒄𝒊𝒎𝒆𝒏𝒕𝒐 𝒆 𝒊𝒏𝒗𝒐𝒄𝒂𝒓 𝒂𝒔 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒑𝒓𝒆𝒕𝒆𝒏𝒅𝒊𝒅𝒂𝒔
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} bitcoin*
┃ *${usedPrefix + command} Ethereum*
┃ *${usedPrefix + command} pepe*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`

// Registra todos os elementos necessários do Chart.js
// Chart.register(...registerables);

// Função para buscar os dados de preço do Bitcoin dos últimos 7 dias
async function fetchBitcoinPrices() {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${args[0].toLowerCase()}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: '30',
        interval: 'daily'
      }
    });
    return response.data.prices;
  } catch (error) {
    console.error('Erro ao buscar os dados da criptomoeda:', error)
    m.react("❌")
  
    return 'erro'
  }
}

// Função para criar o gráfico
async function createChart(pricesData) {
  
  const labels = pricesData.map(price => moment(price[0]).format('DD/MM'));
  const data = pricesData.map(price => price[1]);

  const width = 800; // Largura do gráfico
  const height = 400; // Altura do gráfico
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const configuration = {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: `Preço do ${args[0].toLowerCase()}`,
        data,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      scales: {
        x: {
          grid: {
            display: true,
            color: 'rgba(200, 200, 200, 0.75)'
          }
        },
        y: {
          grid: {
            display: true,
            color: 'rgba(200, 200, 200, 0.75)'
          }
        }
      },
      plugins: {
        legend: {
          display: true
        }
      }
    }
  };

  // Desenha o gráfico no canvas
  new Chart(ctx, configuration);

  // Salva o gráfico como imagem PNG
  const buffer = canvas.toBuffer('image/png'); 
  
  
  let gunName = getRandom('.png'); 
    let filenameGun = join(__dirname, '../tmp/' + gunName);
  fs.writeFileSync(filenameGun, buffer);
  // Salvar a imagem resultante
  
    
  return filenameGun
}
  const pricc = await fetchBitcoinPrices();
if(pricc=='erro'){
    execsug();
  return 
}
let chhrt = await createChart(pricc);

// Importações usando a sintaxe ESM

function formatTimestamp(isoTimestamp) {
  // Create a date object from the ISO 8601 timestamp
  const date = new Date(isoTimestamp);

  // Format the date and time
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short', timeZone: 'UTC' });
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  // Extract the GMT offset from the ISO timestamp
  const gmtOffset = isoTimestamp.slice(-6);
  const formattedDate = `${day} ${month}, ${year}`;
  const formattedTime = `${hours}:${minutes}`;

  // Return the formatted date and time with the GMT offset
  return `${formattedDate} | ${formattedTime} GMT${gmtOffset}`;
}





// Função para formatar números como moeda
function formatCurrency(value) {
  // Determine the number of decimal places
  const decimalPlaces = value < 1 ? value.toString().split('.')[1].length : 2;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  }).format(value);
}


// Função para formatar números como porcentagem
function formatPercentage(value) {
  const sign = value >= 0 ? '📈 +' : '📉 ';
  return `${sign}${value.toFixed(2)}%`;
}



// Função para gerar a URL do gráfico QuickChart


// Função para obter dados da criptomoeda e gerar o gráfico
async function getCryptoData(crypto) {
  try {
    // Obter dados da criptomoeda
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}`, {
      params: {
        localization: 'true',
        tickers: 'true',
        market_data: 'true',
        community_data: 'true',
        developer_data: 'true',
        sparkline: 'true'
      }
    });
    const data = response.data
let descp = await translate(`${data.description.en}`, { to: "pt", autoCorrect: true })
    
    const financialInfo = {
      current_price: data.market_data.current_price.usd,
      roi: data.market_data.roi ? data.market_data.roi.percentage : 'N/A',
      price_change_percentage_10m: 'N/A', // This specific data is not provided by CoinGecko API
      price_change_percentage_1h: data.market_data.price_change_percentage_1h_in_currency.usd,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      price_change_percentage_7d: data.market_data.price_change_percentage_7d,
      price_change_percentage_30d: data.market_data.price_change_percentage_30d,
         price_change_percentage_1y: data.market_data.price_change_percentage_1y,
         marketcap: data.market_data.market_cap.usd,
         rank: data.market_cap_rank,
         transact: data.market_data.circulating_supply,
         total: data.market_data.total_supply,
       lasttrade: formatTimestamp(data.tickers[0].timestamp )

    };
    console.log("----❌")
    console.log(data.circulating_supply)
    console.log(data.market_cap)
    const curiousInfo = {
      website: data.links.homepage[0],
      genesis_date: data.genesis_date,
      block_time_in_minutes: data.block_time_in_minutes,
      hashing_algorithm: data.hashing_algorithm,
      categories: data.categories,
      description: descp.text
    };
    

    // Preparar os dados para o gráfico
    const chartData = {
      labels: Object.keys(data.market_data.price_change_percentage_24h_in_currency),
      values: Object.values(data.market_data.price_change_percentage_24h_in_currency)
    };
let categorias =''

curiousInfo.categories.forEach(categ =>{
 categorias += `\n𓆩 ${categ}`
})
    

console.log("❌")
let formattedData = `𒐫 ${data.name} 𒐫
    𝙸𝙳: ${data.symbol.toUpperCase()}

𝗣𝗿𝗲𝗰𝗼 𝗮𝘁𝘂𝗮𝗹: ${formatCurrency(financialInfo.current_price)}
𝗥𝗢𝗜: ${financialInfo.roi == 'N/A' ? 'Sem dados' : '  ' + formatPercentage(financialInfo.roi)}
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝘂𝗮𝗹 :ᵁˡᵗⁱᵐᵃ ʰᵒʳᵃ:   ${formatPercentage(financialInfo.price_change_percentage_1h)}
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝘂𝗮𝗹 ᵁˡᵗⁱᵐᵃˢ ²⁴ ʰᵒʳᵃˢ:    ${formatPercentage(financialInfo.price_change_percentage_24h)}
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝘂𝗮𝗹 ᵁˡᵗⁱᵐᵒˢ ⁷ ᵈⁱᵃˢ :    ${formatPercentage(financialInfo.price_change_percentage_7d)}
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝘂𝗮𝗹 ᵁˡᵗⁱᵐᵒˢ ³⁰ ᵈⁱᵃˢ:    ${formatPercentage(financialInfo.price_change_percentage_30d)}
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝘂𝗮𝗹 ᵁˡᵗⁱᵐᵒ ᵃⁿᵒ:    ${formatPercentage(financialInfo.price_change_percentage_1y)}

𝗥𝗮𝗻𝗸 𝗻𝗼 𝗺𝗲𝗿𝗰𝗮𝗱𝗼: #${financialInfo.rank}
𝗖𝗮𝗽𝗶𝘁𝗮𝗹𝗶𝘇𝗮𝗰𝗮𝗼: ${formatCurrency(financialInfo.marketcap)}
𝗩𝗼𝗹𝘂𝗺𝗲: ${financialInfo.total}
𝗤𝘂𝗮𝗻𝘁𝗶𝗱𝗮𝗱𝗲 𝗲𝗺 𝗰𝗶𝗿𝗰𝘂𝗹𝗮𝗰𝗮𝗼: ${financialInfo.transact}
𝗨𝗹𝘁𝗶𝗺𝗮 𝘁𝗿𝗮𝗻𝘀𝗮𝗰𝗮𝗼: ${financialInfo.lasttrade}

*ཀ 𝙸𝚗𝚏𝚘*
Website: ${curiousInfo.website}
Block
Data Genesis: ${curiousInfo.genesis_date}
Tempo Block : ${curiousInfo.block_time_in_minutes} minutos
Algoritmo hashing: ${curiousInfo.hashing_algorithm}
Categorias: ${categorias}\n
Descrição: ${curiousInfo.description}

`;


    // Formatar os dados para exibição
    

    // Retornar os dados formatados e a URL do gráfico
    return { formattedData };
  } catch (error) {
    console.error(error);
    return { error: 'Não foi possível obter os dados da criptomoeda.' };
  }
}

// Exemplo de uso
getCryptoData(args[0].toLowerCase()).then(result => {
  if (result.formattedData && chhrt) {
    
    conn.sendFile(m.chat, chhrt, 'image.png', result.formattedData, m);
    console.log('URL do Gráfico:', result.chartUrl);
  }
});





  
  
  




}
handler.level = 28
handler.command = ['crypto', 'bolsa', 'mercado']
handler.owner = false
export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}