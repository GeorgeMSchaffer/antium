//LIFO

export class Stack {
  constructor(){
    this.data=[];
    this.top = 0;
  }
  push(item) {
    console.info('Pushing Item:', item, 'To Stack', this.data);
    this.data[this.top] = item;
    this.top++;
    console.info('After Push', this);
    //[TODO] For now return the updated array for testing sakes,remove later
    return this.data
  }
  pop(){
    console.info('\r\n ----- POPPING', this.data);
    if (this.data.length) {
      this.data.pop()
      this.top--;
    }
    console.info('AFTER POP',this.data);
  }
  filter(item) {
    return this.data.filter(elm => elm === item);
  }
  peek() {
    console.info('\r\n === PEEK', this.data);
    return this.data[this.top];
  }
  length(){
    return this.data.length;
  }  
  clear(){
    this.data =[];
  }
  isEmpty() {
    return this.data.length === 0;
  }
  print() {
    console.info('PRINTING Stack', this.data);
    if (!this.data) {
      console.warn('Unable to Print Items, the stack is empty!', this.data);
    }
    this.data.forEach((item,idx)=>{
      console.info(`Index ${idx} -  value: ${item}`)
    })
  }
};
/*
stack = new Stack();
console.info('PUSHING',stack.push('George Schaffer'));
stack.print();
console.info('PUSHING', stack.push('Elliot Schaffer'));6
stack.clear();
//console.info('PRINTING', stack.print());
console.info('LENGTH', stack.length());
console.info('CLEAR',stack.clear());
console.info('PUSHING', stack.push('A'));
console.info('PUSHING', stack.push('B'));
console.info('PUSHING', stack.push('C'));
console.info('POP', stack.pop());
stack.print();

console.info('PRINTING', stack.print())
console.info('PUSH',stack.push('Evan Schaffer'))
console.info('PRINTING',stack.print())
console.info('POP',stack.pop())
console.info('PRINTING',stack.print())
console.info('POP',stack.pop())
console.info('POP',stack.pop())
console.info('PRINTING',stack.print())
console.info('POPPING',stack.pop())
console.log('STACK LENGTH',stack.length());
console.log('IS STACK EMPTY',stack.isEmpty());
*/
/*

This implementation does follow the LIFO rule, but it’s not very efficient. Remember that arrays are indexed in JavaScript, so every time we change the beginning of the array, the rest of the array gets re-indexed.

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//STACK = LAST IN FIRST OUT
let arrayAsStack = [];

arrayAsStack.unshift({ "Willow Rosenberg": "A" });
console.log('AFTER unshift', arrayAsStack);
//[{ "Willow Rosenberg": "A" }]

arrayAsStack.unshift({ "Xander Harris": "C" });
console.log('AFTER shift', arrayAsStack);
//[ { 'Xander Harris': 'C' }, { 'Willow Rosenberg': 'A' } ]

arrayAsStack.unshift({ "Cordelia Chase": "B+" });
console.log('AFTER UNSHIFT',arrayAsStack);
//[{ 'Cordelia Chase': 'B+' }, { 'Xander Harris': 'C' },  { 'Willow Rosenberg': 'A' }]

arrayAsStack.unshift({ "Buffy Summers": "B" });
console.log('AFTER UNSHIFT',arrayAsStack);
//[{ "Buffy Summers": "B" }, { 'Cordelia Chase': 'B+' }, { 'Xander Harris': 'C' },  { 'Willow Rosenberg': 'A' }]

//REMOVAL
let firstOut = arrayAsStack.shift();
// { "Buffy Summers": "B" }
console.log('FIRST OUT',arrayAsStack);
//[{ 'Cordelia Chase': 'B+' }, { 'Xander Harris': 'C' },  { 'Willow Rosenberg': 'A' }]

firstOut = arrayAsStack.shift();
//{"Cordelia Chase": "B+"}
console.log('SECOND FIRST OUT',arrayAsStack);
//[ { 'Xander Harris': 'C' }, { 'Willow Rosenberg': 'A' } ]
*/
