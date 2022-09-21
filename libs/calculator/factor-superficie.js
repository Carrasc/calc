/**
 * Calculate the "Factor de Superficie" (FS)
 *
 * @param {number} surface
 *
 * @returns {number}
 */
export function getFS(surface) {
  return (15 - 2.5 * Math.log10(surface)) / 1.5;
}
