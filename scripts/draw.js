let drawModule = (function () {

  let snakeBody = function (x, y) {
    ctx.fillStyle = 'green'
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize)
    ctx.strokeStyle = 'darkgreen'
    ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize)
  }

  let snakeDraw = function () {
    let length = 4
    let snake = []
    for (let i = length - 1; i >= 0; i--) {
      snake.push({ x: i, y: 0 })
    }
  }



  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction == 'right') {
    snakeX++
  } else if (direction == 'left') {
    snakeX--
  } else if (direction == 'up') {
    snakeY--
  } else if (direction == 'down') {
    snakeY++ }
  
   let collision = function(x, y, arr) {
    for (let i=0; i <arr.length; i++) {
      if(arr[i].x === x && arr[i].y === y)
          return true;
    }
    return false;

  }






})
