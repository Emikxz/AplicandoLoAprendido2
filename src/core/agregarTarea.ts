import prompt from "../ui/prompt.js";
import { validarFecha } from "../domain/validators.js";
import { repoCrear } from "./repoMem.js";
import type { Tarea, Estado, Dificultad } from "../domain/types.js";

export function agregarTarea(): void {
  console.log("\nCrea una nueva tarea:");

  let titulo = "";
  while (true) {
    titulo = prompt("1| Título: ").trim();
    if (titulo !== "") break;
    console.log("❌ El título no puede estar vacío.");
  }

  const descripcion = prompt("2| Descripción: ");

  let estado: Estado = "Pendiente";
  const estadoInput = prompt("3| Estado (P = Pendiente | E = En curso | T = Terminada): ").toUpperCase();
  if (estadoInput === "E") estado = "En curso";
  else if (estadoInput === "T") estado = "Terminada";

  let dificultad: Dificultad = "Baja";
  const dif = prompt("4| Dificultad (1 = Baja | 2 = Media | 3 = Alta): ");
  if (dif === "2") dificultad = "Media";
  else if (dif === "3") dificultad = "Alta";

  let vence = "";
  while (true) {
    vence = prompt("5. Vencimiento (dd/mm/yyyy, enter para dejar sin fecha): ");
    if (vence.trim() === "") { vence = "Sin fecha"; break; }
    if (validarFecha(vence)) break;
    console.log("❌ Fecha inválida. Intenta de nuevo.");
  }

  const nueva: Tarea = {
    titulo,
    descripcion: descripcion || "Sin descripción",
    estado,
    dificultad,
    vencimiento: vence,
    fechaCreacion: new Date().toLocaleString()
  };

  repoCrear(nueva);
  console.log("\n¡Tarea agregada!");
  prompt("\nPresiona cualquier tecla para continuar...");
}
