/**
 * Get the "value" inside an array by the given key/id
 *
 * @param {string} id key to search for
 * @param {Array} arr source
 *
 * @returns {number}
 */
function getValueFromArray(id, arr) {
  const element = arr.find((item) => item.id === id);
  if (!(!!element && "value" in element))
    throw new Error("Valor no encontrado (CG)");

  return element.value;
}

module.exports = { getValueFromArray };
