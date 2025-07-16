const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

for (let i = 0; i < 100; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 4 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: `hsla(${Math.random() * 360}, 100%, 70%, 0.7)`
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let b of bubbles) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = b.color;
    ctx.fill();

    b.x += b.dx;
    b.y += b.dy;

    if (b.x + b.radius > canvas.width || b.x - b.radius < 0) b.dx *= -1;
    if (b.y + b.radius > canvas.height || b.y - b.radius < 0) b.dy *= -1;
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
