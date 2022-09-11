function reverseWords(str) {
	let strArr = str.split(' ');
	let newArr = [];

	for (let i = strArr.length - 1; i >= 0; i--) {
		let currentWord = strArr[i];
		newArr.push(currentWord);
	}

	let finalStr = '';

	for (let j = 0; j < newArr.length; j++) {
		if (j > 0) {
			finalStr += ' ' + newArr[j];
		} else {
			finalStr += newArr[j];
		}
	}
	console.log(finalStr);
}

reverseWords('hello world!');
