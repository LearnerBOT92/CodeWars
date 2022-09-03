function SubtractSum(n) {
	let listOfFruits = [
		'',
		'kiwi',
		'pear',
		'kiwi',
		'banana',
		'melon',
		'banana',
		'melon',
		'pineapple',
		'apple',
		'pineapple',
		'cucumber',
		'pineapple',
		'cucumber',
		'orange',
		'grape',
		'orange',
		'grape',
		'apple',
		'grape',
		'cherry',
		'pear',
		'cherry',
		'pear',
		'kiwi',
		'banana',
		'kiwi',
		'apple',
		'melon',
		'banana',
		'melon',
		'pineapple',
		'melon',
		'pineapple',
		'cucumber',
		'orange',
		'apple',
		'orange',
		'grape',
		'orange',
		'grape',
		'cherry',
		'pear',
		'cherry',
		'pear',
		'apple',
		'pear',
		'kiwi',
		'banana',
		'kiwi',
		'banana',
		'melon',
		'pineapple',
		'melon',
		'apple',
		'cucumber',
		'pineapple',
		'cucumber',
		'orange',
		'cucumber',
		'range',
		'grape',
		'cherry',
		'apple',
		'cherry',
		'pear',
		'cherry',
		'pear',
		'kiwi',
		'pear',
		'kiwi',
		'banana',
		'apple',
		'banana',
		'melon',
		'pineapple',
		'melon',
		'pineapple',
		'cucumber',
		'pineapple',
		'cucumber',
		'apple',
		'grape',
		'orange',
		'grape',
		'cherry',
		'grape',
		'cherry',
		'pear',
		'cherry',
		'apple',
		'kiwi',
		'banana',
		'kiwi',
		'banana',
		'melon',
		'banana',
		'melon',
		'pineapple',
		'apple',
		'pineapple',
	];

	let result = 0;

	if (n >= 10 && n < 10000) {
		let nToStr = String(n); // return given num to string

		for (let i = 0; i < nToStr.length; i++) {
			// loop the string to find the sum on the Num
			let num = Number(nToStr[i]);
			result += num;
		}

		let finalRes = n - result; // the result is Given Num minus the new Num

		if (finalRes <= 100 && finalRes > 0) {
			// if Num is within the range of the list return the Fruit from the Array
			console.log(listOfFruits[finalRes]);
			return listOfFruits[finalRes];
		} else {
			let resToStr = String(finalRes).split(''); // split FinalRes so we can loop trough the Nums

			while (finalRes > 100) {
				// while the finalRes is higher loop - to continuously loop until in range of <= 99
				for (let j = 0; j < resToStr.length; j++) {
					// else loop trough the finalRes and Minus until is within the range
					let num = Number(resToStr[j]);
					finalRes -= num;
					if (finalRes <= 100) {
					}
					return listOfFruits[finalRes];
				}
			}
		}
	}
}

SubtractSum(101); // 'apple';

// ------------------------------------------------------------------------------
