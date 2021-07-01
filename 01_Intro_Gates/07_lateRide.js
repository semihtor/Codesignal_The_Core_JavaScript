function lateRide(n) {
    
    var hours = Math.floor(n / 60);
    var minutes = n % 60;

    return (hours % 10) + Math.floor(hours / 10) + (minutes % 10) + Math.floor(minutes / 10);

}
