import React from 'react'
import useToggle from '../hooks/useToggle'

function Faq() {
    const [isFaqOpen, setIsFaqOpen] = useToggle()
    console.log("isFaqOpen>>>", isFaqOpen)
    console.log("setIsFaqOpen>>>", setIsFaqOpen)
  return (
    <div>
        <h1>custom hook (useToggle) ex</h1>
        <div onClick={setIsFaqOpen}>q. 리액트에서 커스텀 훅 만들 수 있습니까?</div>
        {isFaqOpen && <div>a.네 가능합니다</div>}

    </div>
  )
}

export default Faq