// Trie (Prefix Tree) solution
// time: O(1), memory: O(n)
/**
 * Initialize your data structure here.
 */
class TrieNode {
  children = new Map();
  word = false;
}

class Trie {
  root = new TrieNode();

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.word = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.word;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }
}

// Another solution
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/**
 * Initialize your data structure here.
 */
class Trie2 {
  constructor() {
    this.wordSet = new Set();
    this.prefixSet = new Set();
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert = (word) => {
    this.wordSet.add(word);
    while (word.length > 0) {
      this.prefixSet.add(word);
      word = word.slice(0, word.length - 1);
    }
  };

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search = (word) => {
    return this.wordSet.has(word);
  };

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith = (prefix) => {
    return this.prefixSet.has(prefix);
  };
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
