//linkedlist has curr, prev, and next for nodes

reverseLinkedlist(head){
  let curr = head
  let prev = null
  let next = null
  while(curr !== null){
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  head = prev 
  return node
}
