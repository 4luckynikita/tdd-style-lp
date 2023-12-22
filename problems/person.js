class Person {
  // Your code here 
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    return `Hey there ${this.name}`;
  }
  visit(person2){
    return `${this.name} visited ${person2.name}`;
  }
  switchVisit(otherPerson){
    return otherPerson.visit(this);
  }
  update(obj){
    if(typeof obj != "object") throw new Error("Passed through not an object");
    this.name = obj.name;
    this.age = obj.age;
    return this;
  }
  static greetAll(arr){
    let final = [];
    for(let person of arr){
      final.push(`Hey there ${person.name}`);
    }
    return final;
  }
}

module.exports = Person;
