 class Triangle {
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getPerimeter(){
        return this.side1 + this.side2 + this.side3
    }
    hasValidSideLengths(){
        let valid = true;
        if (this.side1 + this.side2 < this.side3) valid = false;
        if (this.side2 + this.side3 < this.side1) valid = false;
        if (this.side3 + this.side1 < this.side2) valid = false;
        return valid;
    }
    validate() {
        if (this.hasValidSideLengths()) this.isValid = true;
     else this.isValid = false
    }

}
class Scalene extends Triangle {
    constructor(side1, side2, side3){
        super (side1, side2, side3)
    }
    isScalene() {
        let valid = true;
        if (this.side1 == this.side2 || this.side1 == this.side3 || this.side2 == this.side3) valid = false;
        return valid;
    }
    validate(){
        if (this.isScalene) this.isValidScalene = true;
        else this.isValidScalene = false
    }
}
class Isosceles extends Triangle {
    constructor(side1, side2, side3){
        super (side1, side2, side3)
    }
    isIsosceles(){
        let valid = true;
        if (this.side1 == this.side2 || this.side1 == this.side3 || this.side2 == this.side3 && )

    }
    validate(){

    }
}
module.exports = {Triangle, Scalene, Isosceles}
