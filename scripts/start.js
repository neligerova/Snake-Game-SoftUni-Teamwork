
function init() {
    let ctx = document.getElementById('canvas').getContext('2d');

    let snakeImg = new Image();
    snakeImg.src = 'images/gTe5qA9nc.png';
    let snake2Img = new Image();
    snake2Img.src = 'image/gTe5qA9nc1';

    ctx.drawImage(snakeImg, 0, 0);


    ctx.font = "45px monospace ";
    ctx.fillText("Super cool Snake Game",230,50);

    ctx.fillStyle = "white";
    ctx.fillRect(390, 180, 200, 40);
    ctx.fillStyle = 'black';
    ctx.font = "24px monospace";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Click to begin", 490, 200  );
   

    ctx.fillStyle = "white";
    ctx.fillRect(390, 230, 200, 40);
    ctx.fillStyle = 'black';
    ctx.font = "24px monospace";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Instructions", 490, 250 );

        
       

    




}

init();




