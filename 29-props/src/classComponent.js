//render()함수 필수!
//return에 실제로 보여주고 싶은 html 요소를 작성
import React from 'react'
// 여기서 React는 Component를 임포트 하기 위해 필요!
// 상속 받기 때문!

// import {Component} from 'react'

import PropTypes from 'prop-types';



class ClassComponent extends React.Component{
    // class ClassComponent extends Component{}
    //클래스 인스턴스 속성, 키워드 없이 정의 (let, const, var)
    //클래스 메서드 내 어디서든 this 키워드로 접근할 수 있다. 
    student = "홍길동";
    render(){
        const teacher = 'Damon'; //render 메서드 내부의 지역변수
        const {name} = this.props
        console.log('props:', this.props);//{name: 'sesac 6기'}

        return(
            <>

             <h1>Hello, {teacher}</h1>
             <h1>{this.student}</h1>
             {/* 외부에 있을 때는 this로 접근 */}
             <p>여기는 class component! </p>
             {/* props 사용할 때 */}
             <p>
                {/* 이름은 <b>{this.props.name}</b> */}
             </p>

             <p>이름은 <b>{name}</b></p>
            </>
        )
    }

    static defaultProps = {
        name: '춘향전'
    }
    static propTypes = {
        name: PropTypes.string,
    }
} 

ClassComponent.defaultProps = {
    name: '기본 이름',
}

ClassComponent.propTypes = {
    name: PropTypes.string,
}


export default ClassComponent

// ** props 작성법 !

//부모가 자식할테 줄거임 (반대 x, 형제도 안됨)
//1. 부모 쪽에 <function 작명 = {줄내용}>

//2. 자식 쪽에 function(props) {
//      <h1> props.작명 </h1>
//}