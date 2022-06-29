// Pop up zoomed image

let imgArray = document.querySelectorAll(".package img");
imgArray.forEach(img => {
    img.addEventListener("click" , (e) => {

        //Create main element
        let mainElement = document.createElement("div")

        //Main element class
        mainElement.className = "popup-element"

        //Append main element to body
        document.body.appendChild(mainElement);

    })
})



