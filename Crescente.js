
/**
* Canvas width.
* @type {Number}
*/
var w;
 
/**
* Canvas height.
* @type {Number}
*/
var h;

// Variavel que irá guardar os vértices
var v;

// Variavel do gradiente vermelho e azul
var gradient02;

// Variavel do gradiente verde e branco
var gradient13;

// Número do vertice no qual a rotação ocorrerá (0 -> Red; 1 -> Green; 2 -> Blue; 3 -> White)
var centerPoint = 0;

// Função que desenha no canvas
 function draw(ctx) {
    ctx.fillStyle = "rgba(0, 204, 204, 1)";
    ctx.rect(0, 0, w, h);
    ctx.fill();
    //  ctx.save();
    ctx.beginPath();
    ctx.moveTo(v[0].x, v[0].y);
    ctx.lineTo(v[1].x, v[1].y);
    ctx.lineTo(v[2].x, v[2].y);
    ctx.lineTo(v[3].x, v[3].y);
    ctx.closePath();
    if (centerPoint == 0 || centerPoint == 2) ctx.fillStyle = gradient02;
    else ctx.fillStyle = gradient13;
    ctx.fill();
    ctx.fillStyle = "Green";
    ctx.fillRect(v[1].x + 5, v[1].y + 5, -10, -10);
    ctx.fillStyle = "Blue";
    ctx.fillRect(v[2].x + 5, v[2].y - 5, -10, 10);
    ctx.fillStyle = "White";
    ctx.fillRect(v[3].x - 5, v[3].y - 5, 10, 10);
    ctx.fillStyle = "Red";
    ctx.fillRect(v[0].x - 5, v[0].y + 5, 10, -10);
 }


 function mainEntrance() {
    // retrieve <canvas> element
    var canvasElement = document.querySelector("#theCanvas");
    var ctx = canvasElement.getContext("2d");
    w = canvasElement.width;
    h = canvasElement.height;

    v = [new DOMPoint(150, 250),
        new DOMPoint(250 , 250),
        new DOMPoint(250, 350),
        new DOMPoint(150, 350)];


    gradient02 = ctx.createLinearGradient(v[0].x, v[0].y, v[2].x, v[2].y);
    gradient02.addColorStop(0, 'red');
    gradient02.addColorStop(1, 'Blue');

    gradient13 = ctx.createLinearGradient(v[1].x, v[1].y, v[3].x, v[3].y);
    gradient13.addColorStop(0, 'Green');
    gradient13.addColorStop(1, 'White');

    var runanimation = (() => {
 
        return () => {
            draw(ctx);
            var m = new DOMMatrix();
            var m = m.translate(v[centerPoint].x, v[centerPoint].y);
            var m = m.rotate(-Math.PI/2);
            var m = m.translate(-v[centerPoint].x, -v[centerPoint].y);
            v = v.map(vertex => vertex.matrixTransform(m));
            gradient02 = ctx.createLinearGradient(v[0].x, v[0].y, v[2].x, v[2].y);
            gradient02.addColorStop(0, 'red');
            gradient02.addColorStop(1, 'Blue');

            gradient13 = ctx.createLinearGradient(v[1].x, v[1].y, v[3].x, v[3].y);
            gradient13.addColorStop(0, 'Green');
            gradient13.addColorStop(1, 'White');

            requestAnimationFrame(runanimation);
        };
    })();
 
    // draw!
    runanimation();

    document.onkeypress = function(evt){
        evt = evt || window.event;
	    switch (evt.key) {
	    case "g": centerPoint = 1; break;
	    case "r": centerPoint = 0; break;
	    case "w": centerPoint = 3; break;
	    case "b": centerPoint = 2; break;

	 }
     }
 }