function isPangram(string) {
	let alphabet = new Set('abcdefghijklmnopqrstuvwxyz');

	for (let str of string) {
		// destructuring string
		alphabet.delete(str.toLowerCase()); // check if letter from string matching from alphabet and delete from alphabet
	}

	if (alphabet.size == 0) {
		return true; // the the size of alphabet is empty String is Pangram
	} else {
		return false;
	}
}

// isPangram('This is not a pangram.');
isPangram('Cwm fjord bank glyphs vext quiz');

/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/
