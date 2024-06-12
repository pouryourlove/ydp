const express =  require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');
//middleware
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index',{title : 'home'}) //title 변수쓰겠다고 head.ejs에서 했으니까
})
app.get('/about', (req,res) => {
    res.render('about',{title : 'about'})
})
app.get('/create', (req,res) => {
    res.render('create',{title : 'create'})
})

//지정된 경로외 경로일때
app.use((req,res) => {
    res.status(404).render('404')
})


app.listen(8000, ()=> {
    console.log('http://localhost:8000')
});
