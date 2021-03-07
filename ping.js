module.exports = {
    name: 'ping',
    aliases: [],
    permissions: [],
    description: 'Sends the bots latency',
    async execute(client, message) {
        const msg = await message.channel.send(`Calculating ping. . .`);
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit(`:ping_pong: Pong!\nDiscord API Latency: \`${ping}ms!\``);
    }
}