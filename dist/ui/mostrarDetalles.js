import prompt from "./prompt.js";
import { editarTarea } from "../core/editarTarea.js";
export function mostrarDetalles(tarea) {
    if (!tarea) {
        console.log("Tarea inválida.");
        return;
    }
    console.log("\n DETALLES DE LA TAREA ");
    console.log("Título:", tarea.titulo);
    console.log("Descripción:", tarea.descripcion);
    console.log("Estado:", tarea.estado);
    console.log("Dificultad:", tarea.dificultad);
    console.log("Vencimiento:", tarea.vencimiento);
    console.log("Fecha de creación:", tarea.fechaCreacion);
    if (tarea.fechaEdicion)
        console.log("Última edición:", tarea.fechaEdicion);
    const opc = prompt("\n¿Deseas editar esta tarea? (1 = Sí, 0 = No) ").trim();
    if (opc === "1")
        editarTarea(tarea);
}
//# sourceMappingURL=mostrarDetalles.js.map