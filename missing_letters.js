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

function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  var end = str.charCodeAt(str.length -1);
  var arrA = [];
  var arrB = [];
  for (var item in str){
      arrA.push(str.charCodeAt(item));
  }
  for (var i = start; i <= end; i += 1){
      arrB.push(i);
  }
  
  var result = diff(arrA,arrB);
  
  if (result.length){
    return String.fromCharCode(result);
  }else {
    return undefined;
  }
}

fearNotLetter("abce");