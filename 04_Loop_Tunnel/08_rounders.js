function rounders(n) {
    
    var c = 0
    var round = '';
    
    while(n>9){
        
        c = ((n % 10) + c >= 5) ? 1 : 0;
        n = Math.floor(n / 10);
        round = 0 + round;
    }
    
    return Number((c + n) + round);

}
