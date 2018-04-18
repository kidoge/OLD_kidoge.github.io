var canvas = null;
var ctx = null;

function setup() {
  canvas = $('canvas')[0];
  if (canvas != null) {
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 120px courier';
    ctx.fillStyle = 'gray';
    ctx.fillText('Kidon Son', 10, 380);
    ctx.fillStyle = 'white';
    ctx.fillText('Kidon Son', 15, 380);
  } else {
    alert('Something went wrong.');
  }
}

$(setup);
