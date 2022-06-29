// Setting box
document.querySelector(".setting-box").onclick = () => document.querySelector(".setting-box").classList.toggle("setting-box-active");

let clNo = document.querySelector(".setting-box .info .no")
let clYes = document.querySelector(".setting-box .info .yes")

clYes.addEventListener("click", () => {
    clNo.classList.remove("activeBtn")
    clYes.classList.add("activeBtn")
    setInterval(bkground, 3000)
})

clNo.addEventListener("click", () => {
    clYes.classList.remove("activeBtn")
    clNo.classList.add("activeBtn")
    clearInterval(backgroundCounter)
    page.style.backgroundImage = `url(${imgsArray[randomNumber]})`
})

























