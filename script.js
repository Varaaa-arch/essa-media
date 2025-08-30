const toggleBtn = document.getElementById("darkToggle");
const body = document.body;
const timeElement = document.getElementById("user-time");

// Default = dark mode aktif
body.classList.add("dark-mode");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Update waktu real-time
function updateTime() {
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}
setInterval(updateTime, 1000);
updateTime();
