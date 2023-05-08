function countPhotos(road) {
	let roadArr = road.split('');

	let result = 0;

	for (let i = 0; i < roadArr.length; i++) {
		if (roadArr[i] == '<') {
			for (let j = i; j !== -1; j--) {
				if (roadArr[j] == '.') {
					result++;
				}
			}
		} else if (roadArr[i] == '>') {
			for (let g = i; g < roadArr.length; g++) {
				if (roadArr[g] == '.') {
					result++;
				}
			}
		}
	}

	return result; // current test is correct up to 10,000 length of a array
}

function countPhotos(road) {
	let roadLength = road.length;

	let array = road;

	let indexCount = 0;

	let result = 0;

	for (let i = 0; i < roadLength; i++) {
		indexCount = i;
		let currentCheck = array[indexCount];

		if (currentCheck == '<') {
			left(currentCheck);
		} else if (currentCheck == '>') {
			right(currentCheck);
		}
	}

	function left(input) {
		if (String(input) == '<') {
			let arrayOfDots = array.slice(0, indexCount).split('');

			let filter = arrayOfDots.filter(isDot);

			result += filter.length;
		}
	}

	function right(input) {
		if (String(input) == '>') {
			let arrayOfDots = array.slice(indexCount, roadLength).split('');

			let filter = arrayOfDots.filter(isDot);

			result += filter.length;
		}
	}

	function isDot(input) {
		return input == '.';
	}

	return result;
}

// Final resolution

function countPhotos(road) {
	let cameras = 0;
	let cars = 0;
	let photos = 0;

	for (let i = 0; i < road.length; i++) {
		if (road[i] == '>') cars++;

		if (road[i] == '.') {
			cameras++;
			photos += cars;
		}

		if (road[i] == '<') photos += cameras;
	}

	return photos;
}

countPhotos('.><.>>.<<');
