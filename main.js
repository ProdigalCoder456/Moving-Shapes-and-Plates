const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomRGB() {
    return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
  }

  class Plate {
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }
    const testPlate = new Plate(55, 150, 7, 7, "Orange", 13);    
      testPlate.x;
      testPlate.size;
      testPlate.color;
      testPlate.draw();
      
  }
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }

  const Plates = [];

while (Plates.length < 25) {
  const size = random(10, 20);
  const ball = new Plate(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  Plates.push(Plate);
}

function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      Plate.draw();
      Plate.update();
    }
  
    requestAnimationFrame(loop);
  }

  loop();

  collisionDetect() {
    for (const Plate of Plates) {
      if (this !== Plate) {
        const dx = this.x - Plate.x;
        const dy = this.y - Plate.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + Plate.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  } 
  
  function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of Plates) {
      Plate.draw();
      Plate.update();
      Plate.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  } 