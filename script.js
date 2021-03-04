var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var background_img = "mars.jpg";
var rover_img = "rover.png";
var rover_x = 10;
var rover_y = 10;

function add() {
    var background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_img;

    var rover_img_tag = new Image();
    rover_img_tag.onload = uploadRover;
    rover_image.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_img, 0, 0, canvas.Width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadRover();
        uploadBackground();
    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadRover();
        uploadBackground();
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadRover();
        uploadBackground();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadRover();
        uploadBackground();
    }
}