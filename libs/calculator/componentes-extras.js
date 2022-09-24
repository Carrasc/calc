import table_accesos from "./config/extras/table-plan-accesos.json";
import table_aire from "./config/extras/table-plan-aire.json";
import table_cctv from "./config/extras/table-plan-cctv.json";
import table_gases from "./config/extras/table-plan-gases.json";
import table_pci from "./config/extras/table-plan-pci.json";
import table_ventilacion from "./config/extras/table-plan-ventilacion.json";
import table_voz from "./config/extras/table-plan-voz.json";

/**
 * Create the table for "Instalaciones Complementarias"
 *
 * @param {number} h - Honorarios
 * @param {Array} extras - Instalaciones Complementarias (IC) ([]) (ej. ["AA", "VE"])
 *
 * @returns {object} {total: number, table: []}
 */
export function calculateIC(h, extras) {
  let total = 0;
  let table = [];

  if (extras.includes("AA")) {
    const aire = _calculatePlan(h, table_aire);
    table.push({
      name: "Aire Acondicionado",
      value: aire.acc_total,
      children: aire.new_table,
    });
    total += aire.acc_total;
  }
  if (extras.includes("VE")) {
    const ventilacion = _calculatePlan(h, table_ventilacion);
    table.push({
      name: "Ventilación y Extracción",
      value: ventilacion.acc_total,
      children: ventilacion.new_table,
    });
    total += ventilacion.acc_total;
  }
  if (extras.includes("GM")) {
    const gases = _calculatePlan(h, table_gases);
    table.push({
      name: "Gases Medicinales",
      value: gases.acc_total,
      children: gases.new_table,
    });
    total += gases.acc_total;
  }
  if (extras.includes("PCI")) {
    const pci = _calculatePlan(h, table_pci);
    table.push({
      name: "Protección Contra Incendios (PCI)",
      value: pci.acc_total,
      children: pci.new_table,
    });
    total += pci.acc_total;
  }
  if (extras.includes("SCA")) {
    const accesos = _calculatePlan(h, table_accesos);
    table.push({
      name: "Sistema de Control de Accesos",
      value: accesos.acc_total,
      children: accesos.new_table,
    });
    total += accesos.acc_total;
  }
  if (extras.includes("SVD")) {
    const voz = _calculatePlan(h, table_voz);
    table.push({
      name: "Sistema de Voz y Datos",
      value: voz.acc_total,
      children: voz.new_table,
    });
    total += voz.acc_total;
  }
  if (extras.includes("CCTV")) {
    const cctv = _calculatePlan(h, table_cctv);
    table.push({
      name: "Sistema de CCTV",
      value: cctv.acc_total,
      children: cctv.new_table,
    });
    total += cctv.acc_total;
  }

  // throw new Error(`Extras no válidos -> ${extras}`);

  return { total, table };
}

/**
 * Calculate the plan by a given table
 *
 * @param {number} h
 * @param {Array} table to process
 *
 * @returns {object} {acc_total: number, new_table: []}
 */
function _calculatePlan(h, table) {
  let new_table = [];
  let acc_total = 0;
  // let aux = 0;
  const keys = Object.keys(table);

  for (let k = 0; k < keys.length; k++) {
    const plan = keys[k];
    let plan_table = [];

    for (let i = 0; i < table[plan].length; i++) {
      const parents = table[plan];
      for (let p = 0; p < parents.length; p++) {
        const parent = parents[p];
        const children_values = [];
        const children = parent.children;
        // let aux_children = 0;
        for (let j = 0; j < children.length; j++) {
          const child = children[j];
          children_values.push({
            name: child.name,
            value: h * child.value,
          });
          // aux_children += child.value;
        }
        // console.log("aux_children, parent.value", aux_children, parent.value, parent.name, +aux_children.toFixed(3));
        // if (aux_children !== 0 && +aux_children.toFixed(3) !== parent.value) throw new Error(aux_children, parent.value);
        plan_table.push({
          name: parent.name,
          value: h * parent.value,
          ...(children_values.length > 0 && { children: children_values }),
        });

        acc_total += h * parent.value;
      }
    }
    new_table.push({
      name: plan,
      children: plan_table,
    });
  }
  // console.log("aux", aux);

  return { acc_total, new_table };
}
