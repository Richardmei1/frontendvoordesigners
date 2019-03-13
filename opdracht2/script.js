// Tutorial https://www.youtube.com/watch?v=sQuniQCzNlY

var slider_content = document.getElementById("box");

// images in array
var image = ["a", "b", "c", "d"]

var i = image.length;

// functie voor volgende foto

function nextImage() {
    if (i < image.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpeg>";
}

// functie voor vorige slide

function prevImage() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpeg>";
}



// EventListener voor wanneer een knop wordt ingedrukt -> functie checkKeyPress -> false (no return)
// https://www.youtube.com/watch?v=VBVOXTgXX2U&list=PLcf9ltFhcqhucr-ej-5btRcQs_46EyZiz&index=8&t=41s

window.addEventListener("keydown", checkKeyPress, false);

// functie voor de linker en rechterpijl

function checkKeyPress(key) {
    if (key.keyCode == "37") {
        prevImage();
    } else if (key.keyCode == "39") {
        nextImage();
    }
}
