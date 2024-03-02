setInterval(function () {
    var now = new Date();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zero if single digit
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("current-time").innerHTML =
      year + " - " + hours + ":" + minutes + ":" + seconds;
  }, 1000); // Update every second