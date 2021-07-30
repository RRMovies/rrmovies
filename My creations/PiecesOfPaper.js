const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let num = Math.floor(Math.random()*9)+1;
ctx.lineWidth = 2;
//ctx.globalCompositeOperation = "destination-over";
ctx.shadowColor = 'rgba(0,0,0,0.4)';
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 4 + 5;
    this.size = 1;
    this.angleX = Math.random() * Math.PI * 2;
    this.vs = Math.random()+0.2;
    this.angleY = Math.random() * Math.PI * 2;
    this.vax = Math.random() * 0.2 - 0.05;
    this.vay = Math.random() * 0.2 - 0.05;
    this.lightness = 0.1;
    this.angle = 0;
    this.va = Math.PI/45;
  }
  update() {
    this.x += this.speedX + Math.sin(this.angleX);
    this.y += this.speedY + Math.cos(this.angleY);
    this.size += this.vs;
    this.angleX += this.vax;
    this.angleY += this.vay;
    this.angle += this.va;
    
    if (this.size < this.maxSize) {
      ctx.fillStyle = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
      ctx.save();
      ctx.beginPath();
      ctx.translate(this.x,this.y);
      ctx.rotate(this.angle);
      ctx.moveTo(0,0);
      for (var i = 0; i < num; i++) {
        const lx = Math.random() * 50;
        const ly = Math.random() * 50;
        ctx.lineTo(lx + this.size, ly + this.size);
      }
      ctx.closePath();
      ctx.fill();
      //ctx.stroke();
      ctx.restore();
      /*ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.005)"
      ctx.fillRect(0,0,w,h);*/
      window.requestAnimationFrame(this.update.bind(this));
    }
  }
}

canvas.addEventListener("touchmove", function(e) {
  for (let i = 0; i < 1; i++) {
    let root = new Root(e.touches[0].clientX, e.touches[0].clientY);
    root.update();
  }
  num = Math.floor(Math.random()*8)+2;
});
canvas.addEventListener("touchstart", function(e) {
  /*ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.fillRect(0, 0, w, h);*/
  for (let i = 0; i < 5; i++) {
    let root = new Root(e.touches[0].clientX, e.touches[0].clientY);
    root.update();
  }
  num = Math.floor(Math.random()*8)+2;
});