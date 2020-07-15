var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementsByClassName("delBtn");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	//creates a button and adds it inside the li
	var btn = document.createElement("Button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add('delBtn');
	li.appendChild(btn);
	ul.appendChild(li);
	setButtons();
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//toggles done class to strikethrough
function liClicked()
{
	console.log("li clicked");
	var element = document.querySelector("li");
  	element.classList.toggle("done");
}

//removes the li as parent element
function deleteLi(e){
	e.target.parentNode.remove();

}

function toggleStrike(e) {
		if (e.target.tagName === 'LI')
		{
      	e.target.classList.toggle("done");
  	}
}

//adds event listener to all buttons
function setButtons(){
	for (var i = 0; i <del.length; i++){
		del[i].addEventListener('click', deleteLi);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


//toggles underline 
ul.addEventListener('click', toggleStrike);