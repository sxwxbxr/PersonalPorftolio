document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.querySelector(".container");

    welcomeScreen.addEventListener("mousemove", function (e) {
        const { clientX: x, clientY: y } = e;
        const percentX = (x / window.innerWidth) * 100;
        const percentY = (y / window.innerHeight) * 100;

        welcomeScreen.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.2), transparent)`;
    });
});



// Functions for Login Page
let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');

function login(){
    x.style.left = "27px";
    y.style.right = "-350px";
    z.style.left = "0px";
}
function register(){
    x.style.left = "-350px";
    y.style.right = "25px";
    z.style.left = "150px";
}

function myLogPassword(){

    const a = document.getElementById("logPassword");
    const b = document.getElementById("eye");
    const c = document.getElementById("eye-slash");

    if(a.type === "password"){
        a.type = "text";
        b.style.opacity = "0";
        c.style.opacity = "1";
    }else{
        a.type = "password";
        b.style.opacity = "1";
        c.style.opacity = "0";
    }

}

function myRegPassword(){

    const d = document.getElementById("regPassword");
    const b = document.getElementById("eye-2");
    const c = document.getElementById("eye-slash-2");

    if(d.type === "password"){
        d.type = "text";
        b.style.opacity = "0";
        c.style.opacity = "1";
    }else{
        d.type = "password";
        b.style.opacity = "1";
        c.style.opacity = "0";
    }

}

function goToHome() {
    window.location.href = "index.html";
}