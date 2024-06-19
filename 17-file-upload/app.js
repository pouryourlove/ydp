const express = require("express");
const multer = require("multer"); //multer 모듈 불러오기
const path = require('path')
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//multer 미들웨어 등록
app.use("/uploads", express.static(__dirname + "/uploads")); //보안상 두개 이름을 다르게 하는게 좋다. 
//__dirname : 현재위치
// const upload = multer({
//   dest: "uploads/",
// });
const uploadDetail = multer({
  //storage: 저장할 공간에 대한 정보
  //사진을 디스크 방식으로 저장하겠다.
  //req: 요청
  //file: 파일 객체
  //done: 끝났다.
  storage: multer.diskStorage({
    destination(req, file, done){
      done(null, 'uploads/') // 파일을 저장할 경로
    },
    filename(req,file,done){
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명(중복을 막기 위해 Date.now())
    }
  }),
  limits: {fileSize: 5 * 1024 * 1024} // 업로드 크기 제한
})

//multer 객체. single() : 하나의 파일을 업로드
//single 미들웨어는 라우터 미들웨어 앞에 넣으면 됨
//라우터 미들웨어: (req,res) => {
//   console.log(req.body);

//   res.send('sucess upload!')
// }
//multer 객체 생성시 작성한 옵션에 따라 파일 업로드 후, req.file 객체 생성 -> 여기에 파일 정보가 들어있음
//input name속성값을 upload.single()에 써줌
//

app.post("/upload",uploadDetail.single('userfile'),(req,res) => {
  console.log(req.body);//{title: '바탕화면 사진임'}
  console.log(req.file);// 업로드된 파일 정보 객체로 찍힘

  // res.send('sucess upload!')
  res.render('uploaded',{title: req.body.title, src: req.file.path})
})

//multer객체.array(): 여러 파일을 하나의 인풋에 업로드
app.post("/upload/array",uploadDetail.array('userfiles'), (req,res) => {
  console.log(req.body); //{ title: '파일 3개 업로드중 ! ' }
  console.log(req.files); //[{},{},...]배열 형태로 각 파일 정보를 저장. 하나여도 배열에 들어가있다.
  res.send('Success Upload! (multiple)')
});

//multer 객체.fields(): 여러 파일을 각각의 인풋에 업로드
//파일 인풋이 두개 있기 때문에 {}2개 열어줌
app.post("/upload/fields", uploadDetail.fields([{name: 'kiwi'},{name:'orange'}]),(req,res)=> {
  console.log(req.body); // { title: '냥이1', title2: '냥이2' }
  console.log(req.files); // {kiwi: [{},...], orange: [{},...]}

  res.send('success upload! (multiple2)' )
});

//파일 탐색기 > uploads 폴더가 생성! 
//확장자 없이 파일명이 자동으로 저장됨(multer 객체를 생성할 때 dest 옵션 외에 설정을 한게 없어서)
//파일 탐색기에서 png, jpg 등의 확장자를 붙여보면 우리가 업로드한 파일

app.get("/", function (req, res) {
  res.render("index", { title: "파일 업로드를 배워보자" });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
