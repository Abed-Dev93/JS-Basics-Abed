let anchor = document.querySelectorAll("a");
let text = document.querySelector("#texte");

for (let i=0; i<2; i++) {
    anchor[i].addEventListener("click", function(event) {
        if (event.target.id === "hide")
            text.style. display = "none";
        else if (event.target.id === "show")
            text.style.display = "block";
    });
}