// Your code here 
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);


const reverseString = require("../problems/reverse-string");

describe ("reverseString(string)",function(){
    it("should take input and return it reversed", ()=>{
        let string1 = "banana";
        expect(reverseString(string1)).to.equal("ananab");
    });
    it("input must be a string, should return TypeError", ()=>{
        let notAString = null;
        expect(()=>reverseString(notAString)).to.throw(Error);
    })
})