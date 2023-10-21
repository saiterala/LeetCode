/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.totalLength = v1.length + v2.length
    this.maxLength = Math.max(v1.length, v2.length)
    this.arr = zigzagTraverse(v1, v2, this.maxLength)
    this.iterator = 0
    
};

var zigzagTraverse = function(v1, v2, maxLength){
    let i = 0
    let current = "v1"
    const result = []
    while(i < maxLength){
        if(current ==="v1"){
            v1[i]!== undefined && result.push(v1[i])
            current= "v2"
        }else if(current === "v2"){
            v2[i] !== undefined && result.push(v2[i])
            current = "v1"
            i++
        }
    }
    console.log(result)
    return result
}

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    // console.log("Hello")
    return this.iterator < this.totalLength
    
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */

ZigzagIterator.prototype.next = function next() {

    const val = this.arr[this.iterator]
    this.iterator++
    return val
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/