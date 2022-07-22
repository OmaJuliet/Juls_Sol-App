var smallscreen=document.querySelector('.user-window');
function show_hide(){
	if(smallscreen.style.display=="block"){
		smallscreen.style.display="none";
	}
	else {
		smallscreen.style.display="block";
	}
}
 


//To enlarge user profile image when clicked
var modal = document.getElementById("myModal");
// Grabbing the image and inserting it inside the modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block"; 
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
