var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
const fizzbuzz_module = require('../fizzbuzz');

describe('fizzbuzzTest',function(){

  it('para una secuencia hasta el 5 deberia devolver [1,2,Fizz,4,Buzz]',function(){
    var fizzBuzzResult = fizzbuzz_module.fizzBuzz(5);
    var result = ["1","2","Fizz","4","Buzz"];
    expect(fizzBuzzResult).to.have.ordered.members(result);
  })

  it('para un numero que es divisible entre tres deberia devolver true',function(){
    var fizzBuzzResult = fizzbuzz_module.esFizz(6);
    expect(fizzBuzzResult).equals(true);
  })

  it('para un numero que no es divisible entre tres deberia devolver false',function(){
    var fizzBuzzResult = fizzbuzz_module.esFizz(7);
    expect(fizzBuzzResult).equals(false);
  })

  it('para un numero que es divisible entre cinco deberia devolver true',function(){
    var fizzBuzzResult = fizzbuzz_module.esBuzz(25);
    expect(fizzBuzzResult).equals(true);
  })

  it('para un numero que no es divisible entre cinco deberia devolver false',function(){
    var fizzBuzzResult = fizzbuzz_module.esBuzz(23);
    expect(fizzBuzzResult).equals(false);
  })

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