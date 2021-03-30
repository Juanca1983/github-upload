var canvas, ctx, w, h;
var xMonster = 10;
var yMonster = 10;
var monsterSpeed = 1;

window.onload = function init(){

    console.log("HOla");
    
    canvas = document.querySelector("#myCanvas");

    w = canvas.width;
    h = canvas.height;

    ctx = canvas.getContext('2d');
    
    mainLoop();
};

function mainLoop(){
    //1 - Clear the canvas.
    ctx.clearRect(0, 0, w, h);

    //2 - Draw the monster
    drawMyMonster(xMonster, yMonster);

    //3 - Move the monster
    xMonster += monsterSpeed;

    // 4 - Test collisions with vertical boundaries
    if (((xMonster + 100) > w) || (xMonster < 0)){
        // collision with left or right wall
        // change the direction of movement
        monsterSpeed = -monsterSpeed;
    }

    //5 - Request a new frame of animation in 1/60s
    requestAnimationFrame(mainLoop);
}

function drawMyMonster(x, y){
    //good practice, save de context
    ctx.save();

    ctx.translate(x, y);

    //0,0 is the top left corner of the monster
    ctx.strokeRect(0, 0, 100, 100);

    //eyes, x=20, y=20 is relative to the top left corner
    //of the previous rectangle
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(65, 20, 10, 10);

    //Nose
    ctx.strokeRect(45, 40, 10, 40);

    //mouth
    ctx.strokeRect(35, 84, 30, 10);

    //teeth
    ctx.fillRect(38, 84, 10, 10);
    ctx.fillRect(52, 84, 10, 10);

    //good practice, restore the context
    ctx.restore();
}