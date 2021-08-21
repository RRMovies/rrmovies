const date = new Date();
const COMMENTLoader = document.getElementById("COMMENTLoader");
const checkbox = document.getElementById("checkbox");
let EmailArry = [];

let DelComment = false;
//var y,j,m,l,e,a,t,d,k,o,u;
let cmntholder = document.getElementById("comments");
const commentFrm = document.getElementById("commentFrm");
const commentFrmName = document.getElementById("commentFrmName");
const commentFrmEmail = document.getElementById("commentFrmEmail");
const commentFrmComment = document.getElementById("commentFrmComment");
const submit = document.getElementById("submitBtn");

let n = 1;

function commentsRender(e1) {
  if (!e1.pablic) {
    e1.email = "Email was not provided by this user";
  }
  cmntholder.innerHTML += '<div class="commentVal"><div class="img"><img src="UntitledComment.png" alt="' + e1.name + '" /></div><div class="text"><div class="title"><h2 class="cmntName">' + e1.name + '</h2><h5>Posted</h5></div><h4 class="cmntEmail">' + e1.email + '</h4><p>' + e1.comment + '</p></div></div>';
}

fetch("Comment.json").then(Response => Response.json()).then(data => {
  for (let i = 0; i < n; i++) {
    n = Object.keys(data.movies).length;
    let ev = eval("data.movies.comment" + (i + 1));
    commentsRender(ev);
    EmailArry.push(ev.email);
    EmailArry.filter(function(e){

      if(localStorage.getItem("R&RMovies_Movies_Comment_Email") == e && localStorage.getItem("R&RMovies_Movies_Comment_Email") != "Email was not provided by this user"){
        localStorage.removeItem("R&RMovies_Movies_Comment_Email");
        localStorage.removeItem("R&RMovies_Movies_Comment");
        location.reload();
      // console.log(localStorage.getItem("R&RMovies_Movies_Comment_Email") == e);
      }
    });
  }
});
 
if(localStorage.getItem("R&RMovies_Movies_Comment")){
cmntholder.innerHTML += localStorage.getItem("R&RMovies_Movies_Comment");
}