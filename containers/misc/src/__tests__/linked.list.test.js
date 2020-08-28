//import { LList as LList } from '../LList';
const LList = require('../LinkedList');
require('mocha');
//require('chai');
//const { expect } = require('chai');
//const LList = require('../reference/LList');
const {
	should,
	expect
} = require('chai');
//FIFOcle

const createTestList = function () {
		const linkedList = new LList();
		linkedList.insert('ELEMENT 1', 'HEAD');
		linkedList.insert('ELEMENT 2', 'ELEMENT 1');
		linkedList.insert('ELEMENT 3', 'ELEMENT 2');
	return linkedList;
}
describe('LINKED LIST TESTS', () => {
	it.only('Can insert an element', () => {
		const linkedList = new LList();
		linkedList.insert('TEST VALUE','HEAD');
		console.debug('LINKED LIST AFTER INSERT', linkedList);
		const res = linkedList.find('TEST VALUE');
		console.debug('\r\n ------FOUND NODE', res);
		expect(res.length).eq(1);
		expect(res[0]).eq('TEST VALUE');
	});
	it('Finds an element', () => {
		const linkedList = createTestList();
		const node = linkedList.find('ELEMENT 2');
		console.debug(`------ FOUND NODE`,node);
		expect(node.prev).eq('ELEMENT 1')
	});
	it('Deletes an existing node', () => {
		const linkedList = createTestList();
		linkedList.remove('ELEMENT 1');
		linkedList.remove('ELEMENT 2');
		linkedList.remove('ELEMENT 3');
		expect(linkedList.last()).eq(null);
	});
	it('Does not error when no results exists', () => {
		const linkedList = createTestList();
		linkedList.remove();
		linkedList.remove();
		linkedList.remove();
		linkedList.remove();
		expect(linkedList.last()).eq(null);

	});

	/*
		--TEST - Create Node with complex values (Struct vs just strings or numbers
		--TEST - Find can handle primitives  as well as struct
		-- TEST GIGO for each function

	*/

})