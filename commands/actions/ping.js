const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mastermind')
		.setDescription('Replies with "For Success!"'),
	async execute(interaction) {
		await interaction.reply('For Success!');
	},
};