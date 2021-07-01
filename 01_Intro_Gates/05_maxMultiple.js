function maxMultiple(divisor, bound) {

    for(var i = bound; i > 1; i--){

        if(i % divisor == 0){

            return i;
        }
    }
}
