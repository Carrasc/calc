import TOWNS from "./config/towns.json";

/**
 * Get the "Factor de Superficie" (FS)
 *
 * @param {number} town municipality (id/key) (ej. "01001")
 *
 * @returns {number}
 */
function getFI(town) {
  /**
   * Bajo:        0.60
   * Medio Bajo:  0.70
   * Medio:       0.90
   * Alto:        1.00
   */
  const fi = getValueFromArray(town, TOWNS);

  return fi;
}

module.exports = getFI;
