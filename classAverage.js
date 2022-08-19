function betterThanAverage(classPoints, yourPoints) {
	let totalScore = 0;
	for (let i = 0; i < classPoints.length; i++) {
		totalScore += classPoints[i];
	}
	let averageScore = totalScore / classPoints.length;

	if (yourPoints > averageScore) {
		return true;
	} else {
		return false;
	}
}

betterThanAverage([2, 3], 5);
