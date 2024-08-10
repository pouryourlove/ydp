import React, { Component } from 'react'

export default class  extends Component {

    inputRef = React.createRef()

    handleFocus = () => {
        console.log(this)
        //ref 설정 후, dom 접근을 위해서는 this.inputRef.current 까지 접근

        console.log(this.inputRef)
        console.log(this.inputRef.current)
    }
 
    //컴포넌트 내부에서 변수에 React.createRef()를 담기.
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input에 focusing 처리해보기</p>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.handleFocus}>Focus</button>
      
      </div>
      
    )
  }
}
