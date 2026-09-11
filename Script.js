function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("show");

}


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.getElementById("navMenu");

        nav.classList.remove("show");

    });

});
