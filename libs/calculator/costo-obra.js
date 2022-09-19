const { CBM } = require("./config/constants");

const FGC = require("./config/types-constructions.json");

const { getValueFromArray } = require("./utils");

/**
 * Calculate the "Costo de Obra" (CO)
 *
 * @param {number} surface
 * @param {string} type_construction - género constructivo (key/id) (ej. "A-1")
 *
 * @returns {number}
 */
function getCO(surface, type_construction) {
  const fgc = getValueFromArray(type_construction, FGC);

  const CO = CBM * fgc * surface;
  return CO;
}

module.exports = getCO;
