function isSumOfConsecutive2(n) {

    var count = 0;
    for(var i = 1; i < n; i++){

        var sum = i, j = 1;

        while(sum < n){

            sum = sum + i + j;
            j++;
        }
        if(sum == n){
            count++;
        }
    }
    
    return count;
}
