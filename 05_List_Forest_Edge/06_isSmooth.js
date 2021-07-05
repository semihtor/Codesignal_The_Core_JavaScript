function isSmooth(arr) {

  var middlePosition = Math.floor(arr.length / 2);
  var middleValue = arr[middlePosition] + (arr.length % 2 ? 0 : arr[middlePosition - 1]);
  return arr[0] === middleValue && middleValue === arr[arr.length - 1];
}
