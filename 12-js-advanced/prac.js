// const word1 = "abc";
// const word2 = "xyz";

// console.log([...word1,...word2])

class Shape{
    constructor(width,length){
        this.width = width;
        this.length = length;
    }
    getArea(){
        return this.width * this.length
    }
}

let rec1 = new Shape(3,4)
console.log(rec1.getArea())

 class rectangle extends Shape{
    
    constructor(width, length, diao){
        super(width,length)
        this.diao = diao;
    } 
    getdiao(){
        return Math.sqrt(this.width * this.width + this.length * this.length)
    }
 }


const triangle extends Shape{
    getArea(){
        return (this.width * this.length) /2
    }
}

const circle extends Shape {

}
