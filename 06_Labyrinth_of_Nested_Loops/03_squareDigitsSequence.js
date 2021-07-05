function squareDigitsSequence(a0){

    var numberObject = {};
    var numberArray = [a0];
    
    for(var i=0; i<numberArray.length; i++){

        if(!numberObject[numberArray[i]]){

            var tempArray = JSON.stringify(numberArray[i]).split("");
            var tempNumber  = tempArray.map(Number).map((a)=>a*a).reduce((a,b)=>a + b);
            //console.log(tempNumber)
            //console.log(tempArray)
            numberArray.push(tempNumber);
            numberObject[numberArray[i]] = 1;
        }else{

            return numberArray.length;
        }
    }
    
    return numberArray;
}
