import fs from "fs";
import path from "path";

function escreveLog(log: unknown, nameFile: string): void {
  const logPath = path.join(__dirname, nameFile + ".json");

  const message = JSON.stringify(log, null, 2);

  fs.writeFile(logPath, message, (err) => {
    if (err) {
      console.error("Erro ao escrever log:", err);
    } else {
      console.log("Log escrito com sucesso.");
    }
  });
}

module.exports = { escreveLog };
