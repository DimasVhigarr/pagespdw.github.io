
// Fungsi untuk mendapatkan waktu terkini
function getCurrentTime() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good morning, Dimas!";
    } else if (hour < 18) {
      greeting = "Good afternoon, Dimas!";
    } else {
      greeting = "Good evening, Dimas!";
    }
  
    const greetingText = document.getElementById("greeting-text");
    greetingText.textContent = greeting;
  
    const currentDate = document.getElementById("current-date");
    currentDate.textContent = now.toDateString();
  
    const currentTime = document.getElementById("current-time");
    currentTime.textContent = now.toLocaleTimeString();
  }
  
  // Memanggil fungsi getCurrentTime setiap detik
  setInterval(getCurrentTime, 1000);
  
  // Memanggil getCurrentTime saat halaman dimuat
  getCurrentTime();
  