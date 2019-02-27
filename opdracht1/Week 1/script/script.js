var favbutton = document.getElementsByName("knop");


favbutton.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.firstChild.className.includes("far fa-heart")) {
            button.firstChild.className = "fas fa-heart";
        } else {
            button.firstChild.className = "far fa-heart";
        }
    });
});

/* JS VAN WESSEL WOUDENBERG */

/* function changeClass() {
    if (document.getElementById("like").classList.contains("far fa-heart")) {
        document.getElementsByClassName("far fa-heart").className = "fas fa-heart";
    } else {
        document.getElementsByClassName("fas fa-heart").className = "far fa-heart";
    }
}
}

window.onload = function () {
    document.getElementById("like").addEventListener("click", changeClass);
};

*/
