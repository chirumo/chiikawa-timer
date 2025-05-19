<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ストップウォッチ</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      padding: 50px;
    }
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    button {
      font-size: 20px;
      margin: 10px;
      padding: 10px 20px;
    }
  </style>
</head>
<body>
  <h1 id="display">00:00.0</h1>
  <button onclick="start()">スタート</button>
  <button onclick="stop()">ストップ</button>
  <button onclick="reset()">リセット</button>

  <script>
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;

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

    function start() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").textContent = timeToString(elapsedTime);
      }, 100);
    }

    function stop() {
      clearInterval(timerInterval);
    }

    function reset() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      document.getElementById("display").textContent = "00:00.0";
    }
  </script>
</body>
</html>


@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

