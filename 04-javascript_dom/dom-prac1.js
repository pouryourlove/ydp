const day = new Date().getDay();

if (day >= 1 && day <= 5) {
  console.log("오늘은 평일입니다");
} else {
  console.log("오늘은 주말입니다.");
}

const random = Math.floor(Math.random() * 11);
console.log(random);
