const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

createSky();
addGround();
fillSky();
buildFence();
buildHouse();
plantTree();
writeText();

function createSky() {
    //Creates the sky by making the background a dark color
    ctx.fillStyle = "#040404";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function addGround() {
    //Draws the ground, which includes the grass and underlying dirt
    ctx.fillStyle = "#9b7653";
    ctx.fillRect(0, 135, canvas.width, 100);
    
    ctx.fillStyle = "#348C31";
    ctx.fillRect(0, 135, canvas.width, 2); 
}

function fillSky() {
    //Fills the sky with a moon and stars
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    
    ctx.arc(20, 20, 7, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";


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
}

function buildFence() {
    //Builds the fences behind the house using a for loop

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
}

function buildHouse() {
    //Adds the house, which consists of the base, a roof, a chimney, a door, and a door knob
    ctx.fillStyle = "#960018";
    ctx.fillRect(255, 50, 9, 26);


    ctx.fillStyle = "red";
    ctx.fillRect(215, 85, 60, 50);

    ctx.beginPath();
    ctx.moveTo(245, 60);
    ctx.lineTo(215, 85);
    ctx.lineTo(275, 85);
    ctx.closePath();

    ctx.fillStyle = "8B0000";
    ctx.fill();


    ctx.fillStyle = "#964B00";
    ctx.fillRect(235, 105, 22, 30);
    

    
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    
    ctx.arc(253, 120, 1, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function plantTree() {
    //Draws the tree
    ctx.fillStyle = "#964B11";
    ctx.fillRect(45, 80, 13, 55);
    
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.quadraticCurveTo(10, 25, 25, 62.5);
    ctx.quadraticCurveTo(6, 80, 45, 70.5);
    ctx.quadraticCurveTo(10, 110, 60, 80.5);
    ctx.quadraticCurveTo(70, 110, 80, 80.5);
    ctx.quadraticCurveTo(110, 75, 90, 60.5);
    ctx.quadraticCurveTo(90, 30, 60, 60.5);
    ctx.quadraticCurveTo(60, 30, 50, 49.5);
    
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.fill();
}

function writeText() {
    //Writes the title of the cartoon/drawing
    ctx.fillStyle = "gray";
    ctx.font = "15px Arial";
    ctx.fillText("A Peaceful Night", 92, 16);
}