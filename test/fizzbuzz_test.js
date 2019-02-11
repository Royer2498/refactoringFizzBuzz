var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
const fizzbuzz_module = require('../fizzbuzz');

describe('fizzbuzzTest',function(){

  it('para una secuencia hasta el 5 deberia devolver [1,2,Fizz,4,Buzz]',function(){
    var fizzBuzzResult = fizzbuzz_module.fizzbuzz(5);
    var result = ["1","2","Fizz","4","Buzz"];
    expect(fizzBuzzResult).to.have.ordered.members(result);
  })

  it('para un numero que es divisible entre tres deberia devolver true',function(){
    var fizzBuzzResult = fizzbuzz_module.esFizz(6);
    expect(fizzBuzzResult).equals(true);
  })

  
})