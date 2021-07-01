function arrayPacking(a){

	for(var i = 0; i < a.length; i++){
	
		a[i] = a[i].toString(2).padStart(8,'0');
	}

	return parseInt(a.reverse().join(''),2);
}
