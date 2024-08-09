import React, { Component } from 'react'

//특정 상황일때 원하는 코드 작동하게 하기 위해

export default class LifeCycleClassChild extends Component {
  componentDidMount(){
    console.log('컴포넌트 마운트!!')
  }  

  componentDidUpdate(){
    console.log('컴포넌트 업데이트')
  }

  componentWillUnmount(){
    console.log('컴포넌트 언마운트')
  }
  render() {
    return (
      <div>자식 컴포넌트
        <p>현재 number 값은 {this.props.number}입니다</p>
      </div>
    )
  }
}
