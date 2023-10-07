const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		// List of all possible statuses
		const statusList = ["PAYDAY 3","Sonic's Schoolhouse","Breaking Bad Tycoon","RPCS3"];

		// Function changes bot's activity by randomly picking it from above table
		function setRandomActivity() {
			const randomMess = statusList[Math.floor(Math.random() * statusList.length)];
			client.user.setActivity(randomMess);
			console.log(`Activity changed to "${randomMess}"`);
		}

		// Logs this in console when the bot is up
		console.log(`RetardBot 3 - logged in as "${client.user.tag}"`);

		
		setRandomActivity(); // Runs that function from earlier
		setInterval(setRandomActivity, 10 * 60 * 1000); // Runs the above line every 10 minutes. Forever.
	},
};
