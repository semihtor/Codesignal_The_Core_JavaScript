function replaceMiddle(arr) {

  if(arr.length % 2 === 0){

    var middlePosition = Math.floor(arr.length / 2);
    var middleValue = arr[middlePosition] + arr[middlePosition - 1];
    arr.splice(middlePosition - 1, 2, middleValue);
  }
  
  return arr;
}
