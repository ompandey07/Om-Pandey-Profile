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




  document.addEventListener('mousemove', function(e) {
    var customCursor = document.querySelector('.custom-cursor');
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    var body = document.querySelector('body');
    body.style.cursor = 'none'; // Hide default cursor when the page is loaded
});





