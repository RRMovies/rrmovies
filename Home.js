const ageC = document.getElementById("Age");
const imgbx = document.getElementsByClassName("imgBx")[0];
const img1 = imgbx.getElementsByTagName("img")[0];
imgbx.style.minWidth = "300px";
if(window.innerWidth > 560){
  imgbx.style.display = "block";
}
else{
  imgbx.style.display = "flex";
}
var olDate = new Date(2020, 9)
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var m = month - olDate.getMonth();
var y = year - olDate.getFullYear();
if (m < 0) {
  y--;
  m += 12;
}
else {
  y = y;
  m = m;
}
if (y > 1) {
  ageC.innerHTML = y + " years and " + m + " months "
}
else {
  ageC.innerHTML = "only " + m + " months "
}