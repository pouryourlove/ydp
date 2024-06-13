// const word1 = "abc";
// const word2 = "xyz";

// console.log([...word1,...word2])

class Shape {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getArea() {
    return this.width * this.length;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  constructor(width, length) {
    super(width, length);
  }

  getDiagonal() {
    return Math.sqrt(this.width * this.width + this.length * this.length);
  }
}

let rectangle = new Rectangle(4, 4);
console.log(rectangle.getDiagonal());

class Triangle extends Shape {
  constructor(width, length) {
    super(width, length);
  }
  getArea() {
    return (this.width * this.length) / 2;
  }
}

let triangle = new Triangle(6, 6);
console.log(triangle.getArea());

class Circle extends Shape {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(10);
console.log(circle.getArea());
