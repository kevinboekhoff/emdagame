(function(window) {
ball = function() {
	this.initialize();
}
ball._SpriteSheet = new SpriteSheet({images: ["Untitled-1.png"], frames: [[0,0,39,108,0,24.3,6.2],[39,0,39,108,0,24.3,6.2],[78,0,39,108,0,24.3,6.2],[117,0,39,108,0,24.3,6.2],[156,0,39,108,0,24.3,6.2],[195,0,39,108,0,24.3,6.2],[0,108,39,108,0,24.3,6.2],[39,108,39,108,0,24.3,6.2],[78,108,39,108,0,24.3,6.2],[117,108,39,108,0,24.3,6.2]]});
var ball_p = ball.prototype = new BitmapAnimation();
ball_p.BitmapAnimation_initialize = ball_p.initialize;
ball_p.initialize = function() {
	this.BitmapAnimation_initialize(ball._SpriteSheet);
	this.paused = false;
}
window.ball = ball;
}(window));

