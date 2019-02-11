let fizzbuzz_module = {}
fizzbuzz_module.fizzbuzz = function(limite) {
  var result = [];
    for(i = 1; i <= limite; i++) 
    {
        if (fizzbuzz_module.esFizz(i) && i % 5 === 0)
        {
          result.push("FizzBuzz");                  
        }
        else 
          if(fizzbuzz_module.esFizz(i))
          {
            result.push("Fizz");
          }
          else 
            if(i % 5 === 0)
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

console.log(fizzbuzz_module.fizzbuzz(12));
module.exports = fizzbuzz_module;






