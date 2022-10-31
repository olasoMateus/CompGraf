import { vec2 } from "gl-matrix";


var baseTop = [
    [200, 300],
    [300, 200]
    ];


function mainEntrance(){
    // retrieve <canvas> element
    var canvasElement = document.querySelector("#theCanvas");
    var ctx = canvasElement.getContext("2d");
    w = canvasElement.width;
    h = canvasElement.height;


    var updateCanvas = () =>{
        ctx.fillStyle = "white";
        ctx.rect(0, 0, w, h);
        ctx.fill();
        ctx.fillStyle = ctx.strokeStyle = "black";
        ctx.beginPath();
        for(let p of triangleIso(...baseTop)){
            ctx.lineTo(...p);
        }
        ctx.closePath();
        ctx.stroke();
        
    };
    updateCanvas();
}

function triangleIso(basePoint, topPoint){
    var a;
    vec2.sub(a, basePoint, topPoint);
    var b = [-a[1], a[0]];
    var c = [a[1], -a[0]];
    return [
        basePoint,
        vec2.add([], basePoint, b),
        vec2.add([], basePoint, c)
    ]
}