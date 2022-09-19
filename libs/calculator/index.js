const getFS = require("./factor-superficie");
const getCO = require("./costo-obra");
const getFI = require("./factor-inclusion");
const getFM = require("./factor-obra");
const calculateCC = require("./componentes-contratados");

/**
 * Main function
 *
 * @param {number} surface
 * @param {string} type_construction - género constructivo (key/id) (ej. "A-1")
 * @param {string} modality - Modalidad de Obra ("Obra Nueva" || "Ampliación" || "Reacondicionamiento" || "Reahabilitación" || "Remodelación")
 * @param {string} town - Municipio (key/id) (ej. "01001")
 * @param {string} components - Condición de Contratación (key/id) (ej. "PC" || "PCP" || "PCPB")
 *
 * @returns {Object}
 */
function calculateCosts(
  surface,
  type_construction,
  modality,
  town,
  components
) {
  /**
   * Factor superficie
   */
  const fs = getFS(surface);
  /**
   * Costo Directo de Obra por m2
   */
  const co = getCO(surface, type_construction);
  /**
   * Factor Inclusión
   */
  const fi = getFI(town);
  /**
   * Factor por Modalidad de Obra
   */
  const fm = getFM(modality);
  /**
   * Condición de Contratación
   */
  const { total: cc_total, table: cc_table } = calculateCC(co, components);

  const h = co * (fs / 100) * fi * fm;

  const total_cost = cc_total; // + ....

  const response = { total_cost, work_cost: co, components_table: cc_table };
  return response;
}

module.exports = calculateCosts;
