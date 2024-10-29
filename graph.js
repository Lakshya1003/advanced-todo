const ctx = document.getElementById('progressChart').getContext('2d');

        // Initial data for a 7-day week
        const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const progressData = [0, 0, 0, 0, 0, 0, 0]; // Initial progress values

        // Chart configuration
        const progressChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Hours of Progress',
                    data: progressData,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 24, // Max hours in a day
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    }
                },
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        });

        // Function to add progress data
        function addProgress() {
            const input = document.getElementById("progressInput");
            const progressHours = parseInt(input.value);

            if (!isNaN(progressHours) && progressHours >= 0 && progressHours <= 24) {
                const currentDay = new Date().getDay(); // Get today's index (0-6)

                progressData[currentDay] = progressHours; // Update the progress for the current day
                progressChart.update(); // Update the chart display
                input.value = ''; // Clear the input field
            } else {
                alert("Please enter a valid number between 0 and 24.");
            }
        }