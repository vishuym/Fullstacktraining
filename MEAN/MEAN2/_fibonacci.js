var recursive=function (n) {
	// body...
	if (n<=2) {
		return 1;
	}else{
		return recursive(n-1)+recursive(n-2);
	}
};

console.log(recursive(42));