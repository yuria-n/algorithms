/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const la = a.length;
  const lb = b.length;
  const l = Math.max(la, lb);

  if (!l) {
    return "0";
  }

  let result = "";
  let m = 0;
  for (let i = l - 1; i >= 0; i--) {
    const ia = i - (l - la);
    const ib = i - (l - lb);
    const da = ia < 0 ? 0 : +a[ia];
    const db = ib < 0 ? 0 : +b[ib];
    console.log(`da: ${da}  db: ${db}  m: ${m}`);
    const sum = da + db + m;
    switch (sum) {
      case 0:
        result = "0" + result;
        m = 0;
        break;
      case 1:
        result = "1" + result;
        m = 0;
        break;
      case 2:
        result = "0" + result;
        m = 1;
        break;
      default:
        result = "1" + result;
        m = 1;
    }
  }

  return !m ? result : 1 + result;
};
