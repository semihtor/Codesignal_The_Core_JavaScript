function countBlackCells(n, m) {

    if((n == 1) || (m == 1)){
        //for 1*x area
        return Math.max(n, m);
    }else if((n == m) && (n % 2 == 1) && (m % 2 == 1)){
        //for odd*odd square area
        return ((n - 1) * 3) + 1;
    }else if((n == m) && (n % 2 == 0) && (m % 2 == 0)){
        //for even*even square area
        return ((n * 2) + (n - 2));
    }else{

        return n + m - 1;
    }
}
