// drawing rectangles, putting an image on canvas.  

function initCanvas() {

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
    canvas.setWidth(imgElement.width);
    canvas.setHeight(imgElement.height);
    canvas.setBackgroundImage(imgInstance, canvas.renderAll.bind(canvas));

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

    canvas.on('touchstart', function(options) {
        if (typeof options.target !== 'object') {
            drawRect(options.e.clientX, options.e.clientY, 'end');
        }
    });

    canvas.on('object:added', function(options) {
        var bossthing = new Guardian;
        bossthing.setRectangle(options);
        bossthing.showForm(1);
        bossthing.populateForm();
    })

    // it's everything!
    var Guardian = function () {
        this.form = document.getElementById('note-form');
    }

    // takes the options we were given and remembers
    // the good stuff about the rectangle.
    Guardian.prototype.setRectangle = function(options) {
        this.box = {};
        this.box.height = options.target.currentHeight;
        this.box.width = options.target.currentWidth;
        this.box.left = options.target.left;
        this.box.top = options.target.top;
        console.log(this.box);
    }

    // show that form, obvs.
    Guardian.prototype.showForm = function(dir) {
        if (dir = 1) {
            this.form.style.display = 'block';
        }
        else {
            this.form.style.display = 'none';
        }
    }

    // fill the form with the hidden data
    Guardian.prototype.populateForm = function() {
        x_start = document.getElementById('box_x_start');
        x_start.value = this.box.top;
        y_start = document.getElementById('box_y_start');
        y_start.value = this.box.left;

        x_end = document.getElementById('box_x_end');
        x_end.value = this.box.height + this.box.top;
        y_end = document.getElementById('box_y_end');
        y_end.value = this.box.width +  this.box.left;
    }



/**
 *  Utilities - draw the rectangle on canvas.
 */
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
}
