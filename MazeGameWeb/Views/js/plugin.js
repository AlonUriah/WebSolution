(function ( JQ ) {
 
    JQ.fn.mazeBoard = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = JQ.extend({
            // These are the defaults.
            mazeData: undefined,
            name: undefined,
            rows: undefined,
            cols: undefined,
            startRow: undefined,
            startCol: undefined,
            exitRow: undefined,
            exitCol: undefined
        }, options );

        var ctx = this[0].getContext('2d');
        var rows = settings.rows;
        var cols = settings.cols;
        var cellWidth = this[0].width / cols;
        var cellHeight = this[0].height / rows;
        for (var i = 0; i < rows; i++)
            for (var j = 0; j < cols; j++) {
                var val = settings.mazeData[(i * rows) + j];
                switch (val) {
                    case '1':
                        ctx.fillRect(cellWidth * j, cellHeight * i, cellWidth, cellHeight);
                        break;
                    case '#':
                        var img1 = new Image();

                        var x1 = cellWidth * j;
                        var y1 = cellHeight * i;

                        img1.onload = function() {
                            ctx.drawImage(img1, x1, y1, cellWidth, cellHeight);
                        };
                        img1.src = "resources/end.png";
                        break;
                    case '*':
                        var img2 = new Image();

                        var x2 = cellWidth * j;
                        var y2 = cellHeight * i;

                        img2.onload = function() {
                            ctx.drawImage(img2, x2, y2, cellWidth, cellHeight);
                        };
                        img2.src = "resources/player.png";

                        break;
                    default:
                        console.log('Hi');
                        break;
                }
            }
    };
}( jQuery ));