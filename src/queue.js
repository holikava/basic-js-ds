const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.tail) {
      this.head = new ListNode(value);
      this.tail = this.head;
      this.next = null;
    } else {
      let prevTail = this.tail;
      this.tail = new ListNode(value);
      prevTail.next = this.tail;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    } else {
      const deleteItem = this.head;
      this.head = this.head.next;
      return deleteItem;
    }
  }
}

module.exports = {
  Queue
};
