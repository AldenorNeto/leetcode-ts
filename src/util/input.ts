const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const perguntar = (pergunta: string): Promise<string> =>
  new Promise((resolve) => rl.question(pergunta, resolve));

const fecharInput = () => rl.close();

module.exports = { perguntar, fecharInput };
