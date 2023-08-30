function calc() {
    let size = document.getElementById("shoe_size").value;
    let year = document.getElementById("year").value;

    let result = size * 2 + 5 * 50 + year - 1766;
    alert(result); 
}