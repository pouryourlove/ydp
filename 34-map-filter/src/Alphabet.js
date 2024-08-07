import React from 'react'

function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b','a','n','n','a'])
  
  //배열 안에는 객체 형태
  const [alphabet, setAlphabet] = useState([
    {
        id: 1,
        alpha: 'a',
    },
    {
        id: 2,
        alpha: 'b',
    },
    {
        id: 3,
        alpha: 'c',
    },
    {
        id: 4,
        alpha: 'd',
    },
    {
        id: 5,
        alpha: 'e',
    },

  ])
  
  return (
    <div>
       <h1>Map & filter</h1>
       <ol>
        {/* 배열 ex */}
        {/* {alphabet.map((value) => (
            <li key={{idx}}>{value}</li>
        ))} */}

        {/* 객체 */}
        {alphabet.map((value) => {
            <li key={value.id}></li>
        })}
       </ol>
    </div>
  )
}

export default Alphabet