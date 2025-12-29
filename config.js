const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "onBEDKDR#FHAjkr9brVpvh1eYmpsRKbGP8EUSAlUAz6doU2-Qiw8",
MONGODB: process.env.MONGODB || "mongodb://mongo:VqexEWdiDmpaIHdpvMjUpsYwOmXujCdn@yamabiko.proxy.rlwy.net:42297",
};
