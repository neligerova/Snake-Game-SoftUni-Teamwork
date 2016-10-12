
function init() {
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = "45px monospace ";
    ctx.fillText("GAME OVER",260,50);

    let gameOver = new Image();
    gameOver.src = 'images/skull.png';

    ctx.drawImage(gameOver, 40, 110);

    ctx.fillStyle = "white";
    ctx.fillRect(390, 180, 200, 40);
    ctx.fillStyle = 'black';
    ctx.font = "24px monospace";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Oops...", 490, 200  );

    ctx.fillStyle = "white";
    ctx.fillRect(390, 230, 200, 40);
    ctx.fillStyle = 'black';
    ctx.font = "24px monospace";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Try again", 490, 250 );
}

init();
