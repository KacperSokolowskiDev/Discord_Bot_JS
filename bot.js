require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

client.on("ready", () => {
  console.log("Bot is ready to go !");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages!");
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
  if (msg.content === "Hello there") {
    msg.reply("General Kenobi");
  }
  if (msg.content == "Smile for me") {
    msg.react("😊");
  }
});

function modUser(member) {
  member.roles.add("835174026497753120");
}

client.login(process.env.BOT_TOKEN);
