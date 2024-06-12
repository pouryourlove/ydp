// &&(and) ||(or)
// true && true 

const x = 5;
const result = x || 100;
console.log(result); //왼쪽이 true 이면 오른쪽애는 아예 안봄.


const y= 7;
const result3 = x < y && 'y가 큼'; //왼쪽이 true면 오른쪽것이 나옴! 
console.log(result3); //  

//falsy의 경우 undefined, null, 0, false, '',NaN 

// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;  // ||이므로 왼쪽이 true면 오른쪽은 아예 안본다. 여기서 undefined니까 defaultColor가 나오는것
console.log(currentColor);

