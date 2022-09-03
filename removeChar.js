function removeChar(str) {
	let newArr = str.split('');

	let res = newArr.slice(1, -1);

	return res.join('');
}

removeChar('eloquent');
