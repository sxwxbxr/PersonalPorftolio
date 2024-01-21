
// Functions for Login Page
const x = document.getElementById('login');
const y = document.getElementById('register');
const z = document.getElementById('btn');

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