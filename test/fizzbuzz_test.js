var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
const fizzbuzz_module = require('../fizzbuzz');

describe('fizzbuzzTest',function(){

  it('para una secuencia hasta el 5 deberia devolver [1,2,Fizz,4,Buzz]',function(){
    var fizzBuzzResult = fizzbuzz_module.fizzBuzz(15);
    var result = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"];
    expect(fizzBuzzResult).to.have.ordered.members(result);
  })
  
  describe('#para la funcion esFizz',function(){
    it('para un numero que es divisible entre tres deberia devolver Fizz',function(){
      var fizzBuzzResult = fizzbuzz_module.esFizz(6);
      expect(fizzBuzzResult).equals("Fizz");
    })

    it('para un numero que no es divisible entre tres deberia devolver una cadena vacia',function(){
      var fizzBuzzResult = fizzbuzz_module.esFizz(7);
      expect(fizzBuzzResult).equals("");
    })
  })


  describe('#para la funcion esBuzz',function(){
    it('para un numero que es divisible entre cinco deberia devolver Buzz',function(){
      var fizzBuzzResult = fizzbuzz_module.esBuzz(25);
      expect(fizzBuzzResult).equals("Buzz");
    })
  
    it('para un numero que no es divisible entre cinco deberia devolver una cadena vacia',function(){
      var fizzBuzzResult = fizzbuzz_module.esBuzz(23);
      expect(fizzBuzzResult).equals("");
    })
  })

  describe('#para la funcion calcularTerminoDeLaSecuencia',function(){
    it('para un numero que es divisible entre 3 y 5 deberia devolver FizzBuzz',function(){
      var fizzBuzzResult = fizzbuzz_module.calcularTerminoDeLaSecuencia(75);
      expect(fizzBuzzResult).equals("FizzBuzz");
    })
  
    it('para un numero que es divisible entre cinco deberia devolver Buzz',function(){
      var fizzBuzzResult = fizzbuzz_module.calcularTerminoDeLaSecuencia(25);
      expect(fizzBuzzResult).equals("Buzz");
    })
  
    it('para un numero que es divisible entre tres deberia devolver Fizz',function(){
      var fizzBuzzResult = fizzbuzz_module.calcularTerminoDeLaSecuencia(6);
      expect(fizzBuzzResult).equals("Fizz");
    })
  
    it('para un numero que no es divisible ni entre tres ni entre 5 deberia devolver el mismo numero',function(){
      var fizzBuzzResult = fizzbuzz_module.calcularTerminoDeLaSecuencia(17);
      expect(fizzBuzzResult).equals("17");
    })
  })

})