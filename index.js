const grid = document.querySelector('.grid');
const boardWidth = 560;
const blockWidth = 100; 
const blockHeight = 20; 

class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis+ blockHeight];
        this.topRight = [xAxis+blockWidth, yAxis+blockHeight];

    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),

    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),

    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),

];


function addBlocks() {
    for (let i=0; i<blocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'; 
        grid.appendChild(block); 
    }
}
addBlocks(); 

const userStart = [230, 10];
let currentPosition = userStart; 
const user = document.createElement('div');
user.classList.add('user');
drawUser(); 
grid.appendChild(user); 

function drawUser(){
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}
document.addEventListener('keydown', moveUser);
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0){
            currentPosition[0] -= 10; 
            drawUser();
           
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] < 460){
            currentPosition[0]  += 10; 
            drawUser();
            } 
            break; 
    }   
}


const ballDiameter = 15; 
const ballStart = [230,40];
let ballCurrentPosition = ballStart; 
let xDirection = 2; 
let yDirection = 2; 

function drawBall() {
    ball.style.left = ballCurrentPosition[0] +'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}


let ballTimerId; 
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall(); 
grid.appendChild(ball);

function moveBall(){
    ballCurrentPosition[0] += xDirection; 
    ballCurrentPosition[1] += yDirection; 
    drawBall(); 
}

ballTimerId = setInterval(moveBall, 30); 

function checkForCollision() {

    // checking for wall collision
    if(ballCurrentPosition[0] >= (boardWidth-ballDiameter)){
        changeDirection(); 
    }
}

function changeDirection(){
    if (xDirection === 2 && yDirection === 2){
        xDirection = -2; 
        return
    }
}
