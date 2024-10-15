'use strict';

const { use } = require('.');


const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
}

const users = {
    id: ["바나나", "딸기", "초코"],
    psword: ["1234", "12345", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id)
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "아이디 또는 비밀번호가 틀립니다",
        });
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