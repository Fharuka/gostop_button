var goButton = document.querySelector('.button#go');
goButton.addEventListener('click', function() {
  put();
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to(goButton, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to(goButton, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to(goButton, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

var stopButton = document.querySelector('.button#stop');
stopButton.addEventListener('click', function() {
  put();
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to(stopButton, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to(stopButton, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to(stopButton, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

// http request

function post() {
  var xhr = new XMLHttpRequest();

  var url = "http://192.168.3.8:8001";
  var data = "test";

  xhr.open("GET", url);
  xhr.send(null);
}

function put() {
  var xhr = new XMLHttpRequest();

  var url = "http://192.168.3.8:8001";

  xhr.open("DELETE", url);
  xhr.send(null);
}
