let beeramid = function (bonus, price) {
	let numBeers = bonus / price;
	let cansLeft = numBeers;
	let numLevels = 0;
	if (bonus > price) {
		for (let i = 1; i <= numBeers; i++) {
			let thisLevel = i * i;
			if (cansLeft >= thisLevel) {
				cansLeft -= thisLevel;
				numLevels++;
			} else {
				console.log(numLevels);
				return numLevels;
			}
		}
	} else if (numBeers == 1) {
		console.log(numBeers);
		return numBeers;
	} else {
		console.log(0);
		return 0;
	}
};

beeramid(21, 1.5); //3
