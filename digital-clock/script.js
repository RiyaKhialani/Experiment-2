function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

function changeBackground() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

setInterval(updateClock, 1000);
setInterval(changeBackground, 5000);

updateClock();
changeBackground();
