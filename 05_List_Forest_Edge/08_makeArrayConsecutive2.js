function makeArrayConsecutive2(statues) {

    //var compArrLength = Math.max(...statues) - Math.min(...statues);

    var comparisonArray = new Array(Math.max(...statues) - Math.min(...statues) + 1);
    
    for(var i = 0; i < comparisonArray.length; i++){

        comparisonArray[i] = i + Math.min(...statues);
    }

    console.log(comparisonArray);
    return comparisonArray.length - statues.length;
}
