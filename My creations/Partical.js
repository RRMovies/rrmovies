const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
const buffer = document.getElementById("title");
bufferinfo = buffer.getBoundingClientRect();

let title = {
  x: bufferinfo.left,
  y: bufferinfo.top,
  width: bufferinfo.width,
  height: bufferinfo.height
}
let gameframe = 0;
let mouce = {
  x: 0,
  y: 0,
  radius: (w*h)/2000,
  move: false
}
console.log(mouce.radius);
canvas.addEventListener("touchstart",function(e){
  mouce.move = true; 
  mouce.x = e.touches[0].clientX;
  mouce.y = e.touches[0].clientY;
});

canvas.addEventListener("touchmove",function(e){
  mouce.move = true;
  mouce.x = e.touches[0].clientX;
  mouce.y = e.touches[0].clientY;
});
canvas.addEventListener("touchend",function(){
  mouce.move = false;
})

const img = new Image();
img.src = "Atom.png";
let particalArry = [];
class partical {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.directionX = Math.random() < 0.5 ? 1 : -1;
    this.directionY = Math.random() > 0.5 ? 1 : -1;
    this.radius = Math.random() * 5 + 2;
    this.color = "rgba(" + (this.radius * 28) + "," + (this.radius * 18) + "," + (this.radius * 30) + ",1)";
    this.speedX = (Math.random() * 2 + 2) * this.directionX * (w / 360);
    this.speedY = (Math.random() * 2 + 2) * this.directionY * (h / 360);
  }
  draw() {
    ctx.save();
    ctx.drawImage(img, this.x - (this.radius / 2 * 3), this.y - (this.radius / 2 * 3), this.radius * 3, this.radius * 3);
    ctx.restore();
  }
  update() {
  
    if (this.x >= w) {
      this.speedX = -((Math.random() * 2 + 1)) * (w / 360);
    }
    if (this.x <= 0) {
      this.speedX = ((Math.random() * 2 + 1)) * (w / 360);
    }
    if (this.y >= h) {
      this.speedY = -((Math.random() * 2 + 1)) * (h / 360);
    }
    if (this.y <= 0) {
      this.speedY = ((Math.random() * 2 + 1)) * (h / 360);
    }
    if ((this.y >= title.y) &&
      (this.y <= title.y + 10) &&
      (this.x >= title.x) && (this.x <= title.x + title.width)) {
      this.speedY = -((Math.random() * 2 + 1)) * (h / 360);
    }
    if ((this.y >= title.y + title.height) &&
      (this.y <= title.y + title.height + 10) &&
      (this.x >= title.x) && (this.x <= title.x + title.width)) {
      this.speedY = ((Math.random() * 2 + 1)) * (h / 360);
    }
    if ((title.x + title.width >= this.x) && (title.y <= this.y) && (title.y + title.height >= this.y) && (title.x + title.width - 10 <= this.x)) {
      this.speedX = ((Math.random() * 2 + 1)) * (w / 360);
    }
    if ((title.x <= this.x) && (title.y <= this.y) && (title.y + title.height >= this.y) && (title.x + 10 >= this.x)) {
      this.speedX = -((Math.random() * 2 + 1)) * (w / 360);
    }
    const dx = this.x - mouce.x;
    const dy = this.y - mouce.y;
    let ds = Math.sqrt(dx**2+dy**2);
    if(mouce.move){
      if(ds <= mouce.radius+this.radius){
        if (this.x >= w){
     this.speedX = -((Math.random() * 2 + 1)) * (w / 360)
        }else if(this.y >= h) {
       this.speedY = -((Math.random() * 2 + 1)) * (h / 360);
        }else if (this.x <= 0) {
          this.speedX = ((Math.random() * 2 + 1)) * (w / 360);
        }else if (this.y <= 0) {
          this.speedY = ((Math.random() * 2 + 1)) * (h / 360);
        }else if(this.x >= w/2){
         this.x -= gameframe*2;
        }else if(this.y >= h/2){
         this.y -= gameframe*2;
        }else{
        this.x += gameframe*2;
        this.y += gameframe*2;
        }
      }
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }
}


for (let i = 0; i < 100; i++) {
  particalArry.push(new partical());
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  cfx();
  if(mouce.move){
    gameframe++;
  }else{
    gameframe = 0;
  }
  for (let a = 0; a < particalArry.length; a++) {
    particalArry[a].update();
    particalArry[a].draw();
  }
  window.requestAnimationFrame(animate);
}
animate();

function cfx() {
  for (let n = 0; n < particalArry.length; n++) {
    for (let b = n; b < particalArry.length; b++) {

      let distance = (particalArry[n].x - particalArry[b].x) ** 2 + (particalArry[n].y - particalArry[b].y) ** 2;
      if (distance < (w / 8 * h / 8)) {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.lineWidth = Math.random() + 1;
        ctx.moveTo(particalArry[n].x, particalArry[n].y);
        ctx.lineTo(particalArry[b].x, particalArry[b].y);
        ctx.stroke();
      }
    }
  }
}