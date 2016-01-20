function smallestCommons(arr) {
  arr.sort(function(a,b){
    return a - b;
  });
  
  var multiple = 1;
  var isTrue;
  var rangeArr = [];
  
  for (var i = arr[0]; i <= arr[1]; i+=1){
    rangeArr.push(i);
  }
  
  var isMultiple = function (multiple,){
    if (multiple % num === 0){
      return true;
    } else {
      return false;
    }
  };
    
  while (multiple){
    isTrue = rangeArr.map(isMultiple, multiple, num);
    
    if (isTrue === true){
      return multiple;
    }else{
      multiple += 1;
    }
  }
}


smallestCommons([1,5]);
