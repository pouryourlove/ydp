import "./Food.css"

function Food({food}) {
  return (
    <h1>내가 좋아하는 음식은 <span className = "food">{food}</span></h1>
  )
}

Food.defaultProps = {
    food: '피자'
  };

export default Food