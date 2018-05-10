var addButton = document.getElementById("addButton");
var menteeRegion = document.getElementById("menteeRegion");
var menteeRegionInput = document.getElementById("menteeRegionInput");
var mBoxId = document.getElementById("mBoxId");
var mBoxInputId = document.getElementById("mBoxInputId");
var mBox = document.getElementsByClassName("mBox");
var mBoxInput = document.getElementsByClassName("mBoxInput");
var nameId = document.getElementById("nameId");
var width = window.innerWidth;
var height = window.innerHeight;
var w = width/2;
var mentee = new Array();
var i=0;//No. of mentees
addButton.style.marginLeft = (w-w/13)+"px";
mBoxInputId.style.marginLeft = (w-w/6)+"px";

window.onload = function(){
	menteeRegion.removeChild(mBoxId);
	menteeRegionInput.removeChild(mBoxInputId);
}

function addBox(){
 /*mentee[i] = mBoxId.cloneNode(true);	
 menteeRegion.appendChild(mentee[i]);*/
 menteeRegionInput.appendChild(mBoxInputId);
 i++;
}