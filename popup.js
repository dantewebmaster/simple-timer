document.getElementById("startTimer").addEventListener("click", () => {
  const seconds =
    Number.parseInt(document.getElementById("timeInput").value) || 0;

  // Verifica se o valor é válido
  if (seconds <= 0) {
    alert("Por favor, insira um valor válido em segundos.");
    return;
  }

  // Salva o tempo inicial e a hora de término no localStorage
  const endTime = Date.now() + seconds * 1000;
  localStorage.setItem("timerEndTime", endTime);

  // Abre uma nova janela popup com o timer
  chrome.windows.create({
    url: "timer.html",
    type: "popup",
    width: 250,
    height: 150,
  });
});
