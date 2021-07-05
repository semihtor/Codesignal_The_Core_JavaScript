function candles(candlesNumber, makeNew) {
    
    var leftOver = candlesNumber;
    
    while(leftOver >= makeNew){
        
        var newCandle = Math.floor(leftOver / makeNew);
        candlesNumber += newCandle;
        leftOver = newCandle + leftOver % makeNew;   
    }
    
    return candlesNumber;

}
