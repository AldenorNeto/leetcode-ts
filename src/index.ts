const input = require("./util/input");
const binaryHeap = require("./binaryHeap");
const binaryTree = require("./binaryTreeAVL");
const logUtil = require("./util/writeLog");
const automatonsNFA = require("./automatons/NFA");
const automatonsDFA1 = require("./automatons/DFA_1");
const automatonsDFA2 = require("./automatons/DFA_2");
const automatonsDFA3 = require("./automatons/DFA_3");
const generateJWT1 = require("./generateJWT/examp1");

// const turingSumTape = require("./turing/sumTape");

async function iniciar(): Promise<void> {
  const { fecharInput } = input;

  fecharInput();
}

iniciar();
