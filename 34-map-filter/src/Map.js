import {useState} from 'react'

function Map() {
    const [inputText, setInputText] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [submit, setSubmit] = useState(false)

    const handleText = (e) => {
        setInputText(e.target.value)
    }

    const handleEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handleSubmit = () => {
        setSubmit(true)
    }

    const inputValues = [
        { text: inputText, email: inputEmail },
      ];

  return (
    <div>
        <input type="text" onChange={handleText}/>
        <input type="email" onChange={handleEmail} onKeyDown={(e) => { if(e.key === "Enter") handleSubmit()}}/>
        <button onClick = {handleSubmit}>등록</button>
        <div>{submit && 
                 <div>
                 {inputValues.map((input, index) => (
                   <p key={index}>{`${input.text}: ${input.email}`}</p>
                 ))}
               </div>
                
           
           }</div>
    </div>
  )
}

export default Map

