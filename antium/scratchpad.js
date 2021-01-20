/*
Write one Javascript statement on the indicated line that will make the printed number always be between 10 and 20. let x = 2; let y = 8; const a = function(b) { return function(c) { return x + y + Math.abs(b) + c; }; }; 
Statement will go here 
const fn = a(x); x = 4; console.log(fn(Math.random() * 10)); * 
*/

let x = 2; let y = 8; const a = function (b) {
		console.log('B IS', b);
	return function (c) {
		console.log('C IS', c);
		let res = x + y + Math.abs(b) + c;
		console.log('RES IS', res);
		return res;
	};
}; // Statement will go here 

//c = -10; //Technically overwritting a value such as y = 4 would work in quick and dirty way
x = 0; y = 6; //[HACK] Since X and Y are exposed we can just change them
//console.log('Y?', y);
const fn = a(x);
//console.log('FN()', fn(4));
x = 4; console.log('The Answer',fn(Math.random() * 10));;

/*
let x = 2; let y = 8;
const fna = function (b) {
	console.debug()
	return function (c) {
		let res = y + Math.abs(b) + c;
		console.debug(`RES :`, res);
		return res;
	};
}; // Statement will go here const fn = a(x); x = 4; console.log(fn(Math.random() * 10)); * 
console.debug('fna()()' (fna()()) ?  );
// Statement will go here const fn = a(x); x = 4; console.log(fn(Math.random() * 10)); *
/*
console.log(` 1: ${fna(1)}`);
console.log(` 2: ${fna(2)}`);
console.log(`11: ${fna(11)}`);
console.log(` 44: ${fna(44)}`);
*/

//Write one Javascript statement on the indicated line that will mak//e the printed number always be between 10 and 20. let x = 2; let y = 8; 