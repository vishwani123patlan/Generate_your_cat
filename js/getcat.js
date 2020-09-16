function getCat(){
var image = document.createElement('img');
var div = document.getElementById("catGenerator");
image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
div.appendChild(image);
};