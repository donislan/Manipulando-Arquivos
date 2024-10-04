import { createFile, deleteFile, showFile, updateFile } from "./functions.mjs";

async function executeFunctions() {
  await createFile("Novo arquivo criado com Node.Js");
  await showFile();
  await updateFile("Arquivo atualizado com Node.JS");
  await showFile();
  await deleteFile();
}

executeFunctions();
