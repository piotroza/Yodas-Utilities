const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  aliases: [],
  permissions: ["BAN_MEMBERS"],
  description: "Bans a user",
  async execute(client, message, args) {
    const user = message.mentions.members.first();
    const reason = args.slice(1).join(" ") || `no reason was provided`;

    if (!user) return message.channel.send(`Please provide a user to Ban!`);
    if (user.id === message.author.id)
      return message.reply("You can't ban yourself!");
    if (user.id === client.user.id)
      return message.reply(
        "Please don't use the bot to ban itself!"
      );
    if (!user.bannable)
      return message.channel.send(`${user.user.username} cannot be banned!`);

    user.ban({
      reason: reason,
    });

    user.send(
      `You have been banned from ${message.guild.name}, ${message.author.username} has banned you because ${reason}.`
    );
    message.channel.send(
      `${user.user.username} has been banned - Reason: ${reason}`
    );
  },
};