const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
    //console.log(limitsBall, limitsStage);
    //console.log(Math.round(limitsBall.left - 4), Math.round(limitsStage.left));


    switch (e.keyCode) {
        //Left
        case 37:
            if (limitsBall.left > limitsStage.left)
            {e.preventDefault();
            x--;}
            break;
        //Up
        case 38:
            if (limitsBall.top > limitsStage.top)
            {e.preventDefault();
            y--;}
            break;
        //Right
        case 39:
            if (limitsBall.right <= limitsStage.right)
            {e.preventDefault();
            x++;}
            break;
        //Down
        case 40:
            if (limitsBall.bottom < limitsStage.bottom)
            {e.preventDefault();
            y++;}
            break;
    
        default:
            break;
    }
    $ball.style.transform =`translate(${x * 10}px, ${y * 10}px)`;
}
export function shortCuts(e) { 
    if (e.key === "a" && e.altKey) {
        alert("Se ha lanzado una alerta con el teclado.")
    }
    
    if (e.key === "c" && e.altKey) {
        confirm("Se ha lanzado una confirmación con el teclado.")
    }
    
    if (e.key === "p" && e.altKey) {
        prompt("Se ha lanzado un aviso con el teclado.")
    }
}