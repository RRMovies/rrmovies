const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let num = Math.floor(Math.random() * 9) + 1;
ctx.lineWidth = 0.5;
//ctx.globalCompositeOperation = "destination-over";
ctx.shadowColor = 'rgba(0,0,0,0.4)';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 10;

class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 4 + 12;
    this.size = 0.1;
    this.angleX = Math.random() * Math.PI * 2;
    this.vs = Math.random() * 0.5 + 0.2;
    this.angleY = Math.random() * Math.PI * 2;
    this.vax = Math.random() * 0.2 - 0.05;
    this.vay = Math.random() * 0.2 - 0.05;
    this.lightness = 10;
    this.angle = 0;
    this.degree = Math.random()*360;
    this.va = (Math.PI / 180) * 4;
  }
  update() {
    this.x += this.speedX + Math.sin(this.angleX);
    this.y += this.speedY + Math.cos(this.angleY);
    this.size += this.vs;
    this.angleX += this.vax;
    this.angleY += this.vay;
    this.angle += this.va;
    this.lightness += 0.8;
    if (this.size < this.maxSize) {
      ctx.save();
      ctx.fillStyle="hsl("+this.degree+",100%,"+this.lightness+"%)";
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillRect(0, 0, this.size, this.size);
      ctx.fill();
      //ctx.stroke();
      ctx.restore();
      window.requestAnimationFrame(this.update.bind(this));
    }
  }
}

canvas.addEventListener("touchmove", function(e) {
  for (let i = 0; i < 5; i++) {
    let root = new Root(e.touches[0].clientX, e.touches[0].clientY);
    root.update();
  }
  num = Math.floor(Math.random() * 8) + 2;
});
canvas.addEventListener("touchstart", function(e) {
  
  for (let i = 0; i < 30; i++) {
    let root = new Root(e.touches[0].clientX, e.touches[0].clientY);

    root.update();
  }
  num = Math.floor(Math.random() * 8) + 2;
});