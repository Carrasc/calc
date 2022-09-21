import { getFS } from "./factor-superficie";
import { getCO } from "./costo-obra";
import { calculateCC } from "./componentes-contratados";

/**
 * Main function
 *
 * @param {number} surface
 * @param {number} type_construction - Género Constructivo (valor) (ej. 1.39)
 * @param {number} modality - Modalidad de Obra (valor) (ej. 1.0)
 * @param {number} town - Municipio (value) (ej. 0.6)
 * @param {number} ajuste_cc - Condición de Contratación (CC) (value) (ej. 1.25)
 *
 * @returns {Object}
 */
function calculateCosts(surface, type_construction, modality, town, ajuste_cc) {
  try {
    console.log("\n", surface, type_construction, modality, town, ajuste_cc);
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
    console.log(co * (fs / 100));
    const h = co * (fs / 100) * fi * fm;
    console.log("h", h);
    /**
     * Condición de Contratación
     */
    const { total: cc_total, table: cc_table } = calculateCC(h, ajuste_cc);

    const total_cost = cc_total; // + ....

    // BIM -> Total total * BIM

    // REPS -> Total total total * factor de cobro (dependiendo de cuantas reps)

    // DRO -> por checar
    let aux = 0;
    cc_table.forEach((cc) => {
      aux += cc.value;
    });
    console.log("aux", aux);

    const response = { total_cost, work_cost: co, components_table: cc_table };
    return response;
  } catch (error) {
    console.error("ERROR Calculator ->", error.message || error);
    return [];
  }
}

export default calculateCosts;
