const bikeImg = document.getElementById("bike-img");
const bikeTitle = document.querySelector(".bike");
const bikeCover = document.querySelector(".bike-col img");

const climbImg = document.getElementById("climb-img");
const climbTitle = document.querySelector(".climb");
const climbCover = document.querySelector(".climb-col img");

const hikeImg = document.getElementById("hike-img");
const hikeTitle = document.querySelector(".hike");
const hikeCover = document.querySelector(".hike-col img");

const imgCover = document.querySelectorAll(".img-cover");



function onPageLoad(){
    bikeImg.onmouseover = function() {
        onHover(bikeTitle, bikeCover, 0);
    }
    bikeImg.onmouseleave = function() {
        onLeave(bikeTitle, bikeCover, 0);
    }
    climbImg.onmouseover = function() {
        onHover(climbTitle, climbCover, 1);
    }
    climbImg.onmouseleave = function() {
        onLeave(climbTitle, climbCover, 1);
    }
    hikeImg.onmouseover = function() {
        onHover(hikeTitle, hikeCover, 2);
    }
    hikeImg.onmouseleave = function() {
        onLeave(hikeTitle, hikeCover, 2);
    }
}


function onHover(title, cover, elem){
  imgCover[elem].style.backgroundColor = "black";
  title.style.display = "block";
  cover.style.opacity = "60%";
}

function onLeave(title, cover, elem){
    imgCover[elem].style.backgroundColor = "transparent";
    title.style.display = "none";
    cover.style.opacity = "100%";

}

onPageLoad();