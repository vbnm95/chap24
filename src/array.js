import { sprintf } from "sprintf-js";

/*
let arr = [
	[1,2,3,4,5],
	['A', 'B', 'C', 'D', 'E']
];

console.log(arr);
console.table(arr);

let tarr = new Array(10);
for(let i=0; i<tarr.length; i++) {
	tarr[i] = new Array(3).fill(0);
}

tarr[2][2] = 'A';

console.table(tarr);
*/

const rect = new Array(10);
for(let i=0; i<rect.length; i++) {
	rect[i] = new Array(10).fill(0);
}

let count = 0;
let ijSet = new Set(); 

while(true) {
	let i = parseInt(Math.random()*10);
	let j = parseInt(Math.random()*10);

	rect[i][j] = 1;
	ijSet.add(sprintf("%02d:%02d", i, j));
	count++;

	if(ijSet.size == 100)
		break;
}

console.log("count =" + count);
console.table(rect);

