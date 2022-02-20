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

