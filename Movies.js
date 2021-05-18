const listBtn = document.getElementById("list");
const list = document.getElementById("Listbody");
const numA = list.getElementsByTagName("a");
for(i = 0; i < numA.length;i++){
  numA[i].addEventListener("click",toggleListM);
}
listBtn.addEventListener("click",toggleListM);
function toggleListM(){
  var toggle = list.getAttribute("class"); 
  list.classList.toggle("active",true);
  if(toggle=="Listbody active"){
  list.classList.toggle("active",false);
  }
  else{
  list.classList.toggle("active",true);
  }
}
var imgcont = document.getElementsByClassName("imgContainer");
for(var n = 0; n < imgcont.length; n++){
var img = imgcont[n].getElementsByTagName("img")[0];
var w = (img.offsetWidth/27)*40;
img.style.maxHeight = w + "px";
img.style.minHeight = w + "px";
}
