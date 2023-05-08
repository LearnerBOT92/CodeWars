function squareDigits(num) {
	let currentNums = String(num).split('');
	let resultStr = '';

	for (let i = 0; i < currentNums.length; i++) {
		let squaredNum = currentNums[i] * currentNums[i];
		resultStr += squaredNum;
	}

	return Number(resultStr);
}

squareDigits(3212);

function highAndLow(numbers) {
	console.log(numbers);
}

highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4');
