/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || head.next === null ) return head
    
    const mid = getMidNode(head)
    const left = sortList(head)
    const right = sortList(mid)
    
    return merge(left, right)
    
};

const merge = (node1, node2) => {
    const head = new ListNode()
    let tail = head
    
    while(node1 !== null && node2 !== null){
        if(node1.val < node2.val ){
            tail.next = node1
            node1 = node1.next
            tail = tail.next
        }else {
            tail.next = node2
            node2 = node2.next
            tail = tail.next
        }
    }
    tail.next = node1 === null ? node2 : node1
    return head.next
      
}

const getMidNode = ( node) => {
    let midPrev = null
    while(node !== null && node.next !== null){
        midPrev = midPrev ? midPrev.next : node
        node = node.next.next
    }
    const mid = midPrev.next
    midPrev.next = null
    return mid
}