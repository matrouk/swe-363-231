const canvas = document.getElementById("signatureCanvas");
const context = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

function startDrawing(event) {
  isDrawing = true;
  const { offsetX, offsetY } = event;
  context.beginPath();
  context.moveTo(offsetX, offsetY);
}

function draw(event) {
  if (!isDrawing) return;
  const { offsetX, offsetY } = event;
  context.lineTo(offsetX, offsetY);
  context.stroke();
}

function stopDrawing() {
  isDrawing = false;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImage() {
  const signatureDataUrl = canvas.toDataURL(); // Get the image data URL

  const link = document.createElement("a");
  link.href = signatureDataUrl;
  link.download = "signature.png";

  link.click();
}