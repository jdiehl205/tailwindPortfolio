let item = document.querySelectorAll(".uni");
let list = document.getElementById("drop");
let main = document.getElementById("main");
let drop = document.getElementById("icon");
let arrow = document.querySelector(".arrow");
let nav = document.getElementById("nav");

let dropDown = x => {
    drop.addEventListener("click", x => {
        gsap.to(main, {opacity: 0, display: "none", duration: 3})
        gsap.fromTo(list, {position: 'absolute', bottom: 1000}, {bottom: 0, duration: 2.5});
    });
};

let changeStyle = x => {
    item.forEach(it => {
        it.addEventListener("click", x => {
            gsap.to(main, {opacity: 1, display: "block", duration: 3.5});
            gsap.to(list, {bottom: 1000, duration: 3});
        });
    });
};

let width = x => {
    if(window.screen.width >= 1024){
        gsap.to(drop, {display: "none"});
        gsap.to(nav, {display: "block"});
    }else{
        gsap.to(nav, {display: "none"});
        gsap.to(drop, {display: "block"});
    }

    window.addEventListener("resize", x => {
        if(window.screen.width >= 1024){
            drop.style.display = "none";
            nav.style.display = "block";
        }else{
            nav.style.display = "none";
            drop.style.display = "block";
        }
    });
}

width();
dropDown();
changeStyle();