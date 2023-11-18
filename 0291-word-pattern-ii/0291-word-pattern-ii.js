/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, s) {
  // set a global var to store the result
  let ans = false;
  backtrack(pattern, s, new Map());
  return ans;
    
  function backtrack(pattern, s, map) {
    // if we already found a valid mapping, return
    if (ans) {
      return;
    }

    if (pattern === "") {
      // if we used up all pattern chars
      // but s still left some chars, the mapping is invalid
      if (s !== "") {
        return;
      }

      // mapping should be one to one
      // no two pattern chars map to the same substring in s
      // example: 
      // pattern: "ab"
      // s: "aa"
      const words = new Set(map.values());
      if (words.size === map.size) {
        ans = true;
      }
      return;
    }

    let key = pattern[0];
    if (map.has(key)) {
      let word = map.get(key);
      // if the key already exists,
      // but s does not start with the mapped substring, return
      if (!s.startsWith(word)) {
        return;
      }
      // if s starts with the mapped substring, 
      // continue the next slice
      backtrack(pattern.slice(1), s.slice(word.length), map);
      return;
    }

    // backtrack: 
    // always use the first char of pattern to map s
    for (let i = 1; i <= s.length; i++) {
      map.set(pattern[0], s.slice(0, i));
      backtrack(pattern.slice(1), s.slice(i), map);
      map.delete(pattern[0]);
    }
  }
};