let validate = document.querySelector("#validate");
let input = document.querySelector("#name");

input.addEventListener("input", function() {
    validate.innerHTML = input.value;
});

