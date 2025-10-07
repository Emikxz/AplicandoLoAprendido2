import prompt from "./prompt.js";
import { listarTareas } from "../core/listarTareas.js";
import { buscarTarea } from "../core/buscarTarea.js";
import { agregarTarea } from "../core/agregarTarea.js";

export function mostrarMenu(): void {
  let opcion: string;
  do {
    console.log("\n MENU PRINCIPAL ");
    console.log("1| Ver tareas");
    console.log("2| Buscar tarea");
    console.log("3| Agregar tarea");
    console.log("0| Salir");

    opcion = prompt("> ");

    switch (opcion) {
      case "1":
        menuVerTareas();
        break;
      case "2":
        buscarTarea();
        break;
      case "3":
        agregarTarea();
        break;
      case "0":
        console.log("¡Hasta luego!");
        break;
      default:
        console.log("Opción inválida");
    }
  } while (opcion !== "0");
}

function menuVerTareas(): void {
  let op: string;
  do {
    console.log("\n VER TAREAS ");
    console.log("1| Pendientes");
    console.log("2| En curso");
    console.log("3| Terminadas");
    console.log("4| Todas");
    console.log("0| Volver");

    op = prompt("> ");

    switch (op) {
      case "1": listarTareas("Pendiente"); break;
      case "2": listarTareas("En curso"); break;
      case "3": listarTareas("Terminada"); break;
      case "4": listarTareas("Todas"); break;
      case "0": break;
      default: console.log("Opción inválida"); break;
    }
  } while (op !== "0");
}
