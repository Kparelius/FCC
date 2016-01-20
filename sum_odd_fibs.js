function sumFibs(num) {
  var foo = num;
  if (num == 1){
    return 1;
  }  
  
  var fib = [1,1];
  var total = 0;
  
  var makeFib = function (limit){
    while (fib[fib.length-1] <= limit){
      var temp = fib[fib.length -1] + fib[fib.length -2];
        if (temp <= limit){
          fib.push(temp);
        }else{
          return;
        }
      }
    }; 
  
  var addOdds = function(){
    for (var item in fib){
          if (fib[item] % 2 !== 0){
              total = total + fib[item];
          }
       }
  };
  
  makeFib(foo);
  
  addOdds();
  
  console.log(total);
  console.log(fib);
  return total;
}
sumFibs(1000);