function solution(num) {
	let romanLetters = [
		'M',
		'CM',
		'D',
		'CD',
		'C',
		'XC',
		'L',
		'XL',
		'X',
		'IX',
		'V',
		'IV',
		'I',
	];

	if (num == 0) {
		return '';
	}

	let currentNum = num;
	let newArr = [];

	// Substracting the number until 0 and pushing romanLetter from the list to the empty array

	// to use correct calculation i used addition checks for ever 4th and 9th to input correct romanLetter

	while (currentNum > 0) {
		if (currentNum >= 1000) {
			currentNum -= 1000;
			newArr.push(romanLetters[0]);
		} else if (currentNum >= 900) {
			currentNum -= 900;
			newArr.push(romanLetters[1]);
		} else if (currentNum >= 500) {
			currentNum -= 500;
			newArr.push(romanLetters[2]);
		} else if (currentNum >= 400) {
			currentNum -= 400;
			newArr.push(romanLetters[3]);
		} else if (currentNum >= 100) {
			currentNum -= 100;
			newArr.push(romanLetters[4]);
		} else if (currentNum >= 90) {
			currentNum -= 90;
			newArr.push(romanLetters[5]);
		} else if (currentNum >= 50) {
			currentNum -= 50;
			newArr.push(romanLetters[6]);
		} else if (currentNum >= 40) {
			currentNum -= 40;
			newArr.push(romanLetters[7]);
		} else if (currentNum >= 10) {
			currentNum -= 10;
			newArr.push(romanLetters[8]);
		} else if (currentNum >= 9) {
			currentNum -= 9;
			newArr.push(romanLetters[9]);
		} else if (currentNum >= 5) {
			currentNum -= 5;
			newArr.push(romanLetters[10]);
		} else if (currentNum >= 4) {
			currentNum -= 4;
			newArr.push(romanLetters[11]);
		} else if (currentNum >= 1) {
			currentNum -= 1;
			newArr.push(romanLetters[12]);
		}
	}
	// when num is 0 we have our new array with all letters & we using join('') method to return the result as a String

	console.log(newArr.join(''));
	return newArr.join('');
}

solution(6000); //   -----> MCMXCII
