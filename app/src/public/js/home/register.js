//클라이언트

"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
console.log("hello reg")


function register() {
    if (!id.value) return alert("아이디를 입력해주시오");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않소");
}


const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
};
console.log(req);
fetch("/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
})
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((error) => {
        console.error("회원가입 중 에러 발생:", error);
    });

