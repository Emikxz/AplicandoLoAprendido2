import prompt from "../ui/prompt.js";
import { validarFecha } from "../domain/validators.js";
import type { Tarea } from "../domain/types.js";

export function editarTarea(tarea: Tarea | undefined): void {
  if (!tarea) { console.log("No hay tarea para editar."); return; }

  console.log("\n--- Editar tarea ---");
  console.log("Si querés dejar un campo igual, presioná Enter sin escribir nada.");

  const nuevoTitulo = prompt("Nuevo título (enter para dejar igual): ").trim();
  if (nuevoTitulo !== "") tarea.titulo = nuevoTitulo;

  const nuevaDescripcion = prompt("Nueva descripción (enter para dejar igual): ").trim();
  if (nuevaDescripcion !== "") tarea.descripcion = nuevaDescripcion;

  const nuevoEstado = prompt("Nuevo estado (P = Pendiente, E = En curso, T = Terminada, enter para dejar igual): ").trim();
  if (nuevoEstado !== "") {
    const u = nuevoEstado.toUpperCase();
    if (u === "P") tarea.estado = "Pendiente";
    else if (u === "E") tarea.estado = "En curso";
    else if (u === "T") tarea.estado = "Terminada";
    else console.log("Estado inválido. Se mantiene el anterior.");
  }

  const nuevaDif = prompt("Nueva dificultad (1 = Baja, 2 = Media, 3 = Alta, enter para dejar igual): ").trim();
  if (nuevaDif !== "") {
    if (nuevaDif === "1") tarea.dificultad = "Baja";
    else if (nuevaDif === "2") tarea.dificultad = "Media";
    else if (nuevaDif === "3") tarea.dificultad = "Alta";
    else console.log("Dificultad inválida. Se mantiene la anterior.");
  }

  while (true) {
    const nuevoVence = prompt("Nuevo vencimiento (dd/mm/yyyy, enter para dejar igual): ").trim();
    if (nuevoVence === "") break;
    if (validarFecha(nuevoVence)) { tarea.vencimiento = nuevoVence; break; }
    console.log("❌ Fecha inválida. Intenta de nuevo.");
  }

  tarea.fechaEdicion = new Date().toLocaleString();
  console.log("✅ Tarea editada con éxito.");
  prompt("\nPresiona cualquier tecla para continuar...");
}
