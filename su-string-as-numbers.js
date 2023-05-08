function sumStrings(a, b) {
	let num1 = BigInt(Number(a));
	let num2 = BigInt(Number(b));
	let result = String(num1 + num2);
	console.log(String(num1), num2);
	console.log(result);
}

console.log(
	sumStrings('712569312664357328695151392', '8100824045303269669937')
);

//712577413488402631964821329
