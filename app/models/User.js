'use strict';

const UserStorage = require("./UserStorage");





class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const client = this.body;
        const { id, psword } = UserStorage.getUsersInfo(client.id);

        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸사오" };
        }
        return { success: false, msg: "아이디가 틀렸사오" };
    }
    register() {
        const client = this.body;
        UserStorage.save(this.client);
    }
}


module.exports = User;