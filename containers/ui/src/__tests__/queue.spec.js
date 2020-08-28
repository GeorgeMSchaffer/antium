
const Queue = require('../../queue');
//FIFO

describe('QUEUE TESTS', () => {
	it('Tests FIFO', () => {
		const queue = Queue();
		queue.enqueue('FIRST IN');
		queue.enqueue('SECOND IN');
		const res = queue.dequeue();
		expect(res.length).toBe(1);
	});
})