function myFunction() {
    var x = document.getElementById("navTop");
    if (x.className === "navMain") {
        x.className += " responsive";
    } else {
        x.className = "navMain";
    }
}