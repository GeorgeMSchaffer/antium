'use strict'

export class Foo {
	constructor(props) {
		console.debug('FOO PROPS', props);
		this.data = [];
	}
	echo(str) {
		return str;
	}
}

export function doEcho(str) {
	console.debug('ECHOING', str);
	return str;	
}
module.exports = {
	Foo,
	doEcho
}
//export {Foo};