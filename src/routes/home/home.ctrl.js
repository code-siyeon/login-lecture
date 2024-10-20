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
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
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


// object는 key와 value 쌍이지만, key만 입력했다면 key와 동일한 value가 자동 생성
// {
//     hello : hello,
//     login : login,
// }