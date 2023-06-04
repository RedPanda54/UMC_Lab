// express와 body-parser 모듈을 불러옴
const express = require('express');
const bodyParser = require('body-parser');

// express 실행
const app = express();

// JSON 데이터 파싱을 위해 body-parser를 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 라우터로 "/"가 들어오면, "Hello World!"를 출력
// 라우터로 "/umc"가 들어오면??
app.get('/', (req, res)=>{
    res.send('Hello, World!');
});

app.get('/umc', (req, res)=>{
    res.send('Hello, node.js team!');
});

// user.routes.js에서 함수를 불러와서 사용
require('./app/routes/user.routes.js')(app);

// 포트 3000으로 서버 실행
app.listen(3000, ()=>{
    console.log('Start Server : localhost:3000');
})