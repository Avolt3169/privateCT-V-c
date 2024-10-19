const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.distanceToTarget = Math.hypot(this.targetX - this.x, this.targetY - this.y);
    this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
    this.speed = 5;
    this.acceleration = 1.05;
    this.distanceTraveled = 0;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.trail = [];
  }

  update() {
    this.speed *= this.acceleration;
    let velocityX = Math.cos(this.angle) * this.speed;
    let velocityY = Math.sin(this.angle) * this.speed;

    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > 5) this.trail.shift();

    this.x += velocityX;
    this.y += velocityY;
    this.distanceTraveled = Math.hypot(this.targetX - this.x, this.targetY - this.y);

    if (this.distanceTraveled < this.distanceToTarget * 0.1) {
      this.explode();
    }
  }

  explode() {
    fireworks = fireworks.filter(firework => firework !== this);
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(this.x, this.y, this.color));
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.trail[0]?.x || this.x, this.trail[0]?.y || this.y);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 3 + 1;
    this.friction = 0.99;
    this.gravity = 1;
    this.lifespan = 100;
    this.opacity = 1;
  }

  update() {
    this.speed *= this.friction;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    this.opacity -= 0.01;
    this.lifespan--;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

let fireworks = [];
let particles = [];

function animate() {
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';

  fireworks.forEach(firework => {
    firework.update();
    firework.draw();
  });

  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.lifespan <= 0 || particle.opacity <= 0) particles.splice(index, 1);
  });

  requestAnimationFrame(animate);
}

// Función para lanzar fuegos artificiales en posiciones aleatorias
function launchRandomFirework() {
  let x = canvas.width / 2;
  let y = canvas.height;
  let targetX = Math.random() * canvas.width;
  let targetY = Math.random() * canvas.height * 0.5;  // Limita la altura de los fuegos artificiales
  fireworks.push(new Firework(x, y, targetX, targetY));
}

// Lanza un nuevo fuego artificial cada 500 ms
setInterval(launchRandomFirework, 500);

animate();
