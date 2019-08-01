var image = document.getElementById("pic");
var index = 0

var origh = image.height;
var origw = image.width;

image.onmouseover = function(){
  this.height = 500;
  this.width = 500;
};

image.onmouseout = function(){
  this.height = origh;
  this.width = origw;
};

let imageSrcs = ["img/A.jpg", "img/B.jpg","img/C.jpg"]

let button = document.getElementById("slide");
let imageHolder = document.getElementById("pic");

button.onclick = function(ev){
  index = index + 1;
  if (index > 2){
    index = 0;
  }
  imageHolder.src = imageSrcs[index];

}
