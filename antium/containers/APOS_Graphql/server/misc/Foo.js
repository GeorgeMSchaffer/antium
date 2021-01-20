//'use strict'

class Foo {
	constructor(props) {
		console.debug('FOO PROPS', props);
		this.data = [];
	}
	echo(str) {
		return str;
	}
}

function doEcho(str) {
	console.debug('ECHOING', str);
	return str;
}
/*
module.exports = {
	Foo,
	doEcho
}
*/
module.exports = { Foo, doEcho };