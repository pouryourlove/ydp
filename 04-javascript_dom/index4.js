//요소 가져오기 ! 
const div1 = document.getElementById('div1');
console.log(div1); 

//태그 내부 내용 변경
//innerHTML: 태그 사용 가능
//innerText, textContent: 태그가 문자(기호)로 그대로 노출

console.log(div1.innerHTML);
console.log(div1.textContent);

div1.innerHTML = '여기는 <b>첫번째</b> 태그'
console.log(div1);

//#innerText와 textContent
//#공통점
//-둘 모두 텍스트를 추가한다.
//#차이점
//innerText = Html 태그를 해석하지 않음. 보여지는 텍스트만 그대로
//textContent = html 태그를 포함하여 처리//treats html tags as plain text

div1.innerText = "여기는 <b>두번째</b> 태그! "
console.log(div1);
div1.textContent = "여기는 <b>세번째</b> 태그!"
console.log(div1);

//속성(attribute) 변경
//setAttribute(속성명, 변경할 속성값) => 속성값을 "설정"
const naver = document.getElementById('naver')
naver.setAttribute('href', 'https://www.google.com');

const dog = document.getElementById('dog');
// dog.setAttribute('src', './img/temp.png');

//  getAttribute(속성명) => 속성 값 "얻기"
console.log(document.getElementById('dog').getAttribute('src'));

// # 참고! 속성 접근 (.) 연산자로도 가능
console.log(document.getElementById('dog').id); // dog
console.log(document.getElementById('naver').href); // https://www.google.com/

// # 참고2! . 연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#'; // 내부 앵커 // 현재 페이지의 상단으로 스크롤
console.log(document.getElementById('naver').href);

