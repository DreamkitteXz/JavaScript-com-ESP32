var led = new Pin(22);
var toggle=1;

setInterval(function() {
  toggle=!toggle;
  digitalWrite(led, toggle);
}, 500);