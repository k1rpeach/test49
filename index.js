// инпуты:
let userName = document.querySelector(".userName");
let lastName = document.querySelector(".lastName");
let userEmail = document.querySelector(".userEmail");
let userPassword1 = document.querySelectorAll(".userPassword")[0];
let userPassword2 = document.querySelectorAll(".userPassword")[1];

// кнопка
let btn = document.querySelector(".btn");

btn.addEventListener("click", clickMe);

let userNameReg = /^[A-Za-zА-Яа-я\- ]*[^0-9][A-Za-zА-Яа-я\- ]*$/;
let userEmailReg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
let userPasswordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

function clickMe(event) {
    event.preventDefault();
    validate(userNameReg, userName);
    validate(userNameReg, lastName);
    validate(userEmailReg, userEmail);
    validate(userPasswordReg, userPassword1);
    validate(userPasswordReg, userPassword2);
    validatePasswordMatch(userPassword1, userPassword2);
}

function validate(userReg, userValue) {
    if (!userReg.test(userValue.value)) {
        userValue.classList.add("error");
    } else {
        userValue.classList.remove("error");
    }
}

function validatePasswordMatch(password1, password2) {
    if (password1.value !== password2.value) {
        password1.classList.add("error");
        password2.classList.add("error");
    } else {
        password1.classList.remove("error");
        password2.classList.remove("error");
    }
}