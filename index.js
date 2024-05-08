const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildInvites], partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction, Partials.ThreadMember, Partials.GuildScheduledEvent] });
bot.setMaxListeners(70)
bot.config = require("./config.json")

bot.slashcommand = new Collection();

require('./handlers/loadslashcommand.js')(bot);
require('./handlers/event.js')(bot);
bot.login(bot.config.token)
