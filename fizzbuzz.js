let fizzbuzz_module = {}
fizzbuzz_module.fizzbuzz = function(limite) {
  var result = [];
    for(i = 1; i <= limite; i++) 
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
          result.push("FizzBuzz");                  
        }
        else 
          if(i % 3 === 0)
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
console.log(fizzbuzz_module.fizzbuzz(12));
module.exports = fizzbuzz_module;






