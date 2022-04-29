/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
     this.iterator = iterator;
    this.currentValue = undefined;
    
};

/**
 * Returns the next element in the array without moving the pointer.
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    // if currentValue === undefined, it means that 
    // the value doesn't exist yet ---> bring it using 'next()';
    // otherwise there were multiple 'peek()' in a row ---> 
    // they all should return the same value
    
    if(this.currentValue === undefined){
        this.currentValue = this.iterator.next();
    }
    
    return this.currentValue;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if(this.currentValue === undefined){
        return this.iterator.next();
    }
    
    // the current value was previously received in 'peek()'
    const val = this.currentValue;
    this.currentValue = undefined;
    return val;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    // if current value !== undefined --->
    // the current value was previously received in 'peek()'
    return this.currentValue === undefined ? this.iterator.hasNext() : true;
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */