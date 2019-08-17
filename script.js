var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var marioWidth = 32;
var marioHeight = 32;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMoveSpeed = 10;
var gravity = 2;
var jumpForce = 20;
var maxJumpforce = 20;
var jumpForceDecay = 1;
var goombaMoveSpeed = 10;
var marioTexture = new Image();


marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var goombaTexture = new Image();
goombaTexture.src = 
'https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/profile-mk-goomba.7bf2a8f2.aead314d58b63e27.png';

var goombaPositionX = 10;
var goombaHeight = 100;
var goombaPositionY = canvas.height - goombaHeight;
var goombaWidth = 100;



function update() {

	// BEGIN UPDATE LOGIC
	//-------------------------------------
	if (isKeyDown(LEFT_KEY)) {
		marioPositionX -= marioMoveSpeed;
    goombaPositionX += goombaMoveSpeed;
    if (marioPositionX < 0){
      marioPositionX = canvas.width;
    }


  }

  if (isKeyDown(RIGHT_KEY)) {
		marioPositionX += marioMoveSpeed;

    if (marioPositionX > canvas.width ){
      marioPositionX = 0;
    }
  }

  if (isKeyDown(UP_KEY)) {
		marioPositionY -= jumpForce;
  }

  marioPositionY += gravity; 

  if (marioPositionY > canvas.height - marioHeight) {
    marioPositionY = canvas.height - marioHeight;
    jumpForce = maxJumpforce;
  }







	//-------------------------------------
	// END UPDATE LOGIC

	// BEGIN DRAW LOGIC
	//-------------------------------------

	graphics.clearRect(0, 0, canvas.width, canvas.height)

	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);


  graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);
	//-------------------------------------

	// ask the browser to call the update function again.
	requestAnimationFrame(update)
}


// DO NOT EDIT BELOW THIS LINE
//--------------------------------------------------------------------

var keys = [];
var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;

// check key down events
window.addEventListener('keydown', function (event) {
	keys[event.keyCode] = true;
}, true);

// check key release events
window.addEventListener('keyup', function (event) {
	keys[event.keyCode] = false;
}, true);

function isKeyDown(key) {
	return keys[key];
}

update();
//--------------------------------------------------------------------