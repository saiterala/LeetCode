/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap(nums)
    
    while(this.minHeap.length > k){
        this.minHeap.remove()
    }
    this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.insert(val)
     while(this.minHeap.length > this.k){
        this.minHeap.remove()
    }
    return this.minHeap.peek()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap {
  constructor(array) {
	this.heap = this.buildHeap(array);
	this.length = this.heap.length
  }

  buildHeap(array) {
    const parentIdx = Math.floor((array.length-2)/2)
    for ( let i= parentIdx; i >= 0; i--){
      this.siftDown(i, array.length-1, array)
    }
    return array
  }

  siftDown(currentIdx, endIdx, heap) {

   let childOne = currentIdx*2 +1
	 while (childOne <= endIdx){
		 let swapIdx
		 let childTwo = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
		 if(childTwo !== -1 ){
			 if(heap[childTwo] < heap[childOne]){
				 swapIdx = childTwo
			 } else {
				 swapIdx = childOne
			 }
		 }else {
			 swapIdx = childOne
		 }
		 
		 if(heap[swapIdx] < heap[currentIdx]){
			 this.swap(swapIdx, currentIdx, heap)
		 	 currentIdx = swapIdx
		 	 childOne = currentIdx * 2 + 1
		 }else{
			 return
		 }
	 }
  }

  siftUp(currentIdx, heap) {
		let parentIdx = Math.floor((currentIdx-1)/2)
		while (currentIdx > 0){
			if(heap[currentIdx] < heap[parentIdx]){
				this.swap(currentIdx, parentIdx, heap)
				currentIdx = parentIdx
				parentIdx = Math.floor((currentIdx-1)/2)
			} else {
				return
			}
		}
  }

  peek() {
    // Write your code here.
		return this.heap[0]
  }

  remove() {
		this.swap(0, this.heap.length-1, this.heap)
		const value = this.heap.pop()
		this.length--
		this.siftDown(0, this.length-1, this.heap)
		return value
		
  }

  insert(value) {
    this.heap.push(value)
		this.length++
		this.siftUp(this.heap.length-1, this.heap)
  }
	
	swap(i, j, heap){
		const temp = heap[i]
		heap[i] = heap[j]
		heap[j] = temp
	}
}