export type Estado = "Pendiente" | "En curso" | "Terminada";
export type Dificultad = "Baja" | "Media" | "Alta";

export interface Tarea {
  titulo: string;
  descripcion: string;
  estado: Estado;
  dificultad: Dificultad;
  vencimiento: string;      // "dd/mm/yyyy" o "Sin fecha"
  fechaCreacion: string;
  fechaEdicion?: string;
}
