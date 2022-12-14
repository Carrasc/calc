import { CBM } from "./config/constants";

/**
 * Calculate the "Costo de Obra" (CO)
 *
 * @param {number} surface
 * @param {string} fgc - género constructivo (value) (ej. "1.39")
 *
 * @returns {number}
 */
export function getCO(surface, fgc) {
  const CO = CBM * fgc * surface;
  return CO;
}
