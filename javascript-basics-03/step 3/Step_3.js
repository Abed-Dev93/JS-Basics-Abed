let div = document.querySelectorAll(".color");
let text = document.querySelector("#text");

for (let i=0; i<div.length; i++) {
    div[i].addEventListener("click", function(event) {
        if (event.target.classList.contains("green"))
            text.style.color = "rgb(0, 255, 0)";
        else if (event.target.classList.contains("red"))
            text.style.color = "rgb(255, 0, 0)";
        else if (event.target.classList.contains("blue"))
            text.style.color = "rgb(0, 0, 255)";
    });
}