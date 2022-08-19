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
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});
*/
