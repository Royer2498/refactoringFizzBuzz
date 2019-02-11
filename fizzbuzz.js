let moduloFizzBuzz = {}

moduloFizzBuzz.fizzBuzz = function(limite) {
  var result = [];
    for(i = 1; i <= limite; i++) {
      result.push(moduloFizzBuzz.calcularTerminoDeLaSecuencia(i));
    }
    return result;
}

moduloFizzBuzz.calcularTerminoDeLaSecuencia = function(numero){
  var terminoResultado = "";
  if(moduloFizzBuzz.esFizz(numero)){
    terminoResultado = terminoResultado + "Fizz";
  }
  if(moduloFizzBuzz.esBuzz(numero)){
    terminoResultado = terminoResultado + "Buzz";
  }
  if(terminoResultado == ""){
    terminoResultado = numero.toString();
  }
  return terminoResultado;
}

moduloFizzBuzz.esFizz = function(numero){
  if(numero%3 === 0){
    return true;
  }else{
    return false;
  }
}

moduloFizzBuzz.esBuzz = function(numero){
  if(numero%5 === 0){
    return true;
  }else{
    return false;
  }
}

console.log(moduloFizzBuzz.fizzBuzz(12));
module.exports = moduloFizzBuzz;






