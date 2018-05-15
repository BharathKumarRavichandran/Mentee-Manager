var addButton = document.getElementById("addButton");
var heading = document.getElementById("heading");
var menteeRegion = document.getElementById("menteeRegion");
var menteeRegionInput = document.getElementById("menteeRegionInput");
var mBoxInputId = document.getElementById("mBoxInputId");
var mBoxInput = document.getElementsByClassName("mBoxInput");
var mCommentId = document.getElementById("mCommentId");
var mComment = document.getElementsByClassName("mComment");
var mName = document.getElementsByClassName("mName");
var nameId = document.getElementById("nameId");
var rating = document.getElementById("rating");
var width = window.innerWidth;
var height = window.innerHeight;
var w = width/2;
var mentee = new Array();
var menteeName = new Array(); //Array which contains the name of mentees
var menteeComment = new Array(); //Array which contains the comment on each mentees
var menteeRating = new Array(); //Array which contains the rating oon each mentee
var count = 0;//No. of mentee's
var i=0;//Maximum mentee number
var j=0;
var k;
var edit = false;

if(w>500){
	heading.style.marginLeft = (w-w/2.5)+"px";//To centre the heading
	addButton.style.marginLeft = (w-w/12)+"px"; //To centre the element
	mBoxInputId.style.marginLeft = (w-w/6)+"px"; //To centre the element	
}

window.onload = function(){
	menteeRegionInput.removeChild(mBoxInputId);
	initialise();
}

Element.prototype.remove = function() {  //Function written to remove element easily using .remove()
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function drawBox(u){


			var div1 = document.createElement("div");
			var nameSpan = document.createElement("span");
			var ratingSpan = document.createElement("span");
			var rateValueSpan = document.createElement("span");
			var div2 = document.createElement("div");
			var ul = document.createElement("ul");
			var input1 = document.createElement("input");
			var span3 = document.createElement("span");
			var cb = document.createElement("button");
			var div3 = document.createElement("div");
			var span4 = document.createElement("span");
			var eb = document.createElement("button");
			var span5 = document.createElement("span");
			var db = document.createElement("button");
			
			var nametxt = document.createTextNode(localStorage.getItem("nameSpan"+u));
			var rateValue = document.createTextNode(localStorage.getItem("rateSpan"+u));
			var ratetxt = document.createTextNode(" Rating :");
			var commtxt = document.createTextNode("Comments :");
			var cbtxt = document.createTextNode("comment");
		 	var ebtxt = document.createTextNode("Edit profile");
		 	var dbtxt = document.createTextNode("Delete profile");
			nameSpan.appendChild(nametxt);
			ratingSpan.appendChild(ratetxt);
			rateValueSpan.appendChild(rateValue);
			ratingSpan.appendChild(rateValueSpan);
			div2.appendChild(commtxt);
			cb.appendChild(cbtxt);
			eb.appendChild(ebtxt);
			db.appendChild(dbtxt);
			div1.appendChild(nameSpan);
			div1.appendChild(ratingSpan);
			div1.appendChild(div2);
			div1.appendChild(ul);
			div1.appendChild(input1);
			span3.appendChild(cb);
			div1.appendChild(span3);
			span4.appendChild(eb);
			span5.appendChild(db);
			div3.appendChild(span4);
			div3.appendChild(span5);
			div1.appendChild(div3);
			document.getElementById("menteeRegion").appendChild(div1);

			div1.setAttribute("id","mBoxId"+u);
			nameSpan.setAttribute("id","nameSpan"+u);
			ratingSpan.setAttribute("id","mStar");
			rateValueSpan.setAttribute("id","rateSpan"+u);
			div2.setAttribute("id","commentHead");
			ul.setAttribute("id","listId"+u);
			input1.setAttribute("id","mcId"+u);
			cb.setAttribute("id","commentButton"+u);
			eb.setAttribute("id","editButton"+u);
			db.setAttribute("id","deleteButton"+u);
			
			div1.setAttribute("class","mBox");
			nameSpan.setAttribute("class","mName");
			ratingSpan.setAttribute("class","mStarClass");
			rateValueSpan.setAttribute("class","mstar");
			div2.setAttribute("class","commentHeadClass");
			ul.setAttribute("class","list");
			input1.setAttribute("class","mComment");
			cb.setAttribute("class","commentButtonClass");
			div3.setAttribute("class","edButtons");
			eb.setAttribute("class","editButtonClass");
			db.setAttribute("class","deleteButtonClass");

			input1.setAttribute("type","text");
			input1.setAttribute("name","comment");
			input1.setAttribute("onfocus","this.value='';");
			input1.setAttribute("value","Write a comment...");

			cb.setAttribute("onclick","newComment(this);");
			eb.setAttribute("onclick","editBox(this);");
			db.setAttribute("onclick","deleteBox(this);")

}

function initialise(){

	i=localStorage.getItem("maxMentee");
	
	for(var t=0;t<i;t++){
		if(localStorage.getItem("nameSpan"+t)===null){
			//do nothing
		}
		else{

			j = localStorage.getItem("comments"+t);

			drawBox(t);

			document.getElementById("nameSpan"+t).innerHTML = localStorage.getItem("nameSpan"+t);
			document.getElementById("rateSpan"+t).innerHTML = localStorage.getItem("rateSpan"+t);
			
			for(var r=0;r<j;r++){
				var newItem = document.createElement("LI");
				newItem.setAttribute("id","comment"+t.toString()+r.toString());
				newItem.setAttribute("class","comment");
				var textnode = document.createTextNode(localStorage.getItem("comment"+t.toString()+r.toString()));
				newItem.appendChild(textnode);
				document.getElementById("listId"+t).appendChild(newItem);
			}
			
			boxColorChecker(t);
		}
	}
}


function addBox(){
	menteeRegionInput.appendChild(mBoxInputId);
}

function submitButton(){
	if(edit==false){
		newMentee();
	}

	else{
		editBoxSubmit();
	}
}

function boxColorChecker(l){
	if(localStorage.getItem("rateSpan"+l)>3&&localStorage.getItem("rateSpan"+l)<=5){
		document.getElementById("mBoxId"+l).style.backgroundColor = "#01FF70";
	}

	else if(localStorage.getItem("rateSpan"+l)<3){
		document.getElementById("mBoxId"+l).style.backgroundColor = "#FF4136";	
	}
}

function newMentee(){
	j=0;
	menteeComment[i] = new Array();
	menteeName[i] = nameId.value;
	menteeComment[i][j] = mCommentId.value;
	menteeRating[i] = rating.value;

	localStorage.setItem("nameSpan"+i,menteeName[i]);
	localStorage.setItem("rateSpan"+i,menteeRating[i]);
	localStorage.setItem("comment"+i.toString()+j.toString(),menteeComment[i][j]);

	nameId.value="Mentee's Name";
	mCommentId.value="Write a comment...";
	rating.value="";

	drawBox(i);
	
	document.getElementById("nameSpan"+i).innerHTML = localStorage.getItem("nameSpan"+i);
	document.getElementById("rateSpan"+i).innerHTML = localStorage.getItem("rateSpan"+i);
	var newItem = document.createElement("LI");
	newItem.setAttribute("id","comment"+i.toString()+j.toString());
	newItem.setAttribute("class","comment");
	var textnode = document.createTextNode(localStorage.getItem("comment"+i.toString()+j.toString()));
	newItem.appendChild(textnode);
	document.getElementById("listId"+i).appendChild(newItem);

	boxColorChecker(i);

	i++;
	count++;
	j++;
	localStorage.setItem("maxMentee",i);
	localStorage.setItem("count",count);
	localStorage.setItem("comments"+i,j);

	document.getElementById("mBoxInputId").remove();
}

function newComment(y){
	var k = y.id[13];
	var mcIdnew = "mcId"+k;
	var listIdnew = "listId"+k;
	menteeComment[k][j] = document.getElementById(mcIdnew).value;
	var newItem = document.createElement("LI");
	newItem.setAttribute("id","comment"+k.toString()+j.toString());
	newItem.setAttribute("class","comment");
	localStorage.setItem("comment"+k.toString()+j.toString(),menteeComment[k][j]);
	localStorage.setItem("comments"+k,j);
	var textnode = document.createTextNode(localStorage.getItem("comment"+k.toString()+j.toString()));
	newItem.appendChild(textnode);
	document.getElementById(listIdnew).appendChild(newItem);
	document.getElementById(mcIdnew).value="Write a comment...";
	j++;
}

function editBox(y){
	k = y.id[10];//To get the mentee number
	edit=true;
	menteeRegionInput.appendChild(mBoxInputId);
}

function editBoxSubmit(){
	menteeName[k] = nameId.value;
	menteeRating[k] = rating.value;
	var nameSpannew = "nameSpan"+k;
	var rateSpannew = "rateSpan"+k;
	localStorage.setItem("nameSpan"+k,menteeName[k]);
	localStorage.setItem("rateSpan"+k,menteeRating[k]);
	document.getElementById(nameSpannew).innerHTML = localStorage.getItem("nameSpan"+k);
	document.getElementById(rateSpannew).innerHTML = localStorage.getItem("rateSpan"+k);
	boxColorChecker(k);
	var commentAdd = mCommentId.value;
	if(commentAdd!="" || commentAdd!="Write a comment..."){
		menteeComment[k][j] = mCommentId.value;
		localStorage.setItem("comment"+k.toString()+j.toString(),menteeComment[k][j]);
		var mcIdnew = "mcId"+k;
		var listIdnew = "listId"+k;
		menteeComment[k][j] = document.getElementById(mcIdnew).value;
		var newItem = document.createElement("LI");
		newItem.setAttribute("id","comment"+k.toString()+j.toString());
		newItem.setAttribute("class","comment");
		var textnode = document.createTextNode(localStorage.getItem("comment"+k.toString()+j.toString()));
		newItem.appendChild(textnode);
		document.getElementById(listIdnew).appendChild(newItem);
		j++;
	}	
	edit=false;
	nameId.value="Mentee's Name";
	mCommentId.value="Write a comment...";
	rating.value="";
	k=-1;
	document.getElementById("mBoxInputId").remove();
}

function deleteBox(y){
	var k = y.id[12];//To get the mentee number
	var mBoxIdnew = "mBoxId"+k;
	var x = document.getElementById(mBoxIdnew);
	x.remove();
	localStorage.removeItem("nameSpan"+k);
	localStorage.removeItem("rateSpan"+k);
	localStorage.removeItem("comments"+k);
	for(;j>=0;j--){
		localStorage.removeItem("comment"+k.toString()+j.toString(),menteeComment[k][j]);
	}
	count--;
	localStorage.setItem("count",count);	
}
