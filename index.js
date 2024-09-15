const { AoiClient } = require("aoi.js");
const config = require("./config.js")
const fs = require('fs');

const client = new AoiClient(config.Bot);

require("./src/types/events/variavel.js")(client);
require("./src/types/events/status.js")(client);
require("./src/types/functions/antiCrash.js")(client);

// Handler
client.loadCommands("./src/comandos/", true);
for (const file of fs.readdirSync('./src/types/functions').filter(file => file.endsWith('.js'))) {
	require(`./src/types/functions/${file}`)(client);
}
