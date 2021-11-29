const hamburger = document.querySelector(".hamburger");
const navMenyu = document.querySelector(".nav-menyu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenyu.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(n =>n.
    addEventListener("click",()=>{
        hamburger.classList.remove(active);
        navMenyu.classList.remove(active)
    }))