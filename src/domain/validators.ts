import { Estado } from "./types.js";

export function validarFecha(fecha: string): boolean {
  const partes = String(fecha).split("/");
  if (partes.length !== 3) return false;

  const d = parseInt(partes[0], 10);
  const m = parseInt(partes[1], 10);
  const y = parseInt(partes[2], 10);

  if (Number.isNaN(d) || Number.isNaN(m) || Number.isNaN(y)) return false;
  if (y < 1900 || y > 3000) return false;
  if (m < 1 || m > 12) return false;

  const diasMes = [
    31,
    y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0) ? 29 : 28,
    31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];
  return d >= 1 && d <= diasMes[m - 1];
}

export function esEstado(x: string): x is Estado {
  return ["Pendiente", "En curso", "Terminada"].includes(x);
}
