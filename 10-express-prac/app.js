const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views')

app.get('/', (req,res) => {
    res.render('index')//response 받아서 브라우저에 그려준거임 
})

app.listen(PORT, () => {
    console.log('8000번 사용');
})

