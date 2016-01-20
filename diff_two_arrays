function diff(arr1, arr2) {
  var longArray1 = arr1.concat(arr2);
  var longArray2 = arr1.concat(arr2);
  var firstArray = arr1;
  var secondArray = arr2;
   
  var compare = function(value) {
    return value != this;
  }; 
  
  for (var i = longArray1.length -1; i >= 0; i -= 1){ 
      longArray1 = longArray1.filter(compare, firstArray[i]);
  }
  
    for (var j = longArray2.length -1; j >= 0; j -= 1){ 
      longArray2 = longArray2.filter(compare, secondArray[j]);
    }
    
return longArray1.concat(longArray2);
}

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);