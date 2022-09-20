const table_conceptual = require("./config/components/table-plan-conceptual.json");
const table_preliminar = require("./config/components/table-plan-preliminar.json");
const table_basico = require("./config/components/table-plan-basico.json");
const table_arquitectonica = require("./config/components/table-plan-arquitectonica.json");
const table_terminacion = require("./config/components/table-plan-terminacion.json");

/**
 * Calculate the "Condición de Contratación" (CC/ajuste)
 *
 * @param {number} h - Honorarios
 * @param {string} ajuste - Condición de Contratación (value) (ej. 1.25)
 *
 * @returns {object} {total: number, table: []}
 */
function calculateCC(h, ajuste) {
  // const total = ajuste * h * porcentaje_del_plan_contratado; // 0.1 * 1.25
  const h_ajustado = ajuste * h;
  let table = [];

  switch (ajuste) {
    case 1.25:
      // Plan Conceptual
      var conceptual = _calculatePlan(h_ajustado, table_conceptual);
      table = table.push({
        name: "Plan Conceptual",
        value: conceptual.acc_total,
        children: conceptual.new_table,
      });
      break;
    case 1.16:
      // Plan Conceptual + Preliminar
      var conceptual = _calculatePlan(h_ajustado, table_conceptual);
      table = table.push({
        name: "Plan Conceptual",
        value: conceptual.acc_total,
        children: conceptual.new_table,
      });
      var preliminar = _calculatePlan(h_ajustado, table_preliminar);
      table = table.push({
        name: "Plan Preliminar",
        value: preliminar.acc_total,
        children: preliminar.new_table,
      });

      break;
    case 1.08:
      // Plan Conceptual + Preliminar
      var conceptual = _calculatePlan(h_ajustado, table_conceptual);
      table = table.push({
        name: "Plan Conceptual",
        value: conceptual.acc_total,
        children: conceptual.new_table,
      });
      var preliminar = _calculatePlan(h_ajustado, table_preliminar);
      table = table.push({
        name: "Plan Preliminar",
        value: preliminar.acc_total,
        children: preliminar.new_table,
      });
      var basico = _calculatePlan(h_ajustado, table_basico);
      table = table.push({
        name: "Plan Básico",
        value: basico.acc_total,
        children: basico.new_table,
      });

      break;
    case 1:
      // Completo
      var conceptual = _calculatePlan(h_ajustado, table_conceptual);
      table = table.push({
        name: "Plan Conceptual",
        value: conceptual.acc_total,
        children: conceptual.new_table,
      });
      var preliminar = _calculatePlan(h_ajustado, table_preliminar);
      table = table.push({
        name: "Plan Preliminar",
        value: preliminar.acc_total,
        children: preliminar.new_table,
      });
      var basico = _calculatePlan(h_ajustado, table_basico);
      table = table.push({
        name: "Plan Básico",
        value: basico.acc_total,
        children: basico.new_table,
      });
      var arquitectonica = _calculatePlan(h_ajustado, table_arquitectonica);
      table = table.push({
        name: "Plan Preliminar",
        value: arquitectonica.acc_total,
        children: arquitectonica.new_table,
      });
      var terminacion = _calculatePlan(h_ajustado, table_terminacion);
      table = table.push({
        name: "Plan Básico",
        value: terminacion.acc_total,
        children: terminacion.new_table,
      });

      break;

    default:
      throw new Error("Condicion de Contratación no válida ->", ajuste);
  }

  return { total, table };
}

module.exports = calculateCC;

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

  for (let i = 0; i < table.length; i++) {
    const parent = table[i];
    const children_values = [];
    const children = parent.children;
    for (let j = 0; j < children.length; j++) {
      const child = children[j];
      children_values.push({
        name: child.name,
        value: h_ajustado * child.value,
      });
    }
    new_table.push({
      name: parent.name,
      value: h_ajustado * parent.value,
    });
    acc_total = acc_total + h_ajustado * parent.value;
  }

  return { acc_total, new_table };
}
