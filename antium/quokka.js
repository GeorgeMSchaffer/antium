// SCRATCHPAD FILE FOR REPL

// ARRAY OF UNIQUES FROM AN ORDERED ARRAY 
/*
const nums = [1,1,2,2,3,3,6];
const results =[];
console.debug('STARTED')

nums.forEach((num,idx)=>{
    console.debug(`INDEX ${idx} NUMS[IDX] ${nums[idx]},${nums[idx+1]} RESULT ${(nums[idx] !== nums[idx+1])}`);
    if(nums[idx] !== nums[idx+1]){
      results.push(nums[idx]);
    }
});
console.debug('COMPLETED',results);

const palindrome = 'live';


*/
function isPalionDrome(str){
    str = str.replace(/[^a-z0-9+]+/gi, '');
    console.debug('STRIPPED STRING',str);
    let topIdx = str.length -1;
    let idx = 0;
    while(topIdx > idx){
      console.debug(`topIdx : ${topIdx} Letter ${str[topIdx]} vs idx ${idx} Letter ${str[idx]}`)
      //
      //NEED to Handle paliondrome senteces -- Try removing Non alpha numeric numer
      if(str[idx].toLowerCase() !== str[topIdx].toLowerCase()){
        console.warn('MISS MATCH!',str[idx] , 'vs',str[topIdx]);
        return false;
      }
      idx++;
      topIdx--;
    }
    return true;
}
//console.debug('SHOULD RETURN TRUE:', isPalionDrome('Anna'));
//console.debug('SHOULD RETURN FALSE:', isPalionDrome('George'));
//console.debug('SHOULD RETURN TRUE:', isPalionDrome('Dammit, Im Mad'));
//console.debug('SHOULD RETURN TRUE:', isPalionDrome('DammitImMad'));

/* EXAMPLW BUBBLE SORT 
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};
*/

function bubbleSort(inputArr) {
	console.debug(`BUBBLE STARTING WITH`, inputArr);
	let swap = false;
	const len = inputArr.length;
	let idx = 0;

	do {
    for (let i = 0; i < len; i++) {
      console.debug(`INDEX ${i}`);
			if (inputArr[i] > inputArr[i + 1]) {
				let tmp = inputArr[i];
				inputArr[i] = inputArr[i + 1];
				inputArr[i + 1] = tmp;
				swapped = true;
			}
		}
	} while (swapped);
	console.debug('RESULT', arr);
	return inputArr;
}

const unsorted = [1, 9, 10, 2, 5, 100, 66, 44];

let bubbleSortExample = (inputArr) => {
	let len = inputArr.length;
  let swapped;
  //Do Until current element is higher thant the next element
  //This saves us the trouble of check for out of array conditions ie arr[(idx+1)]
	do {
		swapped = false;
		for (let i = 0; i < len; i++) {
			if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        console.debug(`MATCH TEMP IS ${tmp} on INDEX ${i}`);
				inputArr[i] = inputArr[i + 1];
				inputArr[i + 1] = tmp;
				swapped = true;
			}
		}
  } while (swapped);
  console.debug('FINISHED',inputArr)
	return inputArr;
};
const sorted = bubbleSortExample(unsorted);
console.debug(`BUBBLE SORT IS RETURNING`, bubbleSortExample(unsorted));

/* Notes 
  What is a closure 
    Inner function that has access in three scopes
      * Its own - the inner function name(params) 
      * Variables in the outer function 
      * Variables in the global scope 
      * 
      * Closure has access to its own variables and outter
      }
own scope
*/
function closure() {
  const outter = 'Outter Variable';
  function innerFunction() {
    const inner = 'Inner variable';
    console.log(`HAS ACCES to Outter ${outter}, Inner ${inner}`);
  }
}

/* 
  Function hoisting is where JS moves the variables to the const mapDispatchToProps = (dispatch, ownProps) => {
    hence a var in the bottom will be available on the top
  */

var myCar = {
    color: 'Blue',
    logColor : function () {
      var self = this;
        console.log('Function this.color', this.color);
        console.log('Function self.color', self.color);

      (function () {
        /*
         We are inside IIFE which is a function and does not have access to the this scope
         the this keyword inside a function REFERENCES THE GLOBAL SCORE 
        */
        console.log('IIFE Function this.color', this.color);
        console.log('IIFE Function self.color', self.color);
      })();
    }
}
myCar.logColor();

//HOISTING AND THIS SCOPE

var num = 50;
function logNumber() {
  //at complation
  console.log('LOG NUMBER', n);
  num = 100;
}
/*
logNumber();
  Results in undefined because num is hoisted to the top like this 
      ...
      var num;
      THE VARIABLE IS FUNCTION HOISTED
      console.log(num);
      num = 100

 */

 // FUNCTION QUERYING -- Reduces multiple arguments to outline: 


function getTravelTime(distance,speed) {
  return distance / speed;
};
console.debug('GET TRAVEL TIME getTravelTime(400, 50)', getTravelTime(400, 50));

function getCurriedTravelTime(distance) {
	return function (speed) {
		return distance / speed;
	};
}
// SINCE THE DISTANCE IS KNOW IN ADVANCE WE CAN WRITE A FUNCTION THAT RETURNS ANOTHER FUNCTION EXECUTE
const travelTimeBosNyc = getTravelTime(400);

console.log('CURRED VERSION', travelTimeBosNyc(100));

/* INSERTION SORTS
Insertion sort runs in O(n²), or quadratic, time in the worst case
 it usually outperforms more advanced algorithms such as quick sort or merge sort on smaller lists.
  It’s best case run time is O(n), or linear, which occurs if the input array is already sorted.
    SO USE INSERTION WITH AN ALREADY SORTED ARRAYS
      Moves by moving items from left to right in a list 
      The current item is the "key" it will sorted
*/

let insertionSort = (inputArr) => {
let length = inputArr.length;
for (let i = 1; i < length; i++) {
  let key = inputArr[i];
  let j = i - 1;
  while (j >= 0 && inputArr[j] > key) {
    inputArr[j + 1] = inputArr[j];
    j = j - 1;
  }
  inputArr[j + 1] = key;
}
return inputArr;
};

insertionSort(unsorted);