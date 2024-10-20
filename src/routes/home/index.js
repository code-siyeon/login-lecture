'use strict';

const express = require("express");

const router = express.Router();
const ctrl = require("./home.ctrl");  // 파일을 불러와 사용

router.get("/", ctrl.output.home);  // 이 함수 부분이 컨트롤러라 할 수 있고, 컨트롤러를 분리한 것임 
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);


module.exports = router;   // 이 파일을 사용할 수 있도록 외부로 내보내는 명령어