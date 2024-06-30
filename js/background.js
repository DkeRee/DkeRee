const canvas = document.getElementById("art-canvas");
const ctx = canvas.getContext("2d");

var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;

window.onresize = function() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
}

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const boxSize = 35;
const SHADOW = "rgba(0, 0, 0, 0.3)";
const YELLOW_BLOCK = 1;
const RED_BLOCK = 2;

const TANK_WIDTH = 43;
const TANK_HEIGHT = 33;

//credit to https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
function hexToRgbA(hex, opacity){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c= hex.substring(1).split('');
       	if(c.length== 3){
          	c= [c[0], c[0], c[1], c[1], c[2], c[2]];
       	}
       c= '0x'+c.join('');
       return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + opacity + ')';
   	}
 	throw new Error(`Bad Hex: ${hex}`);
}

class Splotch {
	constructor(x, y, side, kind) {
		this.side = side;
		this.x = x;
		this.y = y;

		if (kind == YELLOW_BLOCK) {
			//light orange-brown
			this.color = "#C2995D";
		} else {
			//very light red
			this.color = "#FF8A73";
		}
	}

	render(opacity) {
		ctx.shadowBlur = 10;
		ctx.shadowColor = hexToRgbA(this.color, opacity);
		ctx.fillStyle = hexToRgbA(this.color, opacity);
		ctx.fillRect(this.x, this.y, this.side, this.side);
		ctx.shadowBlur = 0;
	}
}

class Block {
	constructor(x, y) {
		//block decor
		this.splotches = [];

		this.width = boxSize;
		this.height = boxSize
		this.x = x * boxSize;
		this.y = y * boxSize;
		this.opacity = 1;
		this.kind = Math.random() > 0.6 ? RED_BLOCK : YELLOW_BLOCK;

		if (this.kind == YELLOW_BLOCK) {
			this.color = "#967748";
		} else {
			this.color = "#B54B44";
		}

		//randomly generate 2 splotches
		for (var i = 0; i < 2; i++) {
			this.splotches.push(new Splotch(this.x + Math.floor(Math.random() * this.width / 1.4), this.y + Math.floor(Math.random() * this.height / 1.4), Math.floor(Math.random() * this.width / 3) + 2, this.kind));
		}
	}

	render() {
		//fill in block
		ctx.shadowBlur = 1;
		ctx.shadowColor = SHADOW;
		ctx.fillStyle = SHADOW;
		ctx.fillRect(this.x + 5, this.y + 5, this.width, this.height);
		ctx.fillStyle = hexToRgbA(this.color, this.opacity);
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.shadowBlur = 0;

		//render splotches
		for (var i = 0; i < this.splotches.length; i++) {
			this.splotches[i].render(this.opacity, ctx);
		}
	}
}

function dtr(degree) {
	return degree * Math.PI / 180;
}

class Tank {
	constructor(x, y, angle, turretAngle, color, turretColor, sideColor, opacity) {
		//body
		this.width = TANK_WIDTH;
		this.height = TANK_HEIGHT;
		this.turretBaseSide = 19;
		this.turretNozzleWidth = 21;
		this.turretNozzleHeight = 10;

		//tank info
		this.x = x
		this.y = y;
		this.centerX = this.x + this.width / 2;
		this.centerY = this.y + this.height / 2;
		this.angle = angle;
		this.turretAngle = turretAngle;

		//colliding?
		this.colliding = false;

		//opacity
		this.opacity = opacity;

		//colors of the tank
		this.color = hexToRgbA(color, this.opacity);
		this.turretColor = hexToRgbA(turretColor, this.opacity);
		this.sideColor = hexToRgbA(sideColor, this.opacity);
	}

	render() {
		ctx.shadowBlur = 3;
		ctx.shadowColor = this.color;

		this.renderShadow();

		//draw tank
		ctx.save();

		ctx.translate(this.centerX, this.centerY);
		ctx.rotate(this.angle);

		//DRAW TANK BASE//		
		ctx.fillStyle = this.color;
		ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);

		//DRAW TANK SIDES//
			
		//WHEELS
		ctx.fillStyle = this.sideColor;

		//left wheel
		ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height / 5);

		//right wheel
		ctx.fillRect(this.width / -2, this.height / 3, this.width, this.height / 5);

		ctx.restore();

		ctx.save();

		//DRAW TURRET//
		ctx.translate(this.centerX, this.centerY);
		ctx.rotate(this.turretAngle);
		ctx.lineWidth = 3;
		ctx.strokeStyle = hexToRgbA("#000000", this.opacity);

		ctx.shadowBlur = 20;
		ctx.shadowColor = this.color;

		//turret base
		ctx.fillStyle = this.turretColor;
		ctx.strokeRect(this.turretBaseSide / -2, this.turretBaseSide / -2, this.turretBaseSide, this.turretBaseSide);
		ctx.fillRect(this.turretBaseSide / -2, this.turretBaseSide / -2, this.turretBaseSide, this.turretBaseSide);

		//turret nozzle
		ctx.fillStyle = this.turretColor;
		ctx.strokeRect(this.turretNozzleWidth / 2, this.turretNozzleHeight / -2, this.turretNozzleWidth, this.turretNozzleHeight);
		ctx.fillRect(this.turretNozzleWidth / 2, this.turretNozzleHeight / -2, this.turretNozzleWidth, this.turretNozzleHeight);

		ctx.restore();
		ctx.shadowBlur = 0;
	}

	renderShadow() {
		ctx.save();

		ctx.translate(this.centerX + 5, this.centerY + 5);
		ctx.rotate(this.angle);

		ctx.fillStyle = SHADOW;
		ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);

		ctx.restore();
	}
}
