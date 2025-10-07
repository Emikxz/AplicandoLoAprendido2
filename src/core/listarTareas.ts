import prompt from "../ui/prompt.js";
import { repoTodos } from "./repoMem.js";
import { mostrarDetalles } from "../ui/mostrarDetalles.js";
import type { Tarea } from "../domain/types.js";

type Filtro = "Todas" | "Pendiente" | "En curso" | "Terminada";

export function listarTareas(filtro: Filtro = "Todas"): void {
  const lista: Tarea[] = [];
  for (const t of repoTodos()) {
    if (filtro === "Todas" || t.estado === filtro) lista.push(t);
  }

  if (lista.length === 0) { console.log(`\nNo hay tareas.`); return; }

  console.log("\nEstas son tus tareas:");
  lista.forEach((t, i) => console.log(`[${i + 1}] ${t.titulo}`));

  const num = prompt("\nVer detalles (número) o 0 para volver: ");
  if (num === "0") return;

  const indice = parseInt(num, 10) - 1;
  if (!Number.isNaN(indice) && indice >= 0 && indice < lista.length) {
    mostrarDetalles(lista[indice]);
  } else {
    console.log("Número inválido");
  }
}
