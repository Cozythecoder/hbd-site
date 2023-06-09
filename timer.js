 // Set the target date (format: "YYYY-MM-DD")
    var targetDate = "2023-06-10";

    // Calculate the remaining time until the target date
    function calculateTimeRemaining() {
      var now = new Date();
      var target = new Date(targetDate);
      target.setFullYear(now.getFullYear());

      // Check if the target date has already passed for this year
      if (now > target) {
        target.setFullYear(now.getFullYear() + 1);
      }

      var timeRemaining = target - now;

      // Calculate the days, hours, minutes, and seconds remaining
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Display the countdown timer
      document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

      // Refresh the timer every second
      setTimeout(calculateTimeRemaining, 1000);
    }

    // Initial call to calculate time remaining
    calculateTimeRemaining();
