
 "use strict";


// three different ways to change bg color when window is resized


// 1.

window.onresize = function(){
    if (window.innerWidth > 700){
     document.body.style.backgroundColor = "orange";
    } 
    if (window.innerWidth > 400) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "blue";
    }
   }




// 2.

window.onresize = function() {
    if (window.innerWidth > 700) {
        document.body.classList.add("orange-bg");
    } else {
        document.body.classList.add("blue-bg");
    }
}



// 3.

function resizeWidth() {
    if (window.innerWidth > 700) {
        document.body.classList.add("orange-bg");
    } else {
        document.body.classList.add("blue-bg");
    }
}

window.addEventListener("resize", resizeWidth);