//FIRST IN FIRST OUT

const { threadId } = require("worker_threads");

module.exports = class Queue {
	constructor() {
		this.data = [];
	}
	last() {
		return (this.data.length) ? this.data[this.data.length - 1] : null;
	}
	enqueue(item) {
		console.info(' Enqueing item', item);
		//removes first element from array
		this.data.push(item);
		console.info('AFTER ENQUEUE', this.data);
	}
	dequeue() {
		console.debug('BEFORE DEQUE', this.data);
		//removes first element from array
		this.data.shift();
		console.debug('AFTER DEQUE', this.data);
	}
	print() {
		if (!this.data.length){
			console.info('Unable To Print, the Queue is Empty!');
		}
		else {
			console.info('----- QUEUE CONTENTS -----');
			this.data.forEach((val,idx) => {
				console.log(`Index ${idx} - Value ${val}`);
			});
		}
	}
}
