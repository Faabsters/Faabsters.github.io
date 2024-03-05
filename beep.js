var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    windowX = win.innerWidth || docElem.clientWidth || body.clientWidth,
    windowY = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

function setup() {
  createCanvas(windowX, windowY);
}

function draw() {
  background(220);
if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
