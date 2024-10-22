//서버


'use strict';

const User = require("../../models/User");


const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        console.log(response);
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
};




module.exports = {
    output,
    process
};


/* "use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        try {
            const response = await user.login();
            return res.json(response);
        } catch (err) {
            console.error("로그인 처리 중 오류:", err);
            return res.status(500).json({ success: false, msg: err.message || "서버 오류가 발생했습니다." });
        }
    },
    register: async (req, res) => {
        const user = new User(req.body);
        try {
            const response = await user.register();
            return res.json(response);
        } catch (err) {
            console.error("회원가입 처리 중 오류:", err);
            return res.status(500).json({ success: false, msg: err.message || "서버 오류가 발생했습니다." });
        }
    }
};

module.exports = {
    output,
    process,
}; */



// object는 key와 value 쌍이지만, key만 입력했다면 key와 동일한 value가 자동 생성
// {
//     hello : hello,
//     login : login,
// }