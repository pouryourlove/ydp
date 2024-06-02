let numbers = Array.from({ length: 100 }, (_, index) => index + 1);
let number1 = 0;
let number2 = 0;
let number3 = 0;

for (let i = 0; i < numbers.length; i++) {
  number1 += numbers[i];
}
console.log(number1);

for (num of numbers) {
  number2 += num;
}

console.log(number2);

numbers.forEach((num) => {
  number3 += num;
});

console.log(number3);

const fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
const fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

const same = fruits1.filter((fruit) => {
  return fruits2.includes(fruit);
});
console.log(same);

const different = fruits1.filter((fruit) => {
  return !fruits2.includes(fruit);
});

console.log(different);
