
import { tareas } from "../tareas.js";
import type { Tarea } from "../domain/types.js";

export function repoCrear(t: Tarea): void {
  tareas.push(t);
}

export function repoTodos(): ReadonlyArray<Tarea> {
  return tareas;
}
