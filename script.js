const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#ADD8E6";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Creates the sky by filling the background color

ctx.fillStyle = "#9b7653";
ctx.fillRect(0, 135, canvas.width, 100);

ctx.fillStyle = "#348C31";
ctx.fillRect(0, 135, canvas.width, 2);

//Draws the ground (dirt and grass)

ctx.fillStyle = "yellow";
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;

ctx.arc(20, 20, 7, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();

//Draws the sun

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

