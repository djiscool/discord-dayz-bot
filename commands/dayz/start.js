const { SlashCommandBuilder } = require('discord.js');
const { startDayZServer } = require('../../ssh');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('startdayz')
		.setDescription('Starts the DayZ server'),
	async execute(interaction) {
		startDayZServer();
		await interaction.reply('DayZ start command recieved');
	},
};
