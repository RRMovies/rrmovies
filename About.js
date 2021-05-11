const AgeA = document.getElementById("AgeA");

var birth = new Date(2005,5,20,5,30,0);
var now = new Date();
var gap = now.valueOf() - birth.valueOf();
var adj1 = (31/gap);
var adj2 = adj1*gap;
var year = Math.floor(gap / 31556952000);
var day = Math.floor(((gap % 31556952000) / 86400000)+adj2);
if(day>=365){
  year++;
  day -= 365;
}
else{
  year = year;
  day = day;
}
AgeA.innerHTML = year + " year and " + day + " days"