function count(str) {
	let strSplit = str.split('');

	let aCount = 0;
	let bCount = 0;

	if (strSplit.length === 0) {
		let empty = {};
		return empty;
	}

	for (let i = 0; i < strSplit.length; i++) {
		let newStr = strSplit[i];
		if (newStr === 'a') {
			aCount++;
		} else if (newStr === 'b') {
			bCount++;
		}
	}

	let result = {
		a: aCount,
		b: bCount,
	};

	if (result.a === 0) {
		result = {
			b: bCount,
		};
	} else if (result.b === 0) {
		result = {
			a: aCount,
		};
	}

	// console.log(result);
	return result;
}

count('aa');
