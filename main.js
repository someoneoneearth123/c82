const canvas = document.querySelector("canvas");
const clearBtn = document.querySelector("button");
const ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var color = "black";
var width = 10;
var currentX, currentY, lastX, lastY;

clearBtn.addEventListener("click", clear);
canvas.addEventListener('mousedown', mousedown);
canvas.addEventListener('mouseleave', mouseleave);
canvas.addEventListener('mouseup', mouseup);
canvas.addEventListener('mousemove', function (e) {
    mousemove(e);
});


function mousedown() {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouseEvent = "mouseDown";
}

function mouseleave() {
    mouseEvent = "mouseleave";
}

function mouseup() {
    mouseEvent = "mouseUP";
}

function mousemove(e) {
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if (mouseEvent === "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.moveTo(lastX, lastY);

        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }

    lastX = currentX;
    lastY = currentY;
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}