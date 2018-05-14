var addButton = document.getElementById("addButton");
var commentButton = document.getElementById("commentButton");
var editButton = document.getElementById("editButton");
var deleteButton = document.getElementById("deleteButton");
var heading = document.getElementById("heading");
var list = document.getElementsByClassName("list");
var menteeRegion = document.getElementById("menteeRegion");
var menteeRegionInput = document.getElementById("menteeRegionInput");
var mBoxId = document.getElementById("mBoxId");
var mBoxInputId = document.getElementById("mBoxInputId");
var mBox = document.getElementsByClassName("mBox");
var mBoxInput = document.getElementsByClassName("mBoxInput");
var mcId = document.getElementById("mcId");
var mCommentId = document.getElementById("mCommentId");
var mName = document.getElementsByClassName("mName");
var mComment = document.getElementsByClassName("mComment");
var mComment1 = document.getElementById("mComment1");
var mStar = document.getElementById("mStar");
var nameId = document.getElementById("nameId");
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
var k=0;

if(w>500){
	heading.style.marginLeft = (w-w/2.5)+"px";//To centre the heading
	addButton.style.marginLeft = (w-w/12)+"px"; //To centre the element
	mBoxInputId.style.marginLeft = (w-w/6)+"px"; //To centre the element	
}

var rateSpan = document.getElementById("rateSpan");
var mstar =document.getElementsByClassName("mstar");

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

function newMentee(){
	j=0;
	menteeComment[i] = new Array();
	menteeName[i] = nameId.value;
	menteeComment[i][j] = mCommentId.value;
	menteeRating[i] = rating.value;
	nameId.value="Mentee's Name";
	mCommentId.value="Write a comment...";
	rating.value="";
	menteeRegionInput.removeChild(mBoxInputId);
	mentee[i] = mBoxId.cloneNode(true);
	mentee[i].setAttribute("id","mBoxId"+i);
	var p = mentee[i].getAttribute("id");
	//alert(document.getElementById(p));
	var mBoxChild = mentee[i].childNodes;
	//alert(mBoxChild[12]);
	//mBoxChild[12].setAttribute("id","commentButton"+i);
	mBoxId.id = "mBoxId"+i;
	commentButton.id = "commentButton"+i;
	commentButton.setAttribute("id","commentButton"+i);
	var q = menteeRating[i].toString();
	rateSpan.innerHTML = q;
	rateSpan.id = "rateSpan"+i;
	//alert(document.getElementById("commentButton"+i));
	mcId.id ="mcId"+i;
	editButton.id = "editButton"+i;
	deleteButton.id = "deleteButton"+i;
	mStar.id = "mStar"+i;
	/*.setAttribute("id","mName"+i);
	.setAttribute("id","mStar"+i);
	.setAttribute("id","listId"+i);*/

	/*var newItem = document.createElement("LI");
    var textnode = document.createTextNode(menteeComment[i]);
    newItem.appendChild(textnode);
    var list = document.getElementById("list");
    list.appendChild(newItem);*/
    //list.insertBefore(newItem,list.childNodes[0]);
	//mComment1.innerHTML = menteeComment[i];

	menteeRegion.appendChild(mentee[i]);
	mName[i].innerHTML = menteeName[i];
	mstar[i].innerHTML = menteeRating[i];
	var newItem = document.createElement("LI");
	var textnode = document.createTextNode(menteeComment[i][j]);
	newItem.appendChild(textnode);
	list[i].appendChild(newItem);
	i++;
	j++;
}

function newComment(){
	k = commentButton.id[13];//To get the mentee number
	var mcIdnew = mcId.id;
	alert(mcIdnew);
	menteeComment[k][j] = mcIdnew.value;
	var newItem = document.createElement("LI");
	var textnode = document.createTextNode(menteeComment[k][j]);
	newItem.appendChild(textnode);
	list[k].appendChild(newItem);
	var y = document.getElementById("mcIdnew");
	y.value="Write a comment...";
	j++;
}

function editBox(){
	k = editButton.id[10];//To get the mentee number
}

function deleteBox(){
	k = deleteButton.id[12];//To get the mentee number
	mBoxIdnew = "mBoxId"+k;
	var x = document.getElementById(mBoxIdnew);
	x.parentNode.removeChild(x);
	menteeRegion.removeChild(mentee[k]);
}
