'use strict';
const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};


// object는 key와 value 쌍이지만, key만 입력했다면 key와 동일한 value가 자동 생성
// {
//     hello : hello,
//     login : login,
// }