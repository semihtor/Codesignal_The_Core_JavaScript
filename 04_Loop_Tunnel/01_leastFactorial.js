function leastFactorial(n) {

    var i = 1;
    var factorial = 1;

    while (factorial < n) {

        factorial *= ++i;
    }

    return factorial;
}
