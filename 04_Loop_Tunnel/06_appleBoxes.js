function appleBoxes(k) {
	
	var yellowApples = 0; //odd boxes
	var redApples = 0; //even boxes
	
	for(var i = 1; i < (k + 1); i++){
		
		if(i%2 != 0){
			yellowApples += (i * i);
		}else{
			redApples += (i * i);
		}
	}
    
	return redApples - yellowApples;
}
