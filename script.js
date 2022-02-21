const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#040404";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Creates the sky by filling the background color

ctx.fillStyle = "#9b7653";
ctx.fillRect(0, 135, canvas.width, 100);

ctx.fillStyle = "#348C31";
ctx.fillRect(0, 135, canvas.width, 2);

//Draws the ground (dirt and grass)

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(20, 20, 7, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

//Draws the moon

ctx.beginPath();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(40, 40, .5, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.closePath();

/////

ctx.beginPath();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(76, 55, .5, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.closePath();

/////

ctx.beginPath();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(94, 80, .5, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.closePath();

/////

ctx.beginPath();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(130, 20, .5, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.closePath();

/////

ctx.beginPath();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(150, 75, .5, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.closePath();

/////

ctx.beginPath();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(170, 30, .5, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.closePath();

/////

ctx.beginPath();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(210, 40, .5, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.closePath();

/////

ctx.beginPath();

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.arc(250, 17, .5, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.closePath();

//Draw Stars

ctx.fillStyle = "#960018";
ctx.fillRect(255, 50, 9, 26);

//Draws chimney

ctx.fillStyle = "white";
ctx.fillRect(0, 112, canvas.width, 4);

ctx.fillStyle = "white";
ctx.fillRect(0, 127, canvas.width, 4);

let xCoord = 3;
let xCoord1 = 4;
let xCoord2 = 3;
let xCoord3 = 5.5;

for (let i = 0; i < 14; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(xCoord += 20, 108, 3, 27);

    ctx.beginPath();
    ctx.moveTo(xCoord1 += 20, 102);
    ctx.lineTo(xCoord2 += 20, 109);
    ctx.lineTo(xCoord3 += 20, 109);
    ctx.closePath();

    ctx.fillStyle = "8B0000";
    ctx.fill();
}

//Draws the fences

ctx.fillStyle = "red";
ctx.fillRect(215, 85, 60, 50);

ctx.beginPath();
ctx.moveTo(245, 60);
ctx.lineTo(215, 85);
ctx.lineTo(275, 85);
ctx.closePath();

ctx.fillStyle = "8B0000";
ctx.fill();

//Draws the house

ctx.fillStyle = "#964B00";
ctx.fillRect(235, 105, 22, 30);

//Draws the door

ctx.beginPath();
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = 1;

ctx.arc(253, 120, 1, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Draws the door knob