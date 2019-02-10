
let x, y, xapple, yapple;

let x2 = 0, y2 = 0;
let score = 0;

let xspeed = 1;
let yspeed = 1;

function preload() {

}

function updateScore() {
    fill("black")
    textSize(32);
    text(score, 10, 30);
}

function setup() {
    createCanvas(500, 350);
    background(0);
    x = random(width);
    y = random(height);
    tint(0, 153, 204);
    newApple();
}

function newApple() {
    xapple = random(width - 20);
    yapple = random(height - 20);

}

function gotApple() {
    if (x <= xapple + 10 && x >= xapple -10 && y <= yapple + 10 && y >= yapple -10) {
        
        score += 10;
        newApple();
        console.log("got apple! score: " + score);
    }
}


function draw() {

    clear();
    updateScore();
    //output apple in fixed location
    fill("red");
    rect(xapple,yapple, 10, 10);
    
    //output cursor in moving poisition
    fill("black")
    rect(x-x2,y-y2,10,10)
    rect(x, y, 10, 10);
    gotApple();

    x = x + xspeed;
    y = y + yspeed;

    //get cursor to bounce off walls
    if (x >= width || x <= 0) {
        xspeed = xspeed * -1;
        tint(random(255), random(255), random(255));
    }

    if (y  >= height || y <= 0) {
        yspeed = yspeed * -1;
        tint(0, 153, 204);
        tint(random(255), random(255), random(255));
    }
}

function keyPressed() {

    yspeed = 0;
    xspeed = 0;

    //console.log(keyCode)
    if (keyCode === LEFT_ARROW) {
        console.log("left");
        xspeed = xspeed = -1;
        x2 = -10;
        y2 = 0;
    }
    if (keyCode === RIGHT_ARROW) {
        console.log("right")
        xspeed = xspeed = 1;
        x2 = +10;
        y2 = 0;

    }
    if (keyCode === UP_ARROW) {
        console.log("up")
        yspeed = yspeed = -1;
        x2 = 0;
        y2 = -10;
    }
    if (keyCode === DOWN_ARROW) {
        console.log("down");
        yspeed = yspeed = 1; 
        x2 = 0;
        y2 = +10;
    }


}