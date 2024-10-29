let pomodoroTimer;
        let timeLeft = 1500;
        let isRunning = false; // Track timer status

        function startPomodoro() {
            if (!isRunning) {
                isRunning = true; // Set timer as running
                pomodoroTimer = setInterval(() => {
                    if (timeLeft <= 0) {
                        clearInterval(pomodoroTimer);
                        alert("Pomodoro session complete!");
                        timeLeft = 1500;
                        isRunning = false; // Reset running flag
                        document.getElementById("pomodoroTimer").textContent = "25:00"; // Reset display
                    } else {
                        timeLeft--;
                        document.getElementById("pomodoroTimer").textContent = formatTime(timeLeft);
                    }
                }, 1000);
            }
        }

        function pausePomodoro() {
            clearInterval(pomodoroTimer);
            isRunning = false; // Reset running flag
        }

        function resetPomodoro() {
            clearInterval(pomodoroTimer);
            timeLeft = 1500;
            isRunning = false; // Reset running flag
            document.getElementById("pomodoroTimer").textContent = "25:00"; // Reset display instantly
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        }