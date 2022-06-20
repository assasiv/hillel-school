let a = +prompt('Enter the number a:');
let b = +prompt('Enter the number b:');
let h = +prompt('Enter the number h:');


while (!a || !b || !h || isNaN(a) || isNaN(b) || a >= b) {
    if(!a || isNaN(a)) {
        a = prompt(`Error accured, a is non a number, please repeat`);
    } else if (!b || isNaN(b)) {
        b = prompt(`Error accured, b is non a number, please repeat`);
    }  else if (!h || isNaN(h)) {
        h = prompt(`Error accured, h is non a number, please repeat`);
    } else if ( a >= b) {
        b = prompt(`Enter the number b bigger than ${a}`);
    }
}
alert("good gob, the data is valid");

console.log('a=',a, 'b=',b, 'h=',h);

let sum = 0;

for(i = a; i <= b; i = i + h) {
    let multiple = 1;
    let n = i;
    for(n = 1; n <= i; n++){
        multiple *= n;
    }
    sum = sum + multiple;
}

console.log('sum = ', sum);




 
