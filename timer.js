function startCountdown(duration) {
  const timerElement = document.getElementById("timer");
  let remainingTime = duration;

  clearInterval(window.timerInterval);
  window.timerInterval = setInterval(() => {
    timerElement.innerHTML = remainingTime;
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(window.timerInterval);
      timerElement.innerHTML = "Time's up!";
      localStorage.removeItem("timerEndTime");
    }
  }, 1000);
}

const storedEndTime = localStorage.getItem("timerEndTime");

if (storedEndTime) {
  const endTime = Number.parseInt(storedEndTime, 10);
  const currentTime = Date.now();
  const remainingTime = Math.floor((endTime - currentTime) / 1000);

  if (remainingTime > 0) {
    startCountdown(remainingTime);
  } else {
    localStorage.removeItem("timerEndTime");
  }
} else {
  document.getElementById("timer").innerHTML = "⏱️";
}
