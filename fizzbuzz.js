let fizzbuzz_module = {}
fizzbuzz_module.fizzbuzz = function(limite) {
  var result = [];
    for(i = 1; i <= limite; i++) 
    {
        if (fizzbuzz_module.esFizz(i) && fizzbuzz_module.esBuzz(i))
        {
          result.push("FizzBuzz");                  
        }
        else 
          if(fizzbuzz_module.esFizz(i))
          {
            result.push("Fizz");
          }
          else 
            if(fizzbuzz_module.esBuzz(i))
            {
              result.push("Buzz");
            }
            else
              result.push(i.toString());
    }
    return result;
}
fizzbuzz_module.esFizz = function(numero){
  if(numero%3 === 0){
    return true;
  }else{
    return false;
  }
}

fizzbuzz_module.esBuzz = function(numero){
  if(numero%5 === 0){
    return true;
  }else{
    return false;
  }
}

console.log(fizzbuzz_module.fizzbuzz(12));
module.exports = fizzbuzz_module;






