import "./Book.css"

function Book({title,img,author,price,type}) {
  return (
    <>
    <div className = "bestseller">
      <h1>이번주 베스트셀러</h1>
      <img className= "bookImg"src={img} alt = "이미지"/>
      <div className ="bookDetail">
        <p>저자: {title}</p>
        <p>판매가: {price}원</p>
        <p>구분: {type}</p>
      </div>
    </div>    
    </>
  )
}

export default Book