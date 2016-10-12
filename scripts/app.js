
(function (window, document, drawModule, undefined) {

    let btn = document.getElementById('btn')
    btn.addEventListener("click", function(){ drawModule.init()})

    window.addEventListener('keydown', kbdHandler)

    function kbdHandler(event) {




        switch(event.code) {
            case "ArrowLeft":
                if (direction != 'right') {
                    direction = 'left'
                }

                break

            case "ArrowRight":
                if (direction != 'left') {
                    direction = 'right'

                }
                break

            case "ArrowUp":
                if (direction != 'down') {
                    direction = 'up'

                }
                break

            case "ArrowDown":
                if (direction != 'up') {
                    direction = 'down'

                }
                break
        }

    }


}) (window, document, drawModule)