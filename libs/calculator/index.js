import { getFS } from "./factor-superficie";
import { getCO } from "./costo-obra";
import { calculateCC } from "./componentes-contratados";
import { calculateIC } from "./componentes-extras";
import { calculateRepsCost } from "./reps";
import { calculateDRO } from "./responsables-obra";

/**
 * Main function
 *
 * @param {number} surface
 * @param {number} type_construction - Género Constructivo (valor) (ej. 1.39)
 * @param {number} modality - Modalidad de Obra (valor) (ej. 1.0)
 * @param {number} town - Municipio (value) (ej. 0.6)
 * @param {number} ajuste_cc - Condición de Contratación (CC) (value) (ej. 1.25)
 * @param {Array} extras - Instalaciones Complementarias (IC) ([]) (ej. ["AA", "VE"])
 * @param {number} bim - Modelado de Información para la Construcción (BIM) (value) (ej. 1.05) - 1 si no tiene BIM
 * @param {number} number_reps - Repetitividad del Proyecto (value) (ej. 1) - valor mínimo 0 <=> "sin repeticiones"
 * @param {string} responsables - Responsables contratados (ej. "DRO") - puede ser null si no se quiere contratar DRO
 *
 * @returns {Object}
 */
function calculateCosts(surface, type_construction, modality, town, ajuste_cc, extras, bim, number_reps, responsables) {
  try {
    console.log("\n Calculatin ...", { surface, type_construction, modality, town, ajuste_cc, extras, bim, number_reps, responsables });
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
    const fi = town;
    /**
     * Factor por Modalidad de Obra
     */
    const fm = modality;

    /**
     * Honorarios
     */
    const h = co * (fs / 100) * fi * fm;
    /**
     * Condición de Contratación
     */
    const { total: cc_total, table: cc_table } = calculateCC(h, ajuste_cc);

    const { total: ic_total, table: ic_table } = calculateIC(h, extras);

    const total_cost = (cc_total + ic_total) * bim;

    /**
     * Get the BIM cost only
     */
    const _bim = bim === 1 ? bim : +(bim - 1).toFixed(3);
    const bim_cost = total_cost * _bim;

    // REPS -> Total total total * factor de cobro (dependiendo de cuantas reps)
    const reps_cost = calculateRepsCost(total_cost, number_reps);

    const total_cost_reps = total_cost + reps_cost;

    const { total: dro_total, table: dro_table } = calculateDRO(total_cost_reps, responsables);

    const final_cost = total_cost_reps + dro_total;

    const response = {
      final_cost,
      work_cost: co,
      components_table: cc_table,
      extras_total: ic_total,
      extras_table: ic_table,
      bim_cost,
      reps_cost,
      dro_table,
    };
    return response;
  } catch (error) {
    console.error("ERROR Calculator ->", error.message || error);
    return [];
  }
}

export default calculateCosts;
