const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const {Triangle, Scalene, Isosceles} = require('../problems/triangle');

beforeEach(()=>{
    triangle1 = new Triangle (3,3,5);
    triangle2 = new Scalene (3,6,8);
    triangle3 = new Isosceles (4,4,3)
});

describe('triangle ()', function () {
    it('side one through three are set', () => {
        expect(triangle1.side1).to.equal(3);
        expect(triangle1.side2).to.equal(3);
        expect(triangle1.side3).to.equal(5);
    });
    it ('returns corect perimiter', () => {
        expect(triangle1.getPerimeter()).to.equal(11);
    });
    it('checks that triangle is valid', () => {
        expect(triangle1.hasValidSideLengths()).to.equal(true);
    });
    it ('sets isValid', () => {
        triangle1.validate();
        expect(triangle1.isValid).to.equal(true);
    });
    it('testing is scalene', () => {
        expect(triangle2.isScalene()).to.equal(true);
    });
    it('testing scalene validity', () => {
        triangle2.validate()
        expect(triangle2.isValidScalene).to.equal(true);
    });
    it('testing is isosceles', () => {
        expect(triangle2.isScalene()).to.equal(true);
    });
    it('testing isosceles validity', () => {
        triangle2.validate()
        expect(triangle2.isValidScalene).to.equal(true);
});
