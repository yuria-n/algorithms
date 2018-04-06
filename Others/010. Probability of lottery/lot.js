const masterData = require('./masterData');

/**
 * @param {string} lotId
 * @return logCardId
 */
function lot(lotId) {
  const {
    lots
  } = masterData.find(d => lotId === d.lotId);

  const sum = lots.map(lot => lot.weight).reduce((sum, w) => sum + w);
  const n = Math.floor(Math.random() * sum);

  let current = 0;
  for (const l of lots) {
    current += l.weight;
    if (current >= n) {
      const id = l.lotId;
      return /card/.test(id) ? id : lot(id);
    }
  }
}
console.log(lot('gacha'));