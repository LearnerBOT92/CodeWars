function likes(names) {
	let input = names.length;

	if (input <= 0) {
		return 'no one likes this';
	} else if (input === 1) {
		return `${names[0]} likes this`;
	} else if (input === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (input === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		let diff = input - 2;
		return `${names[0]}, ${names[1]} and ${diff} others like this`;
	}
}

likes([]);
likes(['Peter']);
likes(['Jacob', 'Alex']);
likes(['Max', 'John', 'Mark']);
likes(['Alex', 'Jacob', 'Mark', 'Max']);
