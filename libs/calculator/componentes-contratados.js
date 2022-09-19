const COMPONENTS = require("./config/components.json");

const { getValueFromArray } = require("./utils");

/**
 * Calculate the "Condición de Contratación" (CC/Components)
 *
 * @param {number} co - Costo de Obra
 * @param {string} components - Condición de Contratación (key/id) (ej. "PC" || "PCP" || "PCPB")
 *
 * @returns {number}
 */
function calculateCC(co, components) {
  const cc_factor = getValueFromArray(components, COMPONENTS);

  const total = cc_factor * co;

  // TODO: Create/Populate table depending by the selected components
  const table = [];

  return { total, table };
}

module.exports = calculateCC;
