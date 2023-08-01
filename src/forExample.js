let arr = new Array(10);

for(let i=0; i<arr.length; i++) {
	arr[i] = parseInt(Math.random()*100);
}

for(let i in arr)
	process.stdout.write(arr[i] + ',');

console.log()

for(let i of arr)
	process.stdout.write(i + ',');