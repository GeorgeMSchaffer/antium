'use strict'

const { Formatters } = require("tslint");

//import Foo from '../../misc/Foo';
const Foo = require('../../misc/Foo');
console.debug('FOO', Foo);

describe('FOO TEST', () => {
	it('WORKS', () => {
		//const foo = new Foo();
		expect(doEcho('TEST')).toBe('TEST');
	})
})