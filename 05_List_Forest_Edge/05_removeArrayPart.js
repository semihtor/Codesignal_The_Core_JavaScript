function removeArrayPart(inputArray, l, r) {

    var splicedArray = inputArray.splice(l, (r - l + 1));

    return inputArray;
}
