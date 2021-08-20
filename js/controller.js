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

const dropdownBtn = document.getElementById("dropdown-btn")
const dropdownItems = document.getElementsByClassName("dropdown-items")[0]
const dropdownLinks = document.getElementsByClassName("dropdown-links")



function onPageLoad(){

    dropdownBtn.onclick = function() {
        if (dropdownItems.style.display == "block") {
            dropdownItems.style.display = "none"
        }
        else {
            dropdownItems.style.display = "block"
        }
    }

    for (let link of dropdownLinks) {
        link.onclick = function() {
            dropdownItems.style.display = "none"
        }
    }

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