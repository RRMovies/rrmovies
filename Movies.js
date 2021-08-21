const listBtn = document.getElementById("list");
const list = document.getElementById("Listbody");
const numA = list.getElementsByTagName("a");
const resultsWrap = document.getElementsByClassName("resultsWrap")[0];
const srcbtn = document.getElementById("srcbtn");
const searchBox = document.getElementsByClassName("searchBox")[0];
const imgcont = document.querySelectorAll(".imgContainer");

//Auto-list

for (i = 0; i < numA.length; i++) {
  numA[i].addEventListener("click", toggleListM);
}
listBtn.addEventListener("click", toggleListM);

function toggleListM() {
  var toggle = list.getAttribute("class");
  list.classList.toggle("active", true);
  if (toggle == "Listbody active") {
    list.classList.toggle("active", false);
  }
  else {
    list.classList.toggle("active", true);
  }
}

//Putting elements to their pos

fetch("Movies.json").then(Response => Response.json()).then(data => {
  for (let i = 0; i < imgcont.length; i++) {
    // console.log(imgcont.length);
    let ev = eval("data." + imgcont[i].getAttribute("data-name"));
    imgcont[i].setAttribute("id", ev.id);
    imgcont[i].innerHTML = '<img src="' + ev.img + '" alt="' + ev.name + '"/><p>' + ev.name + '</p>';
  }
}).then(function(){
  ImgResize();
  searching();
  });

// fixing img size 
function ImgResize(){
for (var n = 0; n < imgcont.length; n++) {
  var img = imgcont[n].getElementsByTagName("img")[0];
  var w = (img.offsetWidth / 27) * 40;
  img.style.maxHeight = w + "px";
  img.style.minHeight = w + "px";
}
}