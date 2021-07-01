function rangeBitCount(a, b) {

    var sum = 0;
	
    for(var i = a; i <= b; i++){

		var array = i.toString(2).split('');
		
		for(var j = 0; j < array.length; j++){
			
			if(array[j] == '1'){
			
				sum++;
			}
		}
    }
	
	return sum;
}
