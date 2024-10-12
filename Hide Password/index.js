let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = () => {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "img/eye-open.png";
    }
    else {
        password.type = "password"
        eyeIcon.src = "img/eye-close.png";
    }

}