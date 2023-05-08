function highAndLow(numbers) {
	let filtered = numbers.split(' ');

	let low = 0;
	let high = 0;

	for (let i = 0; i < filtered.length; i++) {
		let currentNum = Number(filtered[i]);

		low = currentNum;

		for (let j = i; j <= filtered.length; j++) {
			let comparisonNum = Number(filtered[j]);

			if (currentNum > comparisonNum && currentNum > high) {
				high = currentNum;
			} else {
				if (currentNum < low) {
					low = currentNum;
				}
			}
		}
	}

	console.log(high, low);
	return `${high} ${low}`;
}

// highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4');

highAndLow('1 2 3');

highAndLow('10 2 -1 -20');

/*

if (currentNum > high) {
				high = currentNum;
				if (currentNum > comparisonNum) {
					high = currentNum;
				}
			} else if (currentNum < comparisonNum) {
				if (currentNum < low || currentNum == 1) {
					low = currentNum;
				}
			}

*/
