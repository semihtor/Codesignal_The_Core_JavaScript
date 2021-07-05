function isPower(n) {

    for (var i = 1; i < 100; i++) {

        for (var j = 2; j < 100; j++) {

            if (Math.pow(i, j) === n) {

                return true;
            }
        }
    }
    
    return false;
}
