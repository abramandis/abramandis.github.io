
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "Youknowit1234") {
        alert("You have successfully logged in.");
        //location.reload();
        window.location.replace("/ProcessMenu.html");
       // location.href("/ProcessMenu.html");
        return true
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})