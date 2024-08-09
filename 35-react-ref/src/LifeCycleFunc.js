import React, { useState } from 'react'
import LifeCycleFuncChild from './LifeCycleFuncChild';

// 부모 컴포넌트
export default function LifeCycleFunc() {
    const[ number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeNumber = () => {
        setNumber(number + 1)
    }

    const changeVisible = () => {
        setVisible(!visible) // 토글 효과
    }

    return (
    <div>
        <button onClick={changeNumber}>plus</button>
        <button onClick={changeVisible}>on/off</button>
        {/* 자식 컴포넌트 다루기 */}
        {visible && <LifeCycleFuncChild number = {number}/>}
    </div>
  )
}
