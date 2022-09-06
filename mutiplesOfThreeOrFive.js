function solution(number) {
	let newArr = [];

	let endPoint = number;

	for (let i = 1; i < endPoint; i++) {
		let currentNum = number - i;

		if (currentNum % 3 === 0 || currentNum % 5 === 0) {
			newArr.push(currentNum);
		}
	}

	let result = 0;

	for (let j = 0; j < newArr.length; j++) {
		let newNum = Number(newArr[j]);
		result += newNum;
	}

	return result;
}

solution(10);
