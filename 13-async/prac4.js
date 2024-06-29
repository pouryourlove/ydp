function backgroundColor(color) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve();
    }, 1000);
   
  })
  
}

async function color() {
  try {
    await backgroundColor('red')
    await backgroundColor('orange')
    await backgroundColor('yellow')
    await backgroundColor('green')
    await backgroundColor('blue')
  } catch (error) {
    console.log(error)
  }
}

color()