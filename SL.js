let username = document.getElementById("username");
let password = document.getElementById("password");
let username1 = document.getElementById("username1");
let email = document.getElementById("email");
let p1 = document.getElementById("password1");
let p2 = document.getElementById("password2");

function login() {
    let form = JSON.parse(localStorage.getItem("form")) ? JSON.parse(localStorage.getItem("form")) : [];
    let flag = 0;
    if (username.value == "" || (/[0-9]/.test(username.value))) {
        alert("Invalid Username");
        return;
    }
    if (((password.value).length) < 8) {
        alert("Invalid Password");
        return;
    }
    if (form.length >= 1) {
        form.forEach(element => {
            if (username.value == element.username && password.value == element.password) {
                username.value = "";
                password.value = "";
                window.location.assign("http://google.com");
                flag = 1;
            }
        });
        if (flag == 0) {
            alert("No account found.");
        }
    }
    else {
        alert("No account found.");
    }
}

function signup() {
    let form = JSON.parse(localStorage.getItem("form")) ? JSON.parse(localStorage.getItem("form")) : [];
    let flag = 1;
    if (username1.value == "" || (/[0-9]/.test(username1.value))) {
        alert("Invalid Username");
        flag = 0;
        return;
    }
    form.forEach(element => {
        if (username1.value == element.username) {
            alert("Username not available.");
            flag = 0;
        }
    });
    // if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
    //     alert("Invalid E-mail Id.");
    //     flag = 0;
    //     return;
    // }
    if (((p1.value).length) < 8) {
        alert("Invalid Password");
        flag = 0;
        return;
    }
    if ((p1.value) != (p2.value)) {
        alert("Invalid Confirm Password");
        flag = 0;
        return;
    }
    if (flag == 1) {
        let object = {
            username: username1.value,
            email: email.value,
            password: p1.value,
            confirmpassword: p2.value
        }
        form.push(object);
        localStorage.setItem("form", JSON.stringify(form));
        username1.value = "";
        email.value = "";
        p1.value = "";
        p2.value = "";
        document.getElementById("signup").style.display = "none";
        document.getElementById("login").style.display = "block";
    }
}

function signuplink() {
    document.getElementById("signup").style.display = "block";
    document.getElementById("login").style.display = "none";
}