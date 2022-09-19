const MODALITIES = require("./config/modalities.json");

/**
 * Calculate the "Factor por Modalidad de Obra" (FM)
 *
 * @param {number} modality ("Obra Nueva" || "Ampliación" || "Reacondicionamiento" || "Reahabilitación" || "Remodelación")
 *
 * @returns {number}
 */
function getFM(modality) {
  const fm = getValueFromArray(modality, MODALITIES);

  return fm;
}

module.exports = getFM;
