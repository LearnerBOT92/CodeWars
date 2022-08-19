function moveZeros(arr) {
	let newArr = [];
	let zeroArr = [];
	for (let i = 0; i < arr.length; i++) {
		let currentNum = arr[i];

		if (currentNum === 0) {
			zeroArr.push(currentNum);
		} else {
			newArr.push(currentNum);
		}
	}

	let result = newArr.concat(zeroArr);

	return result;
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
