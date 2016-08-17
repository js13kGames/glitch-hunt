'use strict';

var renderingCanvas = document.querySelector('.game-renderer');
var renderingContext = renderingCanvas.getContext('2d');
var outputCanvas = document.querySelector('.game-output');
var outputContext = outputCanvas.getContext('2d');

var textRenderSystem = new TextRenderSystem(renderingContext);
var rectRenderSystem = new RectRenderSystem(renderingContext);
var clickSystem = new ClickSystem(outputCanvas);

var button = new Button('New Game', 0.34, 0.3, 0.3, 0.2, function () {
	console.log('click');
	game.start();
});

var logo = new Logo();

initCanvases();

function initCanvases() {
	renderingCanvas.width = window.innerWidth / SCALE;
	renderingCanvas.height = window.innerHeight / SCALE;

	outputCanvas.width = window.innerWidth;
	outputCanvas.height = window.innerHeight;

	outputContext.imageSmoothingEnabled = false;
	outputContext.scale(SCALE, SCALE);
}

function gameLoop(time) {
	renderingContext.clearRect(0, 0, renderingCanvas.width, renderingCanvas.height);	
	
	rectRenderSystem.update();
	textRenderSystem.update();	

	outputContext.clearRect(0, 0, outputCanvas.width, outputCanvas.height);		
	outputContext.drawImage(renderingCanvas, 0, 0);
	requestAnimationFrame(gameLoop);
}

gameLoop();