document.getElementById("startTimer").addEventListener("click", () => {
  const seconds =
    Number.parseInt(document.getElementById("timeInput").value) || 0;

  if (seconds <= 0) {
    alert("Por favor, insira um valor válido em segundos.");
    return;
  }

  const endTime = Date.now() + seconds * 1000;
  localStorage.setItem("timerEndTime", endTime);

  chrome.windows.create({
    url: "timer.html",
    type: "popup",
    width: 250,
    height: 150,
  });
});
