
/*Navigation buttons
------------------------------------------------------


------------------------------------------------------
*/
document.getElementById("homeButton").onclick = function() {scrollToID("top");};
document.getElementById("p1b").onclick = function() {scrollToID("p1");};
document.getElementById("p2b").onclick = function() {scrollToID("p2");};
document.getElementById("p3b").onclick = function() {scrollToID("p3");};

/*Scroll functions
------------------------------------------------------


------------------------------------------------------
*/
function scrollToID(locationId) {
	//window.location.hash = locationId;
	document.getElementById(locationId).scrollIntoView({behavior: "smooth"});
}

/*Image gallery buttons for project 3
------------------------------------------------------


------------------------------------------------------
*/
var slideIndex3 = 1;
showDivs(slideIndex3,"images3");
function plusDivs(n, imageGroup) {showDivs(slideIndex3 += n, imageGroup);}
function showDivs(S, imageGroup) {
	var i;
	var x = document.getElementsByClassName(imageGroup);
	if (S > x.length-2) {slideIndex3 = 1;} 
	if (S < 1) {slideIndex3 = x.length-2;}
	for (i = 0; i < x.length; i++) {x[i].style.display = "none"; }
	x[slideIndex3-1].style.display = "inline-table"; 
	x[slideIndex3].style.display = "inline-table"; 
	x[slideIndex3+1].style.display = "inline-table"; 
}

/*Image enlargement
------------------------------------------------------


------------------------------------------------------
*/

var modalImg = document.getElementById("imageID");
var captionText = document.getElementById("captionID");
var modal = document.getElementById("modalID");

function enlarge(triggerID) {
	var triggerImg = document.getElementById(triggerID);
	triggerImg.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
		console.log(captionText);
	}
}

enlarge("p3i1");
enlarge("p3i2");
enlarge("p3i3");
enlarge("p3i4");
enlarge("p3i5");
enlarge("p3i6");
enlarge("p3i7");
enlarge("p3i8");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

/*PDF file open 
------------------------------------------------------


------------------------------------------------------
*/

openPDF("Doc2", "Data/project2/report.pdf");
openPDF("Doc3", "Data/project3/report.pdf");

var modal2 = document.getElementById("modalID2");
function openPDF(triggerpdfID, source) {
	var linkID = document.getElementById(triggerpdfID);
	var PDFdoc = document.getElementById("projectPDF");
	linkID.onclick = function(){
		if (screen.width<992) {
			window.open(PDFdoc.src, '_blank');
		}
		else {
			modal2.style.display = "block";
			PDFdoc.src = source;
		}
	}
}	

var span = document.getElementsByClassName("close")[1];

span.onclick = function() {
  modal2.style.display = "none";
}
