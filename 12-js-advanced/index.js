//구조 분해 할당

// const arr1 = [1,2,3,4,5];
// const arr2 = ['a','b','c'];

// const [one,two,three,four,five] = arr1;
// console.log(one, two, three, four, five);

// const [x,y,z,alpha] = arr2;
// console.log(x,y,z, alpha);

// let num1 =1;
// let num2 =2;
//변수값의 교환, 두개의 변수값을 교환할때는 제3의 변수를 사용했었어야 하지만 지금은 그냥 변환 가능. 

// console.log('before: ',num1, num2);
// [num2,num1] = [num1,num2]
// console.log('after: ',num1, num2);


//디폴트값을 지정할 수 있다.
const lists = ['apple','grape'];
[f1,f2,f3='orange'] = lists;
console.log(f1, f2, f3);

//객체, object : key와 value , {}
const obj = {
    title: '엘리먼트',
    content: 'fun',
    num: 5
}

// console.log(obj.num)
// console.log(obj.content)
// console.log(obj.title)
// console.log(obj['title'])
// console.log(obj['content'])
// console.log(obj['num'])

// 객체 구조 분해, 디폴트값을 줄 수도 있다.

// const {num, title, content, star=1000} = obj;
// console.log(num,title,content,star)

// const {a1, b1, c1} = obj; //이름이 중요하다. key값 사용해야 한다.
// console.log(a1,b1,c1) //결과는 undefined 

//undefined : 변수는 할당되었지만 (초기화), 값이 할당되지 않음. 변수는 있는데 값이 없음.
// let a; //변수선언
// let a = 20; //초기화 하면서 할당도 함. 메모리의 영역 자체가 다르다.

const lectureInfo = {
    name: 'coding on',
    part: 'web',
    leader: 'kim',
}
//,를 마지막에 넣어도 된다.

// console.log(lectureInfo)

function getInfo(lecture){
    const {name,part,leader} = lecture;
    const output = `${name}강의는 ${part}개발을 공부합니다. 수업의 리더는 ${leader}입니다`
    return output;
}
const result = getInfo(lectureInfo)
console.log(result)