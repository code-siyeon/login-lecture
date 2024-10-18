"use strict"

class UserStorage {
    static #users = {
        id: ["바나나", "딸기", "초코"],
        psword: ["1234", "12345", "123456"],
        name: ["로제", "제니", "리사", "지수"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;