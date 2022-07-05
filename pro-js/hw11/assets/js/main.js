const a = [1,2,3, 'hello',4,5];
const b = [1,2,3, true, 4, undefined, 6];

function maxArray(arr1, arr2) {
	if(arraySum(arr1) < arraySum(arr2)) {
		return arr2;
	}
	return arr1;
}

function arraySum(arr) {
	let sumResult = 0;
	for(let i = 0; i < arr.length; i++) {
		if(typeof(arr[i]) === 'number') {
		 	sumResult += arr[i];
		}
	}
	console.log(sumResult);
	return sumResult;
}

console.log(`sum of a is ${arraySum(a)} and sum of b is ${arraySum(b)}, so the winner is `, maxArray(a, b));


