let a = true;
let btn = document.getElementById("btn-chng-mode");
btn.innerHTML="Dark Mode";
btn.addEventListener('click', function(e) {
    if (a) {
        btn.innerHTML="Light Mode";
        darkMode()
        a = false;
    }
    else{
        btn.innerHTML="Dark Mode";
        lightMode()
            a = true;
        }
    }
)

// Dark mode
let darkMode = ()=>{
    document.body.style.backgroundColor = "black";
    document.documentElement.style.setProperty("--clr-primary","#eee",);
    document.documentElement.style.setProperty("--clr-second","#eee");
    document.documentElement.style.setProperty("--clr-third","#6914ad");
}
// Dark mode End

// Light mode
let lightMode = ()=>{
    document.body.style.backgroundColor = "#e4ea8a";
    document.documentElement.style.setProperty("--clr-primary","#4F4F4F");
    document.documentElement.style.setProperty("--clr-second","#828282");
    document.documentElement.style.setProperty("--clr-third","#333333");
}
// Light mode End