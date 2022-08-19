function countPositivesSumNegatives(input) {
	let positive = 0;
	let negative = 0;

	let newArray = [];

	if (input == null || input.length < 1) {
		return [];
	}

	for (let i = 0; i < input.length; i++) {
		let currentNum = Number(input[i]);

		if (currentNum < 0) {
			negative += currentNum;
		} else if (currentNum > 0) {
			positive++;
		} else {
			continue;
		}
		newArray = [positive, negative];
	}

	console.log(newArray);
}

countPositivesSumNegatives([0, 0]);
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);
countPositivesSumNegatives([
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
