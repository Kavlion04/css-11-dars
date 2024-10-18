window.addEventListener("scroll", function () {
    
})

let navbar = document.getElementById(".navbar");

function shrink () {
    if (scrollY > 0) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}