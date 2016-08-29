var App = function() {
  this.cubeWrapper = document.querySelector('.cube-wrapper');
  this.cube = document.querySelector('.cube');
  this.rotationBtns = document.querySelectorAll('.rotator');

  this.rotationDelay = 300;
  this.zoomInDelay = 800

  this.xRot = 0;
  this.yRot = 0;
  this.rotation = '';

  this.numClicked = 0;

  this.init();
};

App.prototype.constructor = App;

App.prototype.init = function() {
  this.rotationBtns.forEach(function(btn, i) {
    this.handleClick(btn, i);
  }.bind(this));

  this.zoomIn();
};

App.prototype.handleClick = function(btn, i) {
  btn.addEventListener('click', function(e) {
    this.numClicked++;
    this.turnToFace(i);
  }.bind(this));
};

App.prototype.turnToFace = function(i) {
  this.zoomOut();

  setTimeout(function() {
    this.numClicked--;
    this.rotateCube(i);
  }.bind(this), this.rotationDelay);

  setTimeout(function() {
    if(this.numClicked === 0) {
      this.zoomIn();
    }
  }.bind(this), this.zoomInDelay);
}

App.prototype.rotateCube = function(i) {
  // up
  if(i === 0) {
    this.xRot += 90;
    this.rotation = 'rotateX(' + this.xRot + 'deg)';
    this.yRot = 0;
  }
  // right
  else if(i === 1) {
    this.yRot += 90;
    this.rotation = 'rotateY(' + this.yRot + 'deg)';
    this.xRot = 0;
  }
  // down
  else if(i === 2) {
    this.xRot -= 90;
    this.rotation = 'rotateX(' + this.xRot + 'deg)';
    this.yRot = 0;
  }
  // left
  else if(i === 3) {
    this.yRot -= 90;
    this.rotation = 'rotateY(' + this.yRot + 'deg)';
    this.xRot = 0;
  }

  if(this.normalize(this.xRot) === 180) {
    this.rotation = 'rotateY(180deg)';
    this.yRot = 180;
    this.xRot = 0;
  }

  this.cube.style.transform = this.rotation;
};

App.prototype.zoomIn = function() {
  this.cubeWrapper.style.transform = 'translateZ(270px)';
};

App.prototype.zoomOut = function() {
  this.cubeWrapper.style.transform = '';
};

App.prototype.normalize = function(value) {
  var normalizedValue = value;

  while(normalizedValue < 0) {
    normalizedValue += 360;
  }
  normalizedValue %= 360;

  return normalizedValue;
}

new App();
