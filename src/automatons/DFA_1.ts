// ^(a*b)*(a)b$

function dfa_1(input: string): boolean {
  let state = "q0";

  for (const char of input) {
    switch (state) {
      case "q0":
        state = char === "a" ? "q1" : "q0";
        break;
      case "q1":
        state = char === "b" ? "q2" : char === "a" ? "q1" : "q0";
        break;
      case "q2":
        state = char === "a" ? "q1" : "q0";
        break;
    }
  }

  return state === "q2";
}

