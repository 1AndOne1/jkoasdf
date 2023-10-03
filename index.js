class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFront(value) {
        const newNode = new Node(value);

        if (this.tail === null) {
            newNode.next = newNode;
            this.tail = newNode;
          } 
          else {
            this.tail.next = newNode;
            this.head = newNode;
          }
    }
    first() {
        return this.tail.next;
    }
    last() {
        return this.tail;
    }

    deleteFront() {
        if (this.head !== null) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
        }
    }

    addBack(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        newNode.next = newNode;
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (this.head === this.tail) {
        }
      }
    }

    deleteBack() {
        if (this.head === null) {
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            return;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
    }

    getValueByIndex(value) {
        let current = this.head;
        if (value < 0 || value.lenght > value) {
            return null;
        }
        for (let x = 0; x < value; x++) {
            current = current.next;
        }
        return current.value;
    }

    print() {
        let current = this.head;
        let prev = this.tail;
        let elements = [];

        while (current !== null) {
            let resCur = current.value
            elements.push(resCur);
            current = current.next;
        }

        console.log(elements.join(" - "));
    }
}

const list = new SinglyLinkedList();
list.addFront(1);
list.addBack(2);
list.addFront(3);
list.addFront(11);
list.addBack(33);
list.print();
console.log(list.getValueByIndex(1));
console.log(list.first())
console.log(list.last())
