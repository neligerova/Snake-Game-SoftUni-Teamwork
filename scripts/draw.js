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
})