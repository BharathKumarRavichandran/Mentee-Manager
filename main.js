var addButton = document.getElementById("addButton");
var menteeRegion = document.getElementById("menteeRegion");
var menteeRegionInput = document.getElementById("menteeRegionInput");
var mBoxId = document.getElementById("mBoxId");
var mBoxInputId = document.getElementById("mBoxInputId");
var mBox = document.getElementsByClassName("mBox");
var mBoxInput = document.getElementsByClassName("mBoxInput");
var mCommentId = document.getElementById("mCommentId");
var mName = document.getElementsByClassName("mName");
var mComment = document.getElementsByClassName("mComment");
var mComment1 = document.getElementById("mComment1");
var mStar = document.getElementById("mStar");
var nameId = document.getElementById("nameId");
var rate;
var rating = document.getElementById("rating");
var width = window.innerWidth;
var height = window.innerHeight;
var w = width/2;
var mentee = new Array();
var menteeName = new Array(); //Array which contains the name of mentees
var menteeComment = new Array(); //Array which contains the comment on each mentees
var menteeRating = new Array(); //Array which contains the rating oon each mentee
var i=0;//No. of mentees
var j=0;
addButton.style.marginLeft = (w-w/13)+"px"; //To centre the element
mBoxInputId.style.marginLeft = (w-w/6)+"px"; //To centre the element

window.onload = function(){
	menteeRegion.removeChild(mBoxId);
	menteeRegionInput.removeChild(mBoxInputId);
}

function addBox(){
 menteeRegionInput.appendChild(mBoxInputId);
}
/*
function myFunction() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    newItem.appendChild(textnode);

    var list = document.getElementById("myList");
    list.insertBefore(newItem, list.childNodes[0]);
}*/
var mcId = document.getElementById("mcId");

function newMentee(){
 menteeName[i] = nameId.value;
 menteeComment[i] = mCommentId.value;
 menteeRating[i] = rating.value;
 nameId.value="Mentee's Name";
 mCommentId.value="Write a comment..";
 menteeRegionInput.removeChild(mBoxInputId);
 mentee[i] = mBoxId.cloneNode(true);
 
 var starNodes = mStar.childNodes;
 for(j=0;j<menteeRating[i];j++){
 	alert(starNodes[j]);
 	//starNodes[j].classList.add("checked");
 }

	/*var newItem = document.createElement("LI");
    var textnode = document.createTextNode(menteeComment[i]);
    newItem.appendChild(textnode);
    var list = document.getElementById("list");
    list.appendChild(newItem);*/
    //list.insertBefore(newItem,list.childNodes[0]);
	//mComment1.innerHTML = menteeComment[i];

 menteeRegion.appendChild(mentee[i]);
 mName[i].innerHTML = menteeName[i];
 mComment[i].innerHTML = menteeComment[i];
 i++;
 /*var c =mentee[i].childNodes;
 for(var j=0;j<c.length;j++){ 
 alert(c[i].nodeName);
}*/
}