/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function(products, searchWord) {
  products.sort((a, b) => a.localeCompare(b));

  const result = [];
  for (let i = 0; i < searchWord.length; i++) {
    const word = searchWord.substring(0, i + 1);
    result.push(search(word));
  }
  return result.map(words => words.slice(0, 3));

  function search(word) {
    const suggestions = [];
    for (const product of products) {
      if (product.startsWith(word)) {
        suggestions.push(product);
      }
    }
    return suggestions;
  }
};
