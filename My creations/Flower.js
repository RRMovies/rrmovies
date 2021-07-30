/*$type{}*/
const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

ctx.lineWidth = 0.2;
//ctx.globalCompositeOperation = "destination-over";
class Leaf {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxSize = this.size + Math.random() * 10;
    this.devid = Math.random() * 5 + 2;
    this.vs = Math.random() * 0.2 + 0.05;
    this.angle = Math.random() * Math.PI * 2;
    this.va = Math.PI / (Math.random() * 135 + 45);
    this.img = new Image();
    this.img.src = "Leaf.png";
    this.size <= 8.7 ? this.leaf = true : this.leaf = false;
  }
  grow() {
    if (this.size < this.maxSize && this.leaf) {
      this.size += this.vs;

      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.drawImage(this.img, 0 - this.size / 2 * this.devid, 0 - this.size / 2 * this.devid, this.size * this.devid, this.size * this.devid);
      ctx.restore();
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((Math.PI * 2) - this.angle);
      ctx.drawImage(this.img, 0 - this.size / 2 * this.devid, 0 - this.size / 2 * this.devid, this.size * this.devid, this.size * this.devid);
      ctx.restore();
      requestAnimationFrame(this.grow.bind(this));
    }
  }
}

class Flower {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxSize = this.size + Math.random() * 10;
    this.devid = Math.random() * 5 + 2;
    this.vs = Math.random() * 0.2 + 0.05;
    this.angle = 0;
    this.va = Math.PI / (Math.random() * 135 + 45);
    this.img = new Image();
    this.img.src = "Flower.jpg";
    this.size > 8.7 ? this.flower = true : this.flower = false;
  }
  grow() {
    if (this.size < this.maxSize && this.flower) {
      this.size += this.vs;
      this.angle += this.va;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.drawImage(this.img, 0 - this.size / 2 * this.devid, 0 - this.size / 2 * this.devid, this.size * this.devid, this.size * this.devid);
      ctx.restore();
      requestAnimationFrame(this.grow.bind(this));
    } else {
      const leaf = new Leaf(this.x, this.y, this.size);
      leaf.grow();
    }
  }
}

class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 4 + 5;
    this.size = Math.random() * 1 + 2;
    this.angleX = Math.random() * Math.PI * 2;
    this.vs = Math.random() * 0.2 + 0.05;
    this.angleY = Math.random() * Math.PI * 2;
    this.vax = Math.random() * 0.2 - 0.05;
    this.vay = Math.random() * 0.2 - 0.05;
    this.lightness = 10;
  }
  update() {
    this.x += this.speedX + Math.sin(this.angleX);
    this.y += this.speedY + Math.cos(this.angleY);
    this.size += this.vs;
    this.angleX += this.vax;
    this.angleY += this.vay;
    this.lightness += 0.5;
    if (this.size < this.maxSize) {

      ctx.beginPath();
      ctx.fillStyle = "hsl(120,100%," + this.lightness + "%)"
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      /*ctx.fillStyle = "rgba(255,255,255,0.005)"
      ctx.fillRect(0,0,w,h);*/
      requestAnimationFrame(this.update.bind(this));
    } else {
      const flower = new Flower(this.x, this.y, this.size);
      flower.grow();
    }
  }
}

canvas.addEventListener("touchmove", function(e) {
  for (let i = 0; i < 3; i++) {
    let root = new Root(e.touches[0].clientX, e.touches[0].clientY);
    root.update();
  }
});
canvas.addEventListener("touchstart", function(e) {
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 30; i++) {
    let root = new Root(e.touches[0].clientX, e.touches[0].clientY);
    root.update();
  }
});