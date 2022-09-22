import table_conceptual from "./config/components/table-plan-conceptual.json";
import table_preliminar from "./config/components/table-plan-preliminar.json";
import table_basico from "./config/components/table-plan-basico.json";
import table_edificacion from "./config/components/table-plan-edificacion.json";
import table_arquitectonica from "./config/components/table-plan-arquitectonica.json";
import table_terminacion from "./config/components/table-plan-terminacion.json";

/**
 * Calculate the "Condición de Contratación" (CC/ajuste)
 *
 * @param {number} h - Honorarios
 * @param {string} ajuste_cc - Condición de Contratación (value) (ej. 1.25)
 *
 * @returns {object} {total: number, table: []}
 */
export function calculateCC(h, ajuste_cc) {
  // const total = ajuste_cc * h * porcentaje_del_plan_contratado; // 0.1 * 1.25
  let total = 0;
  const h_ajustado = ajuste_cc * h;
  let table = [];

  switch (ajuste_cc) {
    case 1.25:
      // Plan Conceptual
      var conceptual = _calculatePlan(h_ajustado, table_conceptual);
      table.push({
        name: "Plan Conceptual",
        value: conceptual.acc_total,
        children: conceptual.new_table,
      });
      total += conceptual.acc_total;
      break;
    case 1.16:
      // Plan Conceptual + Preliminar
      var conceptual = _calculatePlan(h_ajustado, table_conceptual);
      table.push({
        name: "Plan Conceptual",
        value: conceptual.acc_total,
        children: conceptual.new_table,
      });
      total += conceptual.acc_total;
      var preliminar = _calculatePlan(h_ajustado, table_preliminar);
      table.push({
        name: "Plan Preliminar",
        value: preliminar.acc_total,
        children: preliminar.new_table,
      });
      total += preliminar.acc_total;

      break;
    case 1.08:
      // Plan Conceptual + Preliminar
      var conceptual = _calculatePlan(h_ajustado, table_conceptual);
      table.push({
        name: "Plan Conceptual",
        value: conceptual.acc_total,
        children: conceptual.new_table,
      });
      total += conceptual.acc_total;
      var preliminar = _calculatePlan(h_ajustado, table_preliminar);
      table.push({
        name: "Plan Preliminar",
        value: preliminar.acc_total,
        children: preliminar.new_table,
      });
      total += preliminar.acc_total;
      var basico = _calculatePlan(h_ajustado, table_basico);
      table.push({
        name: "Plan Básico",
        value: basico.acc_total,
        children: basico.new_table,
      });
      total += basico.acc_total;

      break;
    case 1:
      // Completo
      var conceptual = _calculatePlan(h_ajustado, table_conceptual);
      table.push({
        name: "Plan Conceptual",
        value: conceptual.acc_total,
        children: conceptual.new_table,
      });
      total += conceptual.acc_total;
      var preliminar = _calculatePlan(h_ajustado, table_preliminar);
      table.push({
        name: "Plan Preliminar",
        value: preliminar.acc_total,
        children: preliminar.new_table,
      });
      total += preliminar.acc_total;
      var basico = _calculatePlan(h_ajustado, table_basico);
      table.push({
        name: "Plan Básico",
        value: basico.acc_total,
        children: basico.new_table,
      });
      total += basico.acc_total;
      var edificacion = _calculatePlan(h_ajustado, table_edificacion);
      table.push({
        name: "Plan de Edificación",
        value: edificacion.acc_total,
        children: edificacion.new_table,
      });
      total += edificacion.acc_total;
      var arquitectonica = _calculatePlan(h_ajustado, table_arquitectonica);
      table.push({
        name: "Plan Arquitectónica",
        value: arquitectonica.acc_total,
        children: arquitectonica.new_table,
      });
      total += arquitectonica.acc_total;
      var terminacion = _calculatePlan(h_ajustado, table_terminacion);
      table.push({
        name: "Terminación y Recepción de Obra",
        value: terminacion.acc_total,
        children: terminacion.new_table,
      });
      total += terminacion.acc_total;

      break;

    default:
      throw new Error(`Ajuste Condicion de Contratación no válida -> ${ajuste_cc}`);
  }

  return { total, table };
}

/**
 * Calculate the plan by a given table
 *
 * @param {number} h_ajustado
 * @param {Array} table to process
 *
 * @returns {object} {acc_total: number, new_table: []}
 */
function _calculatePlan(h_ajustado, table) {
  let new_table = [];
  let acc_total = h_ajustado;
  // let aux = 0;
  for (let i = 0; i < table.length; i++) {
    const parent = table[i];
    const children_values = [];
    const children = parent.children;
    // let aux_children = 0;
    for (let j = 0; j < children.length; j++) {
      const child = children[j];
      children_values.push({
        name: child.name,
        value: h_ajustado * child.value,
      });
      // aux_children += child.value;
    }
    // console.log("aux_children, parent.value", aux_children, parent.value, parent.name, +aux_children.toFixed(3));
    // if (aux_children !== 0 && +aux_children.toFixed(3) !== parent.value) throw new Error(aux_children, parent.value);
    new_table.push({
      name: parent.name,
      value: h_ajustado * parent.value,
      ...(children_values.length > 0 && { children: children_values }),
    });
    acc_total = acc_total + h_ajustado * parent.value;
  }
  // console.log("aux", aux);

  return { acc_total, new_table };
}
