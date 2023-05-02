const { SlashCommandBuilder } = require('discord.js');
const { stopDayZServer } = require('../../ssh');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stopdayz')
		.setDescription('Stops the DayZ server'),
	async execute(interaction) {
		stopDayZServer();
		await interaction.reply('Dayz stop command recieved');
	},
};
