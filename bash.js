const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

const prompt = data => {
  process.stdout.write(data + '\n');
  process.stdout.write('prompt > ');
}

prompt('Welcome to Node Shell');

process.stdin.on('data', data => {
  const entry = data.toString().trim();
  const [cmd, args] = entry.split(' ');

  switch (cmd) {
    case 'pwd':
      pwd(prompt);
      break;

    case 'ls':
      ls(prompt);
      break;

    case 'cat':
      cat(args, prompt);
      break;

    default:
      prompt(`-node-shell: ${cmd}: command not found`);
  }
});
