
let profilePic = document.getElementById("profile-pic");
let modal = document.getElementById("modal");
let modalId = document.getElementById("modal-content")

var span = document.getElementsByClassName("close")[0];

profilePic.onclick = function() {
    console.log("clicked")
  modal.style.display = "block";
  modalId.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalId.style.display = "none";
  }
}
