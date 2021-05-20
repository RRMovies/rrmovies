  var a;
  var b;
  var t = 250;
  var s = 2;
  var u = 2;
  var frps = 10;
  var ballh = 10;
  var ballw = 10;
  var pdly = 250;
  const pdlh = 40;
  var score1 = 0;
  var score2 = 0;
  function btnl(){
    pdly = pdly+((pdlh/4)*3);
  }
  function btnr(){
    pdly = pdly-((pdlh/4)*3);
  }
  window.onload = aa;
  function aa(){
  var c = document.getElementById('Game');
  var ca = c.getContext('2d');
 var stop = setInterval(ty,50);
  document.getElementById('leftbtn').onclick = function() {btnl()};
  document.getElementById('rgtbtn').onclick = function() {btnr()};

  function ballrst(){
    u = -u;
    t = c.height/2;
    frps = c.width/2;
  }
  function ty(){
  document.getElementById('reset').onclick = function() {
    clearInterval(stop);
    if(ttlscr>499){
    alert("Hurry!!!You win!");
    alert("Your score : "+ttlscr);
    }
   else if(ttlscr<0){
     alert("Oh no! You have lost.");
     alert("Your score: " + ttlscr);
   }
    else{
      alert("Ahh! You can't win. Try better next time.");
      alert("Your score:"+ttlscr);
    }
  }
     t = t+s;
     if(t>(c.height-(ballw))){
       s = -(s+0);
     }
     if(t<0){
      s = -(s+0)
     }
else{
  s=s;
}
frps = frps+u;
if (frps > (c.width-(ballw))){
    if (t > (c.height-pdly-5) && t < pdlh + (c.height-pdly+5)) {
      u = -(u+0.1);
      score2 += 5;
    }
    else {
      ballrst();
      score2 -= 30;
    }
}
if (frps < 0) {
   if (t > pdly-5 && t<(pdlh+pdly+5)){
     u = -(u+0.1);
     score1 += 5;
   }
   else {
     ballrst();
     score1 -= 30;
   }
}
else {
 u = u
}
var ttlscr = score1 + score2 ;
  main(0, 0, c.width, c.height, '#000030');
  main(c.width/2,0,1,c.height,'#ffffff');
  ca.fillStyle = '#afdafd';
  ca.beginPath();
  ca.arc(frps,t,7,0,Math.PI*2,true);
  ca.fill();
  main(c.width-10,(c.height-pdly),10,c.height/7,'#FFC900');
  main(0,pdly,10,c.height/7,'#1CFF00');
  ca.fillStyle = '#1CFF00';
  ca.fillText("Board 1 :",(c.width/4)-45,c.height/2);
  ca.fillText(score1,c.width/4,c.height/2);
  ca.fillStyle = '#eeeeff';
  ca.fillText(ttlscr,c.width/2 + 10,100);
  ca.fillText("Total score   : ",c.width/2-53,100);
  ca.fillStyle = '#FFC900';
  ca.fillText("Board 2 :",(c.width-c.width/4)-25,c.height/2);
  ca.fillText(score2,(c.width-c.width/4)+20,c.height/2);
}
    function main(x,y,width,height,color){
      ca.fillStyle = color;
      ca.fillRect(x,y,width,height);
    }
}
