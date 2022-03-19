/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const initialList = []
    const head = new ListNode(0)
    let point = head
    for (const l of lists){
        if(l){
            initialList.push({
                num : l.val,
                elementIdx: l,
            })
        }
        
    }
    
    const minHeap  = new MinHeap(initialList) 
    
    while(!minHeap.isEmpty()){
        let {num, elementIdx} = minHeap.remove()
        point.next = new ListNode(num)
        point = point.next
        elementIdx = elementIdx.next
        if(!elementIdx) continue
        
        minHeap.insert({
            num: elementIdx.val,
            elementIdx
        })
    }
    
    return head.next
};

class MinHeap {
	constructor(array){
		this.heap = this.buildHeap(array)
	}
	
	isEmpty(){
		return this.heap.length === 0
	}
	buildHeap(array){
		const parentIdx = Math.floor((array.length -2)/2)
		for (let i = parentIdx; i >= 0; i--){
			this.siftDown(i, array.length-1, array)
		}
		return array
	}
	
	siftDown(currentIdx, endIdx, heap){
		let childOneIdx = currentIdx * 2 +1
		while(childOneIdx <= endIdx){
			const childTwoIdx = currentIdx *2 + 2 <= endIdx ? currentIdx * 2 + 2: -1
			let swapIdx
			if(childTwoIdx !== -1){
				if(heap[childTwoIdx].num < heap[childOneIdx].num){
					swapIdx = childTwoIdx
				}else{
					swapIdx = childOneIdx
				}
			}else swapIdx = childOneIdx
			
			if(heap[currentIdx].num > heap[swapIdx].num){
				this.swap(currentIdx, swapIdx, heap)
				currentIdx = swapIdx
				childOneIdx = currentIdx * 2 + 	1 
			}else{
				return;
			}
		}
	}
	
	siftUp(currentIdx, heap){
		let parentIdx = Math.floor((currentIdx -1)/2)
		while (currentIdx > 0 && heap[currentIdx].num < heap[parentIdx].num){
			this.swap(currentIdx, parentIdx, heap)
			currentIdx = parentIdx
			parentIdx = Math.floor((currentIdx - 1)/2)
		}
	}
	
	remove(){
		this.swap(0, this.heap.length-1, this.heap)
		const value = this.heap.pop()
		this.siftDown(0, this.heap.length-1, this.heap)
		return value
	}
	
	insert(value){
		this.heap.push(value)
		this.siftUp(this.heap.length-1, this.heap)
	}
	swap(i, j, heap){
		const temp = heap[i]
		heap[i] = heap[j]
		heap[j] = temp
	}
}