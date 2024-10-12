'use strict';

// 모듈
const express = require('express');
const path = require('path'); // path 모듈 추가
const app = express();


//코파일럿
//app.use(express.static(path.join(__dirname, 'src/public')));

//커서
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(`${__dirname}/src/public`));
//app.use(express.static(`{__dirname}/src/public`));

// 라우팅
const home = require("./routes/home");

// 앱 세팅
//app.set("views", "src/views");
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use("/", home);   // use: 미들웨어를 등록해주는 메소드


module.exports = app;


