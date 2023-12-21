const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const {returnsThree, reciprocal} = require('../problems/number-fun');


describe('returnsThree()', function (){
    it('returns the number three', () => {

        expect(returnsThree()).to.equal(3);
    });


});

describe('reciprical(n)', function () {
    it('returns reciprical of 25', () => {

        let tester = 25
        expect(reciprocal(tester)).to.equal(52);
    });
    it('doesnt returns reciprical of 20934857', () => {

        let tester2 = 20934857
        expect(() => reciprocal(tester2)).to.throw(Error);
    });
    it('doesnt returns reciprical of 0', () => {

        let tester3 = 0
        expect(() => reciprocal(tester3)).to.throw(Error);
    });
});
