let drawModule = (function () {

  let snakeBody = function (x, y) {
    ctx.fillStyle = 'green'
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize)
    ctx.strokeStyle = 'darkgreen'
    ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize)
  }

  let hamburger = function () {
  let hamburger = new Image()
    hamburger.src  = './img/hamburger.png'
    ctx.drawImage(hamburger, 100, 200)
  }

  let scoreText = function () {
      let score_text = "Score: " + score
      ctx.fillStyle = 'green'
      ctx.fillText(score_text, 160, h - 5)
  }
  
 let snakeDraw = function () {
    let length = 4
    let snake = []
    for (let i = length - 1; i >= 0; i--) {
      snake.push({ x: i, y: 0 })
    }
  }  
  
 let paint = function () {
   ctx.fillStyle = 'lightgrey';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, w, h);

      btn.setAttribute('disabled', true);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;

      if (direction == 'right') { 
        snakeX++; }
      else if (direction == 'left') { 
        snakeX--; }
      else if (direction == 'up') { 
        snakeY--; 
      } else if(direction == 'down') { 
        snakeY++; }

      if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
          //restart game
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;          
        }
        
        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
          score ++;
          
          createFood(); //Create new food
        } else {
          var tail = snake.pop(); //pops out the last cell
          tail.x = snakeX; 
          tail.y = snakeY;
        }
        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        } 
        
        pizza(food.x, food.y); 
        scoreText();
  
 }

  let createSnakeFood = function() {
   food = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
        }

    for (let i=0; i>snake.length; i++) {
        let snakeX = snake[i].x;
        let snakeY = snake[i].y;

        if (food.x===snakeX && food.y === snakeY ||
            food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);
        }
    }
 }
   let collision = function(x, y, arr) {
    for (let i=0; i <arr.length; i++) {
      if(arr[i].x === x && arr[i].y === y)
          return true
    }
    return false

  }

 let init = function(){
      direction = 'down';
      snakeDraw();
      createSnakeFood();
      gameloop = setInterval(paint, 80);
  }


    return {
      init : init
    };




}())
