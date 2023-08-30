let button = document.querySelector('button');
let first = document.querySelector("#name");
let last = document.querySelector("#surname");
let city = document.querySelector("#city");

button.addEventListener("click", function() {
    let answer = prompt("yes/no");
    if (answer === "yes") {
        first.value = "";
        last.value = "";
        city.value = "";
    }
});