/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    let diff = Infinity
    let min = Infinity
    for (let i = 0; i< nums.length; i++){
        if( nums[i] % 2 === 1) nums[i] *= 2
        
        min = Math.min(nums[i], min)
    }
    
    const maxHeap = new MaxHeap(nums)
    
    while(maxHeap.peek() % 2 === 0){
        let max = maxHeap.remove()
        diff = Math.min(diff, max-min )
        min = Math.min(min, max/2)
        maxHeap.insert(max/2)
    }
    
    diff = Math.min(diff, maxHeap.peek() - min)
    return diff
    
};

class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const parentIdx = Math.floor((array.length-2)/2)
		for ( let i= parentIdx; i >= 0; i--){
			this.siftDown(i, array)
		}
		return array
  }

  siftDown(currentIdx, heap) {
   let childOne = currentIdx*2 +1
	 const endIdx = heap.length-1
	 while (childOne <= endIdx){
		 let swapIdx
		 let childTwo = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
		 if(childTwo !== -1 && heap[childTwo] > heap[childOne]){
			 swapIdx = childTwo
		 }else {
			 swapIdx = childOne
		 }
		 if(heap[currentIdx] < heap[swapIdx]){
			 this.swap(swapIdx, currentIdx, heap)
		 	 currentIdx = swapIdx
		 	 childOne = currentIdx * 2 + 1
		 }else{
			 return
		 }
	 }
  }

  siftUp(currentIdx, heap) {
    // Write your code here.
		let parentIdx = Math.floor((currentIdx-1)/2)
		while (currentIdx > 0 && heap[parentIdx] < heap[currentIdx]){
			this.swap(currentIdx, parentIdx, heap)
			currentIdx = parentIdx
			parentIdx = Math.floor((currentIdx-1)/2)
		}
  }

  peek() {
    // Write your code here.
		return this.heap[0]
  }

  remove() {
		this.swap(0, this.heap.length-1, this.heap)
		const value = this.heap.pop()
		this.siftDown(0,this.heap)
		return value
		
  }

  insert(value) {
    this.heap.push(value)
		this.siftUp(this.heap.length-1, this.heap)
  }
	
	swap(i, j, heap){
		const temp = heap[i]
		heap[i] = heap[j]
		heap[j] = temp
	}
}