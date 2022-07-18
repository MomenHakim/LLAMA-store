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

// Pop up zoomed image
let imgArray = document.querySelectorAll(".package img");
imgArray.forEach(img => {
    img.addEventListener("click" , (e) => {
        //Create main element
        let mainElement = document.createElement("div");
        //Main element class
        mainElement.className = "popup-element"
        //Append main element to body
        document.body.appendChild(mainElement);
        //Add Image to main element
        let elementImg = document.createElement("img");
        elementImg.src = img.src
        mainElement.appendChild(elementImg);
        //add exit button
        let exitBtn = document.createElement("button");
        let Xbtn = document.createElement("i");
        Xbtn.classList.add("fa-solid","fa-xmark","fs-1","p-3");
        exitBtn.appendChild(Xbtn);
        mainElement.appendChild(exitBtn);
        //add function to exit button
        exitBtn.addEventListener("click" , () => {
            mainElement.style.display = "none";
        })
    })
})


//add fullscreen logo on every image


let flScreen = document.createElement("i");
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

