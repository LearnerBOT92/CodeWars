function getCount(str) {
	let word = str;
	let split = word.split('');
	let length = split.length;
	let letterCounter = 0;
	for (let i = 0; i < length; i++) {
		let letter = split[i];
		console.log(letter);

		if (letter === 'a') {
			letterCounter++;
		} else if (letter === 'e') {
			letterCounter++;
		} else if (letter === 'i') {
			letterCounter++;
		} else if (letter === 'o') {
			letterCounter++;
		} else if (letter === 'u') {
			letterCounter++;
		} else {
			continue;
		}
	}
	return letterCounter;
}

getCount('abracadabra');
