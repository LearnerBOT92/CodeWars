function scramble(str1, str2) {
	let index = 0;
	let len = str2.length;
	let savedIndexes = {};
	let isMatch = false;
	while (index < len) {
		let letter = str2[index];
		let startingLetterIndex = savedIndexes[letter] + 1 || 0;
		let matchIndex = str1.indexOf(letter, startingLetterIndex);

		isMatch = matchIndex > -1;

		if (!isMatch) break;
		index++;
		savedIndexes[letter] = matchIndex;
	}

	return isMatch;
}

scramble('rkqodlw', 'world');
// scramble('cedewaraaossoqqyt', 'codewars');

/* 




*/
