function isInfiniteProcess(a, b) {
    if(a === b){

        return false;
    }else if(a < b && ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0))){

        return false;
    }else{

        return true;
    }
}
