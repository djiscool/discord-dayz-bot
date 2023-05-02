require('dotenv').config();
const { NodeSSH } = require('node-ssh');

const ssh = new NodeSSH();

const startDayZServer = () => {
	ssh
		.connect({
			host: process.env.SSH_host,
			username: process.env.SSH_user,
			privateKey: process.env.SSH_privatekey,
			passphrase: process.env.SSH_passphrase,
		})
		.then(() => {
			ssh.execCommand('docker start DayZ', { cwd: '/root' }).then((result) => {
				console.log('STDOUT: ' + result.stdout);
				console.log('STDERR: ' + result.stderr);
			});
		});
};

const stopDayZServer = () => {
	ssh
		.connect({
			host: process.env.SSH_host,
			username: process.env.SSH_user,
			privateKey: process.env.SSH_privatekey,
			passphrase: process.env.SSH_passphrase,
		})
		.then(() => {
			ssh.execCommand('docker stop DayZ', { cwd: '/root' }).then((result) => {
				console.log('STDOUT: ' + result.stdout);
				console.log('STDERR: ' + result.stderr);
			});
		});
};


module.exports = { startDayZServer, stopDayZServer };