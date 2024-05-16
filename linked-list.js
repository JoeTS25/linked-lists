/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1)
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    return idx(val)
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    let cur = this._get(idx);
    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    if (idx === 0) return this.unshift(val);
    // if the index is at the first number, use the previous unshift function to add 
    // new node at the beginning

    if (idx === this.length) return this.push(val);
    // if index is length of list, use push function to add new node at end

    let prev = this._get(idx - 1);
    // gets the value one before the index stated
    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    //remove head
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }
    // remove tail
    let prev = this._get(idx - 1);

    if (idx === this.length -1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    //remove somewhere in middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0; //if there's nothing in the list, the average is 0

    let total = 0; // total starts at 0
    let current = this.head; // current value is the head value (beginning)

    while (current) {   // while there is a current value (head)
      total += current.val; // add the current value to the total
      current = current.next; // then make the current = the next number to continue the loop
    }

    return total / this.length; 
  }
  //once the loop is done, return the end total and divide it by the length of the list to get the average
}

module.exports = LinkedList;
