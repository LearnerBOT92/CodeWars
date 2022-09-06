function arrayManip(array) {
	let result = [];

	for (let i = 0; i < array.length; i++) {
		let greaterNum = -1;

		for (let j = i + 1; j < array.length; j++) {
			if (array[j] > array[i]) {
				if (greaterNum == -1 || array[j] < greaterNum) {
					greaterNum = array[j];
				}
			}
		}

		result.push(greaterNum);
	}

	console.log(result);
	return result;
}

arrayManip([2, 4, 18, 16, 7, 3, 9, 13, 18, 10]);
// result  [3, 7, -1, 18, 9, 9, 10, 18, -1, -1]

/*
Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array

*/
