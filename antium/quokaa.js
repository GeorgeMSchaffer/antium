//Write one Javascript statement on the indicated line that will make the printed number always be between 10 and 20. 


let x = 2; let y = 8;
const fna = function (b) {
	return function (c) {
		let res = y + Math.abs(b) + c;
		console.debug(`RES :`, res);
		return res;
	};
}; // Statement will go here const fn = a(x); x = 4; console.log(fn(Math.random() * 10)); * 
console.debug('????', fna(10));
// Statement will go here const fn = a(x); x = 4; console.log(fn(Math.random() * 10)); *
/*
console.log(` 1: ${fna(1)}`);
console.log(` 2: ${fna(2)}`);
console.log(`11: ${fna(11)}`);
console.log(` 44: ${fna(44)}`);
*/

//Write one Javascript statement on the indicated line that will mak//e the printed number always be between 10 and 20. let x = 2; let y = 8; 