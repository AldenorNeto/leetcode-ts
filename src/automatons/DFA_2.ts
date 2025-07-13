// ^a[ab]*b$

function dfa_2(input: string): boolean {
  let state = "q0";

  for (const char of input) {
    if (char !== "a" && char !== "b") {
      state = "q3";
    } else if (char === "a" && state === "q0") {
      state = "q1";
    } else if (char === "b" && state === "q1") {
      state = "q2";
    } else if (char === "a" && state === "q2") {
      state = "q1";
    } else if (char === "b" && state === "q0") {
      state = "q3";
    }
  }

  return state === "q2";
}
