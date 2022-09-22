import responsables_obra from "./config/dro.json";
/**
 * Calculate the DRO and others
 *
 * @param {number} total_cost - total cost
 * @param {string} responsables - Responsables contratados (ej. "DRO")
 *
 * @returns {object} {cc_total: number, cc_table: {name:string, value:number}[]}
 */
export function calculateDRO(total_cost, responsables) {
  let total = 0;
  let table = [];

  if (responsables === null) return { total, table };

  const responsables_contratados = responsables_obra.find((r) => r.id === responsables);

  if (!responsables_contratados) throw new Error(`Responsables no válido (${responsables})`);

  responsables_contratados.children.forEach((r) => {
    table.push({
      name: r.name,
      value: total_cost * r.value,
    });
    total += total_cost * r.value;
  });

  return { total, table };
}
