let password = document.querySelector("#password");
let confirmation = document.querySelector("#confirmation");


let clickable = document.querySelector("button");

clickable.addEventListener("click", function() {
    if (password.value !== confirmation.value) {
        password.style.borderColor = "red";
        confirmation.style.borderColor = "red";
    }
});