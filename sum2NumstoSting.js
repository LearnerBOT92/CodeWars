function add(a, b) {
	let aNum = Number(a);
	let bNum = Number(b);

	let res = aNum + bNum;
	console.log(res);
	console.log(res.toLocaleString('fullwide', { useGrouping: false }));
}

// add('1', '1');
// add('63829983432984289347293874', '90938498237058927340892374089');

//     '910023282204919 11630239667963' 910023282204919 20000000000000

/*

Example


longnumberstring: 1456789123456 000000000000000000
to Number: 1.456789123456 e+30


*/
