//(0|1)*00

function dfa_3(input: string) {
  let state = "q0";

  for (const i of input) {
    if (i === "0" && state === "q0") {
      state = "q1";
    } else if (i === "0" && state === "q1") {
      state = "q2";
    } else if (i === "1") {
      state = "q0";
    }
  }

  return state === "q2";
}
