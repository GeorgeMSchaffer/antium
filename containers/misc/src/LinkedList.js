//LIFO
class Node {
  constructor(elm) {
    this.element = elm;
    this.next = null;
    this.previous = null;
  }
}

module.exports= class LinkedList {
  constructor() {
    this.head = new Node("head");
    console.debug('\r\n -------- CREATED NEW LINKED LIST', this);
  }
   remove(item) {
     let currNode = this.find(item);
     if (!(currNode.next == null)) {
       currNode.previous.next = currNode.next;
       currNode.next.previous = currNode.previous;
       currNode.next = null;
       currNode.previous = null;
     }
   }

   // function to display the elements of a linked list. Starts by hooking into the linked list by assigning the head of the list to a new node. Then it loops through the linked list printing the the next.element, till the current node's next property is set to null, i.e. the last node has been reached.
   display() {
     let currNode = this.head;
     while (!(currNode.next == null)) {
       console.log(currNode.next.element);
       currNode = currNode.next;
     }
   }

   // A helper function to find a particular node.
  find(term) {
      if (!term) {
        return null
      }
      const currNode = this.head; //  create a new node and assign it as the head node.
      console.debug(`\r \n ------ SEARCHING ${term} ---------- \r\n`, currNode);
   
     // Keep looping through the linked list with  the next property, while the value of the current node's element property is not equal to the data we are searching for. And on success, the function returns the node storing the data. If the data is not found, the function returns null.
       console.debug('FOUND NODE', currNode);
      console.debug('FOUND NODE ELEMENT', currNode.element, 'VS TERM',term);
      while (currNode.element != term) {
        console.debug('CURRENT NODE', currNode);
       currNode = currNode.next;
      }
     return currNode;
   }
   // function to insert a new node, after a particular node say node X, first find X using find(). Then set new node's next property to the value of the next property of X . Then set X's next property to reference to the new node that I just inserted.

   insert(newElement, item) {
     let newNode = new Node(newElement);
        let current = this.find(item);
     console.debug('NEW NODE CREATED', newNode);
        console.debug('CURRENT',current);
     newNode.next = current.next;
     newNode.previous = current;
     current.next = newNode;
   }
};