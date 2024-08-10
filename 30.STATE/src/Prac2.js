import React, {useState} from 'react'

function Prac2() {
  const [number,setNumber] = useState(0);
  const onClickInc = () => {
    setNumber(number + 1)
  } 
  const onClickDec = () => {
    setNumber(number -2)
  }

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={onClickInc}>Increase</button>
        <button onClick={onClickDec}>Decrease</button>
    </div>
  )
}

export default Prac2