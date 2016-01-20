function diff(arr1, arr2, arr3) {
  var longArray1 = arr1.concat(arr2, arr3);
  var longArray2 = arr1.concat(arr2, arr3);
  var longArray3 = arr1.concat(arr2, arr3);
  var firstArray = arr1;
  var secondArray = arr2;
  var thirdArray = arr3;
  var compare = function(value) {
    return value == this;
  };   
  for (var i = longArray1.length -1; i >= 0; i -= 1){ 
      longArray1 = longArray1.filter(compare, firstArray[i]);
      console.log(longArray1);
  } 
    for (var j = longArray2.length -1; j >= 0; j -= 1){ 
      longArray2 = longArray2.filter(compare, secondArray[j]);
    }
    for (var k = longArray3.length -1; k >= 0; k -= 1){ 
      longArray3 = longArray3.filter(compare, thirdArray[k]);
    }
return longArray1.concat(longArray2, longArray3);
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);