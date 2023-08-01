function triangle(f, i) {
	console.log(i + '.');
	for(let i=0; i<5; i++) {
		for(let j=0; j<5; j++) {
			if(f(i, j))
				process.stdout.write("*");
			else
				process.stdout.write(" ");
		}
		console.log();
	}
	
}

triangle((i, j) => i>=j, 1);

triangle((i, j) => i<=j, 2);

triangle((i, j) => i+j<=4, 3);

triangle((i, j) => i+j>=4, 4);

triangle((i, j) => i==0||i==4||j==0||j==4, 5);

triangle((i, j) => i==j || i+j == 4, 6);
