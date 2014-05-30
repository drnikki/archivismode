// drawing rectangles, putting an image on canvas.  

(function() {

    var canvas = new fabric.Canvas('drawing-canvas', {
        // configuration options
        backgroundColor: 'rgb(100,100,200)',
        selectionColor:'rgba(0,255,0,0.3)',
        selectionBorderColor: 'red',
        selectionLineWidth: 5

    });

    var imgElement = document.getElementById('testing-id');
    var imgInstance = new fabric.Image(imgElement, {
        left: 0,
        top: 0,
       selectable: false
    });
    
    // set it to the image's dimensions
    canvas.setWidth(imgElement.width)
    canvas.setHeight(imgElement.height);
    //  canvas.add(imgInstance);
    canvas.setBackgroundImage(imgInstance, canvas.renderAll.bind(canvas));

    canvas.on('selection:created', function(options) {
        console.log(options);
    })

    // mouse:down starts drawing rectangle
    canvas.on('mouse:down', function(options) {
        // only if we're not selecting other objects
        if (typeof options.target !== 'object' ) {
            drawRect(options.e.clientX, options.e.clientY, 'start');
        }
    });

    // mouse:up stops the rectangle
    canvas.on('mouse:up', function(options) {
        if (typeof options.target !== 'object') {
            drawRect(options.e.clientX, options.e.clientY, 'end');
        }
    });

    canvas.on('object:added', function(options) {
        console.log(options);
    })



    canvas.on('touchstart', function(options) {
        if (typeof options.target !== 'object') {
            drawRect(options.e.clientX, options.e.clientY, 'end');
        }
    });

    function drawRect(x, y, dir) {
        if (dir == 'start' ) {
            drawRect.startX = x;
            drawRect.startY = y;
        } 
        else { 
            // draw it, it's over. 
            var rect = new fabric.Rect({
                left: drawRect.startX,
                top: drawRect.startY,
                width: x - drawRect.startX,
                height: y - drawRect.startY,
                fill: 'gray',
                opacity: .65
            });
            canvas.add(rect);
        }   
    }

}());