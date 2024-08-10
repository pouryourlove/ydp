import React, { Component } from 'react'
import Class from './Class'

export default class App extends Component {
  handleValid = () => {
    console.log('콘솔 띄우기 성공!')
  }

  render() {
    const text = "hello"

    return (
      <div>
        <Class text={text} valid={this.handleValid}/>
      </div>
    )
  }
}




// import Food from "./Food"
// import Book from "./Book"

// function App() {

//   return (
//     <>
//       <Food/>
//       <Book img = "https://image.yes24.com/goods/105610947/XL"title = "나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500" type= "자기계발서" />
//     </>
//   )
// }

// export default App





// import './App.css'

// function App() {
//   const name = '쫑'
//   const animal = '강아지'
//   const a = 5;
//   const b = 4;
//   const title = 'Hello World'
//   return (
//    <>
//     <div className = "navbar">{title}</div>

//    <div className = "form">
//      <div>
//       <label htmlFor="">아이디: </label>
//       <input type="text" />
//      </div> 
//      <div>
//       <label htmlFor="">비밀번호: </label>
//       <input type="text" />
//      </div>  
//   </div>  

//     <h2>제 반려 동물의 이름은 {name}입니다.{name}은 {animal}입니다</h2>

//     <h3> {3 + 5 == 8 ? console.log('정답입니다!') : console.log('오답입니다!')}</h3>

//     <h3>{a > b && console.log('a가 b보다 큽니다')}</h3>
//     </> 
//   )
 
// }

// export default App




// import './App.css';
// import Button from './Button';
// import FunctionComponent from './FunctionComponent';
// import ClassComponent from './classComponent';

// function App() {
//   return (
//     <>
//     <ClassComponent/>
//     <ClassComponent name ="sesac 6기"/>
//     <hr />

//     <FunctionComponent/>
//     <FunctionComponent name="sesac 6기"/>
//     <hr />

//     <Button link="https://www.google.com">Google</Button>
//     </>
//   );
// }

// export default App;
