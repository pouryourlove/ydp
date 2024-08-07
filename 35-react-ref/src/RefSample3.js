import React, { Component } from 'react'

export default class RefSample3 extends Component {
    handleFocus = () => {
        console.log(this)
        this.inputRef.focus()
    }
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input에 focusing 처리해보기</p>
        {/* 만들어진 변수 inputRef 해당 요소의 ref prop로 넣어주면 ref 설정이 완료 */}
        <input type='text' ref={(elementRef) => {
            this.inputRef = elementRef;
        }}/>
        {/* ref 사용하려는 목적이 ? 요소 선택 */}
        {/* inputRef라는 변수를 만들어서 사용하려고! */}
        {/* elementRef를 통해 input 태그와 연결 시켜주려함! */}
        <button onClick={this.handleFocus}>연결</button>
      </div>
    )
  }
}
