let moduloFizzBuzz = {}

moduloFizzBuzz.fizzBuzz = function(limiteDeLaSecuencia) {
  var secuenciaResultado = [];
    for(termino = 1; termino <= limiteDeLaSecuencia; termino++) {
      secuenciaResultado.push(moduloFizzBuzz.calcularTerminoDeLaSecuencia(termino));
    }
    return secuenciaResultado;
}

moduloFizzBuzz.calcularTerminoDeLaSecuencia = function(numero){
  var terminoResultado = "";
  terminoResultado = terminoResultado + moduloFizzBuzz.esFizz(numero) + moduloFizzBuzz.esBuzz(numero);
  if(terminoResultado == ""){
    terminoResultado = numero.toString();
  }
  return terminoResultado;
}

moduloFizzBuzz.esFizz = function(numero){
  if(numero%3 === 0){
    return "Fizz";
  }else{
    return "";
  }
}

moduloFizzBuzz.esBuzz = function(numero){
  if(numero%5 === 0){
    return "Buzz";
  }else{
    return "";
  }
}

module.exports = moduloFizzBuzz;






