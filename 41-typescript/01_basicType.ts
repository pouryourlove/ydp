//typescript basic type(js type)

// 타입 지정 [명시적]
let a: number = 1;
a = 2;
// a = "hello"; // type error
console.log("a>>>>", a);

let b: string = "str";
let c: boolean = true;
let d: undefined;
let e: null = null;

console.log(b, c, d, e);

// 타입 추론 [암묵적]
// typescript는 변수의 초기 값을 기반으로 변수의 타입을 자동으로 추론한다
// 이를 암묵적 타입추론이라고 합니다.

let aa = 1; //컴파일 하면서 aa 타입 number로 추론
let bb = "hi"; // bb의 string 으로 추론
let cc = false;
let dd;
let ee = null;

console.log(aa, bb, cc, dd, ee);

//##################################3
// * 배열
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ['a', 'b']; type error

//[배열 원소가 여러 타입일 경우]
let arr1: (number | boolean | string)[] = [1, true, "string"];

// '|' 연산자
// - **유니온 타입 (Union type) 을 정의할 때 사용한다.
// -> 유니온 타입
// : 하나의 값이 여러 타입 중 하나일 수 있음을 명시하는 타입 시스템의 기능

//[boolean, null, number, array가 원소가 될 수 있는 arr2] 배열 안에 배열을 넣을 때
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];

// [어떤 자료형이든 상관없는 배열]
let arr3: any[] = [1, 2, 3, "wow", true, false];

// ###########################
// *객체
let obj1: object = {
  name: "lingling",
  age: 20,
};
