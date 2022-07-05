const arr1 = [1, 15, 24];

function copy(arr, func=function(val) {return val;}) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}

const arr2 = copy(arr1);
const arr3 = copy(arr1, function(value){ return value*10; });
console.log(arr2, arr3);