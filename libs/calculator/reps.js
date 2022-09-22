/**
 * Calculate the repetition cost
 *
 * @param {number} total_cost - total cost
 * @param {number} number_reps - Repetitividad del Proyecto (value) (ej. 0) - valor mínimo 0 <=> "sin repeticiones"
 *
 * @returns {number} new cost
 */
export function calculateRepsCost(total_cost, number_reps) {
  // For one rep == no repetitions
  let total = 0;

  if (number_reps < 0) throw new Error("Número de repeticiones debe ser mayor a 0");

  const reps = [1, 0.4, 0.3, 0.2, 0.1, 0.05];

  for (let i = 1; i <= number_reps; i++) {
    let reps_factor = 0.05;
    if (i < reps.length) reps_factor = reps[i];
    // total += total_cost * reps_factor;
    total += total_cost * reps_factor;
  }

  return total;
}
