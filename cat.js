const fs = require('fs');

module.exports = function(files, done) {
  if (!files) {
    done(`-node-shell: cat: requires at least one filename`);
    return;
  }

  let output = '';

  files.split(' ').forEach(file => {
    fs.readFile('./' + file, (err, data) => {
      if (err) {
        done(`-node-shell: no such file: "${file}"`);
        return;
      }

      done(data.toString());
    });
  });
};
