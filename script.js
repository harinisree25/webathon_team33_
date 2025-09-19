// Countdown Timer
function updateTimer() {
  const targetDate = new Date("Sep 20, 2025 15:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "🎉 Event Started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update values
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Run immediately and then every second
updateTimer();
setInterval(updateTimer, 1000);

// Modal Logic
const modal = document.getElementById("scheduleModal");
const btn = document.getElementById("scheduleBtn");
const span = document.querySelector(".close");

btn.onclick = () => { modal.style.display = "flex"; };
span.onclick = () => { modal.style.display = "none"; };
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
