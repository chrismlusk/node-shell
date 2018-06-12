const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();
	const regex = /^cat\b/g;

	if(cmd === 'pwd') {
		// console.log(pwd);
		pwd();
	}
	else if(cmd === 'ls') {
		ls();
	}
	else if(cmd.match(regex)) {
		cat(cmd);
	}
});