function countSumOfTwoRepresentations2(n, l, r) {
    
    // l = alt sınır
    // r = üst sınır
    
    var sum = 0;

    for(var i = l; i <= r; i++){

        var  j = n - i;

        if(j >= l && j <= r && j >= i){

            sum++;
        }
    }
    
    return sum;
}
