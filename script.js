var smallscreen=document.querySelector('.user-window');
function show_hide(){
	if(smallscreen.style.display=="block"){
		smallscreen.style.display="none";
	}
	else {
		smallscreen.style.display="block";
	}
}
 

// var smallerscreen=document.querySelector('.first-content');
// function show_hide(){
// 	if(smallerscreen.style.display=="block"){
// 		smallerscreen.style.display="none";
// 	}
// 	else {
// 		smallerscreen.style.display="block";
// 	}
// }





var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
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

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}