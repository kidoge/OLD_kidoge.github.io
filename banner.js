"use strict";

var canvas = null;
var ctx = null;

var lastTime = null;

var x = null;
var y = null;
var type = null; // 0 = black, 1 = white

var VX = 0.4;
var VY = 0.8;

function resetLine() {
  x = Math.random() * (canvas.width + canvas.height / 2) - canvas.height / 2;
  y = 0;
  type = Math.floor(Math.random() * 2);
}
function init() {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 2;
  resetLine();


  timeElapsed();
  requestAnimationFrame(refresh);
}

function timeElapsed() {
  var now = Date.now();
  var timeDelta = now - lastTime;
  lastTime = now;
  return timeDelta;
}
function refresh() {
  var timeDelta = timeElapsed();
  if (y >= canvas.height) {
    resetLine();
  }

  var newY = y + timeDelta * VY;
  if (type === 0) {
    var newX = x + timeDelta * VX;
    ctx.strokeStyle = "black";
  } else {
    var newX = x - timeDelta * VX;
    ctx.strokeStyle = "white";
  }
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(newX, newY);
  ctx.closePath();
  ctx.stroke();
  x = newX;
  y = newY;
  requestAnimationFrame(refresh);
}

function setup() {
  canvas = $('canvas')[0];
  if (canvas != null) {
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
    ctx = canvas.getContext('2d');
    init();
  } else {
    alert('Something went wrong.');
  }
}

$(setup);
