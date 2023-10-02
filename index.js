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

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
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
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
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
        while (prev !== null) {
            let resPrev = prev.value
            elements.push(resPrev);
            prev = prev.next;
        }

        console.log(elements.join(" - "));
    }
}

const list = new SinglyLinkedList();
list.addFront(1);
list.addBack(4);
list.addFront(5);
list.addFront(3);
list.addBack(9);
list.print();
console.log(list.getValueByIndex(1));