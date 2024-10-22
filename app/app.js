'use strict';

// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path'); // path 모듈 추가
const app = express();




// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
//app.set("views", "src/views");
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");



//코파일럿
app.use(express.static(path.join(__dirname, "src/public")));

//커서
//app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(`${__dirname}/src/public`));
//app.use(express.static(`{__dirname}/src/public`));
app.use(bodyParser.json());

// URL 을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home);   // use: 미들웨어를 등록해주는 메소드



app.use((req, res, next) => {
    console.log('요청된 URL:', req.url);
    next();
});


module.exports = app;



