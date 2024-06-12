const add = (a,b) => {
    return a+b;
}

const substract = (a,b) => {
    return a-b;
}

//1개만 내보내는게 아니라 여러개이므로
// module.exports = {
//     add: add,
//     substract: substract
// }
//add substract 같으므로 이렇게 쓸 수도 있다.
module.exports = {
    add,
    substract
}
