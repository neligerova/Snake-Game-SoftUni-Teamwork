
function init() {
    let ctx = document.getElementById('canvas').getContext('2d');

    let snakeImg = new Image();
    snakeImg.src = 'images/gTe5qA9nc.png';
    let snake2Img = new Image();
    snake2Img.src = 'image/gTe5qA9nc1';
    



        let counter=0; // this is the index of the next image to be shown
        for (var i=0;i<2;i++) {
            setTimeout(drawNextImage, 1000);
            ctx.clearRect(0, 0, 800, 600);
        }
// this is the function called after each timeout to draw next image
    function drawNextImage(){
        ctx.drawImage(images[counter], 0, 0);
        counter++;
        if (counter>2) {counter=0;}
    }


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




