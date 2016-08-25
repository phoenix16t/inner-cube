// var cubeSides = {
//   0: [4, 2, 5, 3],
//   1: [4, 3, 5, 2],
//   2: [4, 1, 5, 0],
//   3: [4, 0, 5, 1],
//   4: [1, 2, 0, 3],
//   5: [0, 2, 1, 3]
// };

// var faces = {
//   0: 'front',
//   1: 'back',
//   2: 'right',
//   3: 'left',
//   4: 'top',
//   5: 'bottom'
// };

// var front = {

// };

var rotations = {
  front: '',
  back: '',
  right: 'rotateX(270deg)',
  left: '',
  top: '',
  bottom: ''
};

var sides = {
  front: ['top', 'right', 'bottom', 'left'],
  back: ['top', 'left', 'bottom', 'right'],
  right: ['top', 'back', 'bottom', 'front'],
  left: ['top', 'front', 'bottom', 'back'],
  top: ['back', 'right', 'front', 'left'],
  bottom: ['front', 'right', 'back', 'left']
};

var orientation = {
  front: 'z',
  back: 'z',
  right: 'x',
  left: 'x',
  top: 'y',
  bottom: 'y'
}

// var orientation = ['x', 'y', 'z'];
// var orientation = 'x';

var App = function() {
  this.cube = document.querySelector('.cube');
  this.borders = document.querySelectorAll('.border');
  this.currentFace = 'front';
  // this.currentFace = 0;
  // this.startTime = null;
  // this.selected = null;

  // camera
  this.xRot = 0;
  this.yRot = 0;

  this.borders.forEach(function(border, i) {
    this.handleClick(border, i);
  }.bind(this));

  // this.turnToFace(0);
  // this.turnToFace(2);

  this.cube.style.transform = rotations[this.currentFace];
};

App.prototype.constructor = App;

App.prototype.handleClick = function(border, i) {
  border.addEventListener('click', function(e) {
    // this.startTime = Math.floor(Date.now() / 1000);
// debugger
    // this.selected = i;
    this.turnToFace(i);

    // window.requestAnimationFrame(step);

    // window.requestAnimationFrame(this.turnToFace.bind(this));


    // this.timer();
    // console.log("time", Date.now())
    // window.requestAnimationFrame(this.timer.bind(this));
  }.bind(this));
};

App.prototype.turnToFace = function(i) {
  var transform;


  // (-?\d*)deg

//   var re = /\w+\s/g;
// var str = "fee fi fo fum";
// var myArray = str.match(re);

// debugger
  var regex = /(\d*)deg/g;
  var offset = rotations[this.currentFace].match(regex) || 0;


  // while(this.xRot < 0) {
  //   this.xRot += 360;
  // }
  // this.xRot %= 360;
  // while(this.yRot < 0) {
  //   this.yRot += 360;
  // }
  // this.yRot %= 360;


  offset = parseInt(offset[0]) || 0;

  var orient = orientation[this.currentFace]
console.log("orient", orient, offset)
// debugger


  if(orient === 'x' && this.yRot === 90 && rotations[this.currentFace]) {
    // debugger
    offset = (180 + offset) % 360;
  }
  else if(orient === 'z') {}


  offset = (offset / 90) % 4 || 0;
  console.log("offset", offset)
// debugger

  var direction = (i - offset + 4) % 4;
  // direction = i;

  this.currentFace = sides[this.currentFace][direction];


  console.log("current", this.currentFace, rotations[this.currentFace], orient)
  // debugger

  if(direction === 0) {
    this.xRot += 90;
    transform = 'rotateX(' + this.xRot + 'deg)';
    this.yRot = 0;
  }
  else if(direction === 2) {
    this.xRot -= 90;
    transform = 'rotateX(' + this.xRot + 'deg)';
    this.yRot = 0;
  }
  else if(direction === 1) {
    this.yRot += 90;
    transform = 'rotateY(' + this.yRot + 'deg)';
    this.xRot = 0;
  }
  else if(direction === 3) {
    this.yRot -= 90;
    transform = 'rotateY(' + this.yRot + 'deg)';
    this.xRot = 0;
  }

  if(Math.abs(this.xRot) === 180) {
    transform = 'rotateY(180deg)';
    this.xRot = 0;
    this.yRot = 180;
  }

  transform += ' ' + rotations[this.currentFace];
  this.cube.style.transform = transform;
  // this.cube.style.transform = transform;

  console.log("transform", transform)
  console.log("yrot", this.yRot)

  // setTimeout(function() {
  //   transform += ' ' + rotations[this.currentFace];
  //   this.cube.style.transform = transform;
  // }.bind(this), 300);


  // console.log("i", i, transform, rotations[this.currentFace])
  // console.log("x", this.xRot)
  // console.log("y", this.yRot)
/*

  // debugger
  var oldFace = faces[this.currentFace];
  // this.currentFace = cubeSides[this.currentFace][i];
  this.currentFace = cubeSides[this.currentFace][i];

  // var oldFaceName = faces[oldFace];
  var newFace = faces[this.currentFace];

  if(oldFace === 'front' && newFace === 'left') {
    newFace = 'left-from-back';
  }

  this.cube.classList.remove('show-' + oldFace);
  this.cube.classList.add('show-' + newFace);


  setTimeout(function() {
    if(newFace === 'left-from-back') {
      this.cube.classList.remove('show-' + newFace);
      this.cube.classList.add('show-left');
    }
  }.bind(this), 1000);

  // console.log("timestamp", Math.floor(timestamp/1000))
*/


  // var seconds = Math.floor(Date.now() / 1000);

  // window.requestAnimationFrame(step);

};

// App.prototype.timer = function(timestamp) {

//   var currentTime = Math.floor(timestamp/1000);

//   var currentTime = timestamp;

//   // var currentTime = Math.floor(Date.now() / 1000);
//   var currentTime = Date.now();

//   // console.log("currentTime", timestamp)

//   if(!this.startTime) {
//     this.startTime = currentTime;
//     // window.requestAnimationFrame(this.timer.bind(this));
//     this.timer();
//   }
//   else if(currentTime - this.startTime < 1000) {
//     // console.log("diff", currentTime - this.startTime)
//     // console.log("ratio", (currentTime - this.startTime) / 1000)

//     var ratio = (currentTime - this.startTime) / 1000;
//     var angle = 180 * ratio;

//     this.cube.style.transform = 'rotateX(' + 90 + 'deg)';

//     console.log("angle", 180 * ratio, this.cube.style.transform)


//     // window.requestAnimationFrame(this.timer.bind(this));
//     // this.timer();
//   }
//   else {
//     this.startTime = null;
//     console.log("done")
//   }
// };

// var step = function(timestamp) {
//   console.log("timestamp", timestamp)
// }

// App.prototype.setBorderLinks = function() {
//   cubeSides[this.currentFace].forEach(function(side) {
//     console.log("side", side)

//   })
// }

new App();
