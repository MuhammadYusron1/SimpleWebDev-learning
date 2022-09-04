// Hamburger menu selections

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Hamburger menu functionality

// Theme switcher selection

// Close menu on nav menu clicks

// scroll to top functionality
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0, left: 0, behavior: "smooth",
    });
});

// Theme switcher functionality