var cubeSides = {
  0: [4, 2, 5, 3],
  1: [4, 3, 5, 2],
  2: [4, 1, 5, 0],
  3: [4, 0, 5, 1],
  4: [1, 2, 0, 3],
  5: [0, 2, 1, 3]
};

var faces = {
  0: 'front',
  1: 'back',
  2: 'right',
  3: 'left',
  4: 'top',
  5: 'bottom'
};

var App = function() {
  this.cube = document.querySelector('.cube');
  this.borders = document.querySelectorAll('.border');
  this.currentFace = 0;
  this.startTime = null;
  this.selected = null;

  this.borders.forEach(function(border, i) {
    this.handleClick(border, i);
  }.bind(this))
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
