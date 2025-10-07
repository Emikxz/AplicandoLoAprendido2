import prompt from "../ui/prompt.js";
import { repoTodos } from "./repoMem.js";
import { mostrarDetalles } from "../ui/mostrarDetalles.js";
import type { Tarea } from "../domain/types.js";

export function buscarTarea(): void {
  const clave = prompt("Introduce el título (o 0 para volver): ");
  if (clave === "0") return;

  const resultados: Tarea[] = [];
  for (const t of repoTodos()) {
    const titulo = t.titulo || "";
    if (titulo.toLowerCase().includes(clave.toLowerCase())) resultados.push(t);
  }

  if (resultados.length === 0) {
    console.log("\nNo se encontraron tareas.");
    prompt("\nPresiona una tecla para continuar...");
    return;
  }

  console.log("\nCoincidencias:\n");
  resultados.forEach((t, i) => console.log(`[${i + 1}] ${t.titulo}`));

  const num = prompt("\nVer detalles (número) o 0 para volver: ");
  if (num === "0") return;

  const indice = parseInt(num, 10) - 1;
  if (!Number.isNaN(indice) && indice >= 0 && indice < resultados.length) {
    mostrarDetalles(resultados[indice]);
  } else {
    console.log("Número inválido");
  }
}
