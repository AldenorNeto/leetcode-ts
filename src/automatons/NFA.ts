//

function NFA(input: string, pos: number, state: string): boolean {
  if (pos === input.length) {
    return state === "q2";
  }

  const char = input[pos];

  if (char !== "a" && char !== "b") {
    return false;
  }

  switch (state) {
    case "q0":
      if (char === "a") {
        return NFA(input, pos + 1, "q1");
      }
      return false;

    case "q1":
      if (char === "a") {
        return NFA(input, pos + 1, "q1");
      } else if (char === "b") {
        return NFA(input, pos + 1, "q1") || NFA(input, pos + 1, "q2");
      }
      break;

    default:
      return false;
  }

  return false;
}

function nfaAutomata(input: string) {
  return NFA(input, 0, "q0");
}

