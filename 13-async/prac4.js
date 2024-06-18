let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
  return new Promise((resolve) => {
    setTimeout(function () {
        console.log(`고민 끝`);
        product = `제로콜라`;
        price = `3000원`;
        resolve({product, price})
      }, 3000);
      
  })  
 
}

function pay(product, price) {
    return new Promise((resolve) => {
        setTimeout(function () {
        console.log(`상품명: ${product} // 가격: ${price}`);
        resolve()
          }, 5000);
         
    })
  
}

async function exec(){
    
    goMart();
    const {product, price} = await pickDrink();
    await pay(product, price);

}

exec();



/*
마트에 가서 어떤 음료를 살지 고민한다..
고민 끝
상품명: undefined // 가격: undefined
*/