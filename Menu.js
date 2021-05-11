const loader = document.getElementById("loader");
loader.style.position = "fixed";
document.body.style.display = "block";
window.onload = function(){
  setTimeout(loading,1000);
  function loading(){
    loader.style.display = "none";
  }
}
const headerImg = document.getElementsByTagName("header")[0].getElementsByTagName("img")[0];
const toggleBtn = document.getElementsByClassName("toggleBtn")[0];
const nav = document.getElementsByTagName("nav")[0];
const navA = nav.querySelectorAll("a")[4];

if (window.innerWidth < 559) {
  toggleBtn.style.display = "block";
  nav.setAttribute("id", "hide");
  nav.setAttribute("class", "Genarel");
  headerImg.style.float = "left";
  toggleMobile();
}
else {
  window.addEventListener("scroll", function() {
    if (window.scrollY > 1) {
      nav.setAttribute("class", "active");
    }
    else {
      nav.setAttribute("class", "Genarel");
    }
  });
 toggleBtn.style.display = "none";
  nav.style.height = "auto";
}
function toggleMobile(){
var adjnav = nav.getAttribute("id");
toggleBtn.addEventListener("click", toggle);

navA.addEventListener("click", toggle);

function toggle() {
  //if()
  if (toggleBtn.style.color == "gray") {
    toggleBtn.innerHTML = "&#9776";
    toggleBtn.style.color = "white";
    toggleBtn.style.backgroundColor = "#FFC900A1"
    nav.setAttribute("id", "hide");
  } else {
    toggleBtn.style.backgroundColor = "transparent";
    toggleBtn.innerHTML = "&#9587";
    toggleBtn.style.color = "gray";
    nav.setAttribute("id", "show");
  }
}
}