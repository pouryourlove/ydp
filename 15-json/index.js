// JSON 문자열
const car = `{
  "model": "IONIQ 5",
  "company": "Hyundai",
  "price": 50000000,
  "year":2023,
  "isElectricCar":true,
  "options":["side mirror","smart sensor","built-in cam"]
}`;

//js object에서는 후행쉼표 - 마지막에 쉼표 붙이는게 허용됨. json은 안된다.
// const arr = ['a','b','c',]

console.log(car); // format: JSON

//역질렬화: JSON -> JS OBJECT
//JSON.parse(): 통신하여 받은 데이터를 객체로 변환

const obj = JSON.parse(car);
console.log(obj); // js obj

//obj 변수는 js object이므로 .(dot)/[] 연산자를 이용해 키 값에 접근 가능

console.log(obj.model); // IONIQ 5
console.log(obj.price); // 5000000
console.log(obj.hello); // undefined (hello라는 키갑싱 존재하지 않으므로)

//직렬화: JSON.stringify() -> 통신하기 쉬운 포맷(JSON)으로 변환
// js object -> json

const json = JSON.stringify(obj);
console.log(json, typeof json);

//json QUSTNSMS JSON 형태의 "문자열(string)"이므로
// .(dot)/[] 연산자를 이용해서 키 값에 접근이 불가능

console.log(json.model); //undefined
console.log(json.price); //undefined
console.log(json.hello); //undefined

//json 변수는 string타입이므로
//string 타입에 쓸 수 있는 내장 메소드들은 쓸 수 있음!
console.log(json.split(""));
console.log(json.toUpperCase());
