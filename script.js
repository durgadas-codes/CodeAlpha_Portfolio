// Typing effect
const text = "Frontend Developer | Problem Solver | Learner";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Contact form
function sendMessage(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
}

// Project click glow
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

// Particle background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5),
    size: 2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "#00f7ff";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();

// Mouse glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Floating random elements
const bg = document.querySelector(".background");

for (let i = 0; i < 10; i++) {
  let el = document.createElement("div");
  el.className = "floating";
  el.innerText = Math.random() > 0.5 ? "🤖" : "🎈";
  el.style.left = Math.random() * 100 + "%";
  el.style.animationDuration = (8 + Math.random() * 5) + "s";
  bg.appendChild(el);
}