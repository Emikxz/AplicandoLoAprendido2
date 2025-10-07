import type { Tarea } from "../domain/types.js";
export const formatoCorto = (t: Tarea) =>
  `${t.titulo} [${t.estado}]${t.vencimiento !== "Sin fecha" ? " - vence " + t.vencimiento : ""}`;
