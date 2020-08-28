//import { Stack } from '../stack';
const Stack = require('../stack');
require('mocha');
const {
	should,
	expect
} = require('chai');

//LIFO
describe('QUEUE TESTS', () => {
	it('LAST IN LASt OUT', () => {
		const stack = new Stack();
		stack.push('FIRST IN');
		stack.push('SECOND IN');
		stack.pop();
		expect(stack.peek()).eq('SECOND IN');
		it('Deques properly', () => {
			const stack = new Stack();
			stack.push('FIRST IN');
			stack.push('SECOND IN');
			stack.push('THIRD IN');
			stack.pop();
			stack.pop();
			stack.pop();
			expect(stack.last()).eq(null);
		});
		it('Dequing on a empty set does not error', () => {
			const stack = new Stack();
			stack.push('FIRST IN');
			stack.push('SECOND IN');
			stack.push('THIRD IN');
			stack.pop();
			stack.pop();
			stack.pop();
			stack.pop();
			expect(stack.peek()).eq(null);

		});
	})
});