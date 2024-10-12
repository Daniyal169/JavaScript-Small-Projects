let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");
let passwordBox = document.getElementById("passwordBox");

let msg = document.getElementById("msg");
let strength = document.getElementById("strength");

eyeIcon.onclick = () => {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.src = "img/eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "img/eye-close.png";
  }
};

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    msg.style.visibility = "visible";
  } else {
    msg.style.visibility = "hidden";
  }

  if (password.value.length < 4) {
    strength.innerHTML = "weak";
    msg.style.color = "red";
  }
  else if (password.value.length >= 4 && password.value.length < 8) {
    strength.innerHTML = "medium";
    msg.style.color = "#ffff0e";
  }
  else if (password.value.length >= 8) {
    strength.innerHTML = "strong"
    msg.style.color = "green";
  }
})
