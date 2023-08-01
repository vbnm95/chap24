let a = 1;
{
	let a = 2;
	{
		let a = 3;
		{
			let a = 4;
			console.log(a);
		}
		console.log(a);
	}
	console.log(a);
}
console.log(a);