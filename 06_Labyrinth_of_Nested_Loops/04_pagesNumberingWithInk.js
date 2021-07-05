function pagesNumberingWithInk(current, numberOfDigits) {

    var numberOfPages = 0;
    var outOfInk = false;
    var startPage = current;

    while(!outOfInk){

        var digitsInCurrent = current.toString().length;
        numberOfDigits = numberOfDigits - digitsInCurrent;

        if(numberOfDigits < 0){
        
            outOfInk = true;
        }else{

            current = current + 1;        
            numberOfPages = numberOfPages + 1;
            //console.log("numberOfPages: " + numberOfPages);
        }        
    }

    return startPage + numberOfPages - 1;
}
