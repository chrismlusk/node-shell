const fs = require('fs');

module.exports = function() {
	fs.readdir('./', 'utf8', (err, files) => {
		if(err) {
			throw err;
		}
		else {
			let nonHiddenFiles = files.filter(file => {
				if(file[0] !== '.') {
					return file;
				}
			});
			process.stdout.write(nonHiddenFiles.join('\n'));
			process.stdout.write("\nprompt > ");
		}
	})
}