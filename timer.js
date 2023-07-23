
// Set the date we're counting down to
var countDownDate = new Date( "Jul 23, 2023 11:08:00").getTime();

// Update the count down every 1 second minute
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours + " hours and " + minutes + " minutes";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Free to Go :3";
  }

}, 1000);
