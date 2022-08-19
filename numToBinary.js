function fakeBin(x) {
	let replace = x.replace(/[0-4]/g, 0).replace(/[5-9]/g, 1);
	console.log(replace);
	return replace;
}
fakeBin('45385593107843568');
