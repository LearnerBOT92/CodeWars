function maxMultiple(divisor, bound) {
	let arr = [];

	for (let num = 1; num <= bound; num++) {
		let result = num;
		if (result % divisor === 0) {
			if (result <= bound) {
				arr.push(result);
			} else {
				break;
			}
		}
		maxMultiple(10, 50);
	}
	console.log(arr);
	console.log(arr.pop());
	return Number(arr.pop());
}

maxMultiple(2, 7); //6
maxMultiple(3, 10);
maxMultiple(10, 50);
