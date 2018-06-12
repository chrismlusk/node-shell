const fs = require('fs');

module.exports = function(files) {
	let filesArr = files.split(" ").slice(1);
	filesArr.forEach( filename => {
		fs.readFile('./' + filename, (err, data) => {
			if(err) {
				throw err;
			}
			process.stdout.write(data);
		});
	});
	process.stdout.write("\nprompt > ");
};