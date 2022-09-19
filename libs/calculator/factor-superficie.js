/**
 * Calculate the "Factor de Superficie" (FS)
 *
 * @param {number} surface
 *
 * @returns {number}
 */
function getFS(surface) {
  return (15 - 2.5 * Math.log(surface)) / 1.5;
}

module.exports = getFS;
