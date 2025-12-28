const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Your Session ID",
ALIVE_MSG: process.env.ALIVE_MSG || "Your Alive Msg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/30vkzb.png",
};
