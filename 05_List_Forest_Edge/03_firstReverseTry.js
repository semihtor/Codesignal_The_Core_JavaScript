function firstReverseTry(arr) {
    
    if(arr.length < 2){

        return arr;
    }else{

        var firstElement = arr[0];
        var lastElement = arr[arr.length - 1];

        arr[0] = lastElement;
        arr[arr.length - 1] = firstElement;

        return arr;
    }
}
