
function init() {
    let snakeImg = new Image();
    snakeImg.src = 'images/gTe5qA9nc.png';
    
    function begin() {
        let ctx = document.getElementById('canvas').getContext('2d');
        ctx.drawImage(snakeImg, 0, 0);
        ctx.font = "50px Papyrus ";
        ctx.fillText("Super cool Snake Game",230,50);
        let button  = document.getElementById('startButton');
        button.addEventListener('click',drawStartButton);


        function drawStartButton() {
            ctx.fillStyle = "white";
            ctx.fillRect(390, 180, 200, 40);
            ctx.fillStyle = 'black';
            ctx.font = "24px monospace";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText("Click to begin", 490, 200  );
        }

        function cls() {
            ctx.clearRect(0, 0, 800, 600);
        }
       

    }
    begin();


}

init();




