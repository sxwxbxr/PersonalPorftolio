// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.querySelector(".container");

    welcomeScreen.addEventListener("mousemove", function (e) {
        const { clientX: x, clientY: y } = e;
        const percentX = (x / window.innerWidth) * 100;
        const percentY = (y / window.innerHeight) * 100;

        welcomeScreen.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.2), transparent)`;
    });
});

function goToLogin() {
    window.location.href = "login.html";
}