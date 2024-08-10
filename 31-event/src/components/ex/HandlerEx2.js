import React,{useState} from 'react'

function HandlerEx2() {

  const [color,setColor] = useState('검정색')

  const handleRed = () => {
    setColor('빨간색')
  }

  const handleBlue = () => {
    setColor('파란색')
  }

  const getColor = () => {
    switch (color){
        case '빨간색':
            return 'red';
        case '파란색':
            return 'blue';
        default:
            return 'black'        
    }
  }

  return (
    <>
    <h1 style={{color:getColor()}}>{`${color} 글씨`}</h1>
    <button onClick={handleRed}>빨간색</button>
    <button onClick={handleBlue}>파란색</button>
    </>
  )
}

export default HandlerEx2