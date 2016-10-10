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
  
  
 let paint = function () {
    ctx.fillStyle = 'lightgrey'
    ctx.fillRect(0, 0, w, h)
    ctx.strokeStyle = 'black'
    ctx.strokeRect(0, 0, w, h)
  }

  btn.setAttribute('disabled', true)



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
  
  if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || collision)
      btn.removeAttribute('disabled', true)
  ctx.clearRect(0, 0, w, h)
  gameloop = clearInterval(gameloop)
  return
  
   let collision = function(x, y, arr) {
    for (let i=0; i <arr.length; i++) {
      if(arr[i].x === x && arr[i].y === y)
          return true
    }
    return false

  }






})
