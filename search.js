const resultsWrap = document.getElementsByClassName("resultsWrap")[0];
const srcbtn = document.getElementById("srcbtn");
const searchBox = document.getElementsByClassName("searchBox")[0]

var arr = new Array;
var arr2 = new Array;
for (var n = 0; n < imgcont.length; n++) {
  const p = imgcont[n].querySelector("p");
  
  var ntb = p.textContent.split(" ").join("_");
  
  imgcont[n].setAttribute("id", ntb);
  arr.push(imgcont[n].getAttribute("id"));
  arr2.push(imgcont[n].getAttribute("id").split("_").join(" "));
}

let search = document.getElementById("search");

search.addEventListener("keyup", function() {
  let result = [];
  let input = search.value;
  if (input.length) {
    result = arr2.filter(function(item) {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResult(result);
});

function renderResult(result) {
  if(result.length){
    searchBox.classList.add("show");
  }
  else{
    searchBox.classList.remove("show");
  }
  let contents = result.map(function(item) {
    return `<li><a href="#${item.split(" ").join("_")}">${item}</a></li>`;
  }).join("");
  resultsWrap.innerHTML = `<ul>${contents}</ul>`
}

srcbtn.addEventListener("click",function(){
  try{
  if(!resultsWrap.getElementsByTagName("ul")[0].children.length){
    google();
    console.log("success");
  }
  }
  catch(error){
    alert("please search something");
  }
});

function google(){
  let url = "https://www.google.com/search?q="+encodeURIComponent(search.value);
  window.open(url,"_self");
}