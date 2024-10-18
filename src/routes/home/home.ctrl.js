'use strict';

const UserStorage = require("../../models/UserStorage")

//const { use } = require('.');
//const { response } = require('../../app');


const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id)
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "아이디 또는 비밀번호가 틀립니다";
        return res.json(response);
    },
};




module.exports = {
    output,
    process,
};


// object는 key와 value 쌍이지만, key만 입력했다면 key와 동일한 value가 자동 생성
// {
//     hello : hello,
//     login : login,
// }