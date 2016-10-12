/**
 * Created by User on 10/12/2016.
 */
(function (window, document, drawModule, undefined) {

    var btn = document.getElementById('btn');
    btn.addEventListener("click", function(){ drawModule.init();});

    window.addEventListener('keydown', kbdHandler);

    function kbdHandler(event) {




        switch(event.code) {
            case "ArrowLeft":
                if (direction != 'right') {
                    direction = 'left';
                }
                console.log('left');
                break;

            case "ArrowRight":
                if (direction != 'left') {
                    direction = 'right';
                    console.log('right');
                }
                break;

            case "ArrowUp":
                if (direction != 'down') {
                    direction = 'up';
                    console.log('up');
                }
                break;

            case "ArrowDown":
                if (direction != 'up') {
                    direction = 'down';
                    console.log('down');
                }
                break;
        }

    }


}) (window, document, drawModule);