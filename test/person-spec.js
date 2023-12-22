const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Person = require("../problems/person");

describe("Person class", function(){
    let person;

    beforeEach(() => {
        person = new Person("Billy Bob", 42);
        person2 = new Person("Joe Shmo", 43);
    })

    describe("Person constructor", function(){
        it("Should have name as a property", () =>{
            expect(person).to.have.property("name");
            expect(person.name).to.eql("Billy Bob");
        })
        it("Should have age as a property", () => {
            expect(person).to.have.property("age");
            expect(person.age).to.eql(42);
        })
    })
    describe("Instance of sayHello", function(){
        it("Should return name", () => {
            expect(person.sayHello()).to.eql(`Hey there ${person.name}`);
        })
    })
    describe("Person visited other person", function (){
        it("Should return Billy Bob visited Joe Shmo", () =>{
            expect(person.visit(person2)).to.eql("Billy Bob visited Joe Shmo");
        })
    })
    describe("Other person visits this person", function(){
        it("Should return Joe Shmo visited Billy Bob", () => {
            expect(person.switchVisit(person2)).to.eql("Joe Shmo visited Billy Bob");
        })
    })
    describe("Updating object", function(){
        it("If not object throw error", ()=>{
            let errorString = "wrong";
            let errorNumber = 10;
            expect(()=>person.update(errorString)).to.throw(Error);
            expect(()=>person.update(errorNumber)).to.throw(Error);
        })
        it("Updated person replaces old person", ()=>{
            expect(person.update(person2)).to.eql(person2);
        })
        it("Throw error if no name or age", () => {
            let name;
            let age;
            expect(()=>person.update()).to.throw(Error);
        })
    })
    describe("testing greetAll", function(){
        it("says hello to array of all people", ()=>{
            expect(Person.greetAll([person, person2])).to.eql(["Hey there Billy Bob", "Hey there Joe Shmo"]);
        })
    })
})