import fs from "node:fs/promises";

export async function createFile(text) {
  try {
    await fs.writeFile("./meuArquivo.txt", text, "utf-8");
    console.log("Arquivo criado com sucesso!");
    console.log(text);
  } catch (error) {
    console.log("Arquivo não foi criado com sucesso: ", error.message);
  }
}

export async function showFile() {
  try {
    await fs.readFile("./meuArquivo.txt", "utf-8");
    console.log("Arquivo lido com sucesso!");
  } catch (error) {
    console.log("Arquivo não foi lido com sucesso:", error.message);
  }
}

export async function updateFile(newText) {
  try {
    await fs.writeFile("./meuArquivo.txt", newText, "utf-8");
    console.log("Arquivo atualizado com sucesso!");
    console.log(newText);
  } catch (error) {
    console.log("Arquivo não foi atualizado com sucesso:", error.mesage);
  }
}

export async function deleteFile() {
  try {
    await fs.unlink("./meuArquivo.txt");
    console.log("Arquivo deletado com sucesso!");
  } catch (error) {
    console.log("Arquivo não foi deletado com sucesso:", error.mesage);
  }
}
