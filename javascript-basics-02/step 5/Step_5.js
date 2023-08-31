let image = document.querySelectorAll("img");

for (let i=0; i<5; i++) {
    image[i].addEventListener("mouseover", function() {
        image[i].src = "images/image" + (i+1) + "_2.jpg";
    });
}

