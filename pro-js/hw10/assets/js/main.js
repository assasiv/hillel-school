function main(a = 2, b = 3, c) { 
	if(typeof(c) === 'function') {
		return c(sum(a, b));
	}else {
		return sum(a, b);
	}
}

function sum(a, b) { 
    return a + b; 
}

function plus50(a) {
	return a + 50;
}

console.log(main(15, 50, plus50));
console.log(main(15, 50, 1));