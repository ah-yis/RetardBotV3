const { SlashCommandBuilder, EmbedBuilder, Client, Intents } = require('discord.js');
const axios = require("axios");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with "pong". This is a pointless testing command.'),
	async execute(interaction) {
		const avatarURL = interaction.user.displayAvatarURL({ dynamic: true, size: 512 });
		const botAvatarURL = interaction.client.user.displayAvatarURL({ dynamic: true, size: 512 });
		const botUsername = interaction.client.user.username;
		const replyEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(interaction.commandName)
			//.setURL('change to retardbot site once git pages is set up jackass')
			.setAuthor({ name: `${botUsername}`, iconURL: `${botAvatarURL}`, url: 'https://github.com/ah-yis/retardbot3' })
			.setDescription('pong mf')
			//.setThumbnail(``)
			/*.addFields(
				{ name: 'Regular field title', value: 'Some value here' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
			.setImage('https://i.imgur.com/AfFp7pu.png')*/
			.setTimestamp()
			.setFooter({ text: `${interaction.user.globalName}`, iconURL: `${avatarURL}` });
		await interaction.reply({ embeds: [replyEmbed] });
	},
};
