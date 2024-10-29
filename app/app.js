'use strict';

// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
dotenv.config();

const app = express();




// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");



app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL 을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home);   // use: 미들웨어를 등록해주는 메소드



app.use((req, res, next) => {
    console.log('요청된 URL:', req.url);
    next();
});


module.exports = app;





/* 'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// 로깅 미들웨어를 가장 위에 배치
app.use((req, res, next) => {
    console.log('요청된 URL:', req.url);
    console.log('요청 메소드:', req.method);
    console.log('요청 본문:', req.body); // 요청 본문도 로깅
    next();
});

// 미들웨어 설정
app.use(express.json()); // express.json() 사용
app.use(express.urlencoded({ extended: true })); // express.urlencoded() 사용
app.use(express.static(`${__dirname}/src/public`));

// 뷰 엔진 설정
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 라우터 설정
const home = require("./src/routes/home");
app.use("/", home);

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        msg: "서버 에러가 발생했습니다."
    });
});
 
module.exports = app;*/