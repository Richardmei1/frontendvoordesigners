var requestUrl = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section = document.querySelector("section");
var movies = [];
var index = 0;
var currentReviews = [];

// On load, load images from url
window.onload = loadImages();

// Displays movie at index
function showData(index) {
    // Get current movie to display
    var movie = movies[index];

    var movieArticle = document.createElement('article');

    var movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.title;

    var moviePlot = document.createElement('p');
    moviePlot.textContent = movie.simple_plot;

    var movieCover = document.createElement('img');
    movieCover.src = movie.cover;

    currentReviews = movie.reviews;

    movieArticle.appendChild(movieTitle);
    movieArticle.appendChild(moviePlot);
    movieArticle.appendChild(movieCover);
    movieArticle.id = 'movie';

    section.appendChild(movieArticle);
}


// functions to show reviews

function showReviews() {
    var readReviews = document.createElement('ul');
    readReviews.id = 'reviewsList'

    for (var j = 0; j < currentReviews.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = currentReviews[j].score + ' - ' + currentReviews[j].created_at;
        readReviews.appendChild(listItem);
    }
    // if reviews are loaded, disable loading more reviews
    if (document.getElementById('reviewsList')) {
        removeReview();
    }
    document.getElementById('movie').appendChild(readReviews);
}



function loadImages() {
    var request = new XMLHttpRequest();

    request.open('get', requestUrl);
    request.responseType = 'json';
    request.send();
    request.addEventListener("load", function () {
        movies = request.response;
        showData(index);

    });

    request.timeout = 10000;
    request.ontimeout = function (e) {
        console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
    };
    request.onerror = function () {
        console.log('Fetch Error', request.status);
    };
}

// Buttons previous & next

// Updates index to previous index, removes old movie, then adds previous movie to document
function prevMovie() {
    if (index === 0) {
        index = movies.length - 1;
    } else {
        index--;
    }

    removeData();
    showData(index);
}

// Updates index to next index, removes old movie, then adds next movie to document
function nextMovie() {
    if (index === movies.length - 1) {
        index = 0;
    } else {
        index++;
    }

    removeData();
    showData(index);
}

// Removes current movie from document
function removeData() {
    var currentMovie = document.getElementById('movie');
    currentMovie.parentNode.removeChild(currentMovie);
}

function removeReview() {
    var currentReview = document.getElementById('reviewsList');
    currentReview.parentNode.removeChild(currentReview);
}

// EventListener for when a key gets pressed -> function checkKeyPress -> false (no return)
window.addEventListener("keydown", checkKeypress, false);

// functie for left & right button and review button

function checkKeypress(key) {
    if (key.keyCode == "37") {
        prevMovie();
    } else if (key.keyCode == "39") {
        nextMovie();
    } else if (key.keyCode == "32") {
        showReviews();
    }
}
