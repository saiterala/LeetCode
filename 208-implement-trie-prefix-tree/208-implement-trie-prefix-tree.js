
var Trie = function() {
    this.root = {}
    this.endString = '*'
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for ( let i = 0; i < word.length; i++){
        const val = word[i]
        if(!(val in node)){
            node[val] = {}
        }
        node = node[val]
    }
    node[this.endString] = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++){
        const val = word[i]
        if(!(val in node)) return false
        
        node = node[val]
    }
    return this.endString in node
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root
    for (let i = 0; i < prefix.length; i++){
        const val = prefix[i]
        if(!(val in node)) return false
        
        node = node[val]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */