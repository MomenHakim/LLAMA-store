// Setting box
document.querySelector(".icon").onclick = () =>
document.querySelector(".setting-box-content").classList.toggle("setting-box-content-active");
// Background change
let imgChange = document.querySelectorAll(".info ul img");
let mainImg = document.querySelector(".bkgr");
imgChange.forEach(e => {
    e.onclick = () => {
        mainImg.src = e.src;
        localStorage.setItem("background" , e.src);
    }
});
//Save background change to local storage
if (localStorage.getItem("background") !== null) {
    mainImg.src = localStorage.background
}


//Scroll to top button
let scrollTop = document.getElementById("iconUp");

window.onscroll = () => {
    if (window.scrollY >=500) {
        scrollTop.style.display = "block";
    }
    else {
        scrollTop.style.display = "none";
    }
}
scrollTop.onclick = () => {
    window.scrollTo ({
        top:0,
        behavior:"smooth"
    })
}






















