const masterData = require('./masterData');

/**
 * @param {string} lotId
 * @return logCardId
 */
function lot(lotId) {
  const weights = {};

  const data = masterData.find(d => lotId === d.lotId);
  const l = data.lots.length;

  let denominator = 0;
  for (let i = 0; i < l; i++) {
    const obj = data.lots[i];
    denominator += obj.weight;
    weights[obj.lotId] = denominator;
  }

  const number = Math.floor(Math.random() * Math.floor(denominator));

  for (let i = 0; i < l; i++) {
    const key = data.lots[i].lotId;
    if (number < weights[key]) {
      return !key.match('card') ? lot(key) : key;
    }
  }
}
console.log(lot('gacha'));
