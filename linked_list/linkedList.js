class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
class linkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// here this is what tail is in the form of object
// tail:{
//     value:7,
//     next:null
// }
let myLinkedlist = new linkedList(7);
myLinkedlist.push(4);

console.log(linkedList);
