/*
  Simulates a Turing Machine that adds two numbers represented in unary notation.
  The input consists of sequences of '1's separated by a single '0' on the tape.
  The machine removes the separator and merges the two blocks of '1's, producing the sum.

  Examples:
  Input: ['1', '0', '1', '_', '_', '_', '_']     → Output: "11____"      (1 + 1 = 2)
  Input: ['1', '1', '1', '0', '1', '1', '_']     → Output: "11111__"     (3 + 2 = 5)
*/

function machineStep(config: { tape: string[]; head: number; state: string }) {
  const { tape, head, state } = config;
  const symbol = tape[head] || "_";

  if (state === "find0") {
    if (symbol === "1") {
      return { tape, head: head + 1, state: "find0" };
    } else if (symbol === "0") {
      return { tape, head, state: "shift" };
    } else {
      return { tape, head, state: "halt" };
    }
  }

  if (state === "shift") {
    const nextSymbol = tape[head + 1] || "_";
    if (nextSymbol === "_") {
      const newTape = tape.slice();
      newTape[head] = "_";
      return { tape: newTape, head, state: "halt" };
    } else {
      const newTape = tape.slice();
      newTape[head] = nextSymbol;
      return { tape: newTape, head: head + 1, state: "shift" };
    }
  }

  return config;
}

function runMachine(initialTape: string[]) {
  let config = { tape: initialTape, head: 0, state: "find0" };
  while (config.state !== "halt") {
    config = machineStep(config);
  }
  return config;
}

const finalConfig = runMachine(["1", "0", "1", "_", "_"]);

console.log(finalConfig.tape);
