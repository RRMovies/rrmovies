var imgBox = document.getElementsByClassName("imgBx");
for (var n = 0; n < imgBox.length; n++) {
  var img = imgBox[n].getElementsByTagName("img")[0];
  var w = (img.offsetWidth / 27) * 30;
  img.style.maxHeight = w + "px";
  img.style.minHeight = w + "px";
}

const srccod = document.getElementsByClassName("Srccod");
const lvdm = document.getElementsByClassName("Lvdm");

for (var f = 0; f < srccod.length; f++) {
esp(srccod[f]);
esp(lvdm[f]);
}

function esp(e) {
  var fps = e.getAttribute("href").length;
  if (fps < 1) {
    e.classList.add("unavailable");
  }
  else {
    e.classList.remove("unavailable");
  }
}