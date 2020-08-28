
//import { Queue } from '../queue';
const Queue = require('../queue');
require('mocha');
const { should, expect } = require('chai');
console.log('QUEUE', Queue);
//FIFOcle

describe('QUEUE TESTS', () => {
	 it('Tests FIFO', () => {
		const queue = new Queue();
		queue.enqueue('FIRST IN');
		queue.enqueue('SECOND IN');
		queue.dequeue();
		console.debug('LAST', queue.last());
		expect(queue.last()).eq('SECOND IN');
	});
	it('Deques properly', () => {
		const queue = new Queue();
		queue.enqueue('FIRST IN');
		queue.enqueue('SECOND IN');
		queue.enqueue('THIRD IN');
		queue.dequeue();
		queue.dequeue();
		queue.dequeue();
		expect(queue.last()).eq(null);
	});
	it('Dequing on a empty set does not error', () => {
		const queue = new Queue();
		queue.enqueue('FIRST IN');
		queue.enqueue('SECOND IN');
		queue.enqueue('THIRD IN');
		queue.dequeue();
		queue.dequeue();
		queue.dequeue();
		queue.dequeue();
		expect(queue.last()).eq(null);

	});

})