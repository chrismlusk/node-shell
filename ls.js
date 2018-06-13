const fs = require('fs');

module.exports = done => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) done(err.stack);

    const output = files.filter(file => file[0] !== '.');
    done(output.join('\n'));
  });
};
