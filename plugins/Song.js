const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const fg = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
    
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("Please give me youtube song URL or Name...!")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

  let desc = `
  ✨ *YOUR BOT SONG DOWNLOADER* ✨

  Title: ${data.title}
  
  Description: ${data.description}
  
  Time: ${data.timestamp}
  
  Ago: ${data.ago}
  
  Views: ${data.views}


  >Made By Binuka
  `
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

let down = await fg.yta(url)
let downloadUrl = down.dl_url

await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
