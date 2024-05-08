const Discord = require("discord.js")

module.exports = {
    name: 'poll',
    description: 'Faire un sondage.',
    permission: "Aucune",
    dm: false,
    options: [
        {
          type: "string",
          name: "question",
          description: "La question du sondage.",
          required: true,
          autocomplete: false,
        },
      ],
    async run(bot, message, args) {
        const poll = {
            question: {
                text: args.getString("question"),
            },
            answers: [
                {
                    text: 'Oui',
                    emoji: '✅',
                },
                {
                    text: 'Non',
                    emoji: '❌',
                },
            ],
            layoutType: Discord.PollLayoutType.Default,
        };
        
        message.reply({ poll: poll });
    }
}