import React,{useState} from 'react'

function HandlerEx3() {
    const [appear,setAppear] = useState(true)
    const [button,setButton] = useState('사라져라')

   const handleToggle = () => {
       setAppear(!appear)
       setButton(appear? '보여라' : '사라져라')

   }

  return (
    <>
    <div>{appear? '안녕하세요' : ''}</div>
    <button onClick={handleToggle}>{button}</button>
    
    </>
  )
}

export default HandlerEx3