let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// 表示形式を「分:秒.ミリ秒」にする関数
function timeToString(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 100);
  return (
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + "." +
    milliseconds
  );
}

// スタートボタン
function start() {
  // すでに動いているときは何もしない
  if (timerInterval) return;

  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = timeToString(elapsedTime);
  }, 100);
}

// ストップボタン
function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// リセットボタン
function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00.0";
}
