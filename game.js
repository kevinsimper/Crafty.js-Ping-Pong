var Game = function(){
  var opts = {
    width: 400,
    height: 500
  };
  Crafty.init(400, 500, document.getElementById('game'));
  Crafty.background('black');

  Crafty.e('Paddle, 2D, Canvas, Color, Twoway')
    .attr({x: 10, y: 10, w: 55, h: 15})
    .color('red')
    .bind('EnterFrame', function(){
      this.x = ball.x;
      if(this.x < 0){
        this.x = 0;
      }
      if(this.x > 345){
        this.x = 345;
      }

    });

  Crafty.e('Paddle, 2D, Canvas, Color, Twoway')
    .attr({x: 10, y: 475, w: 55, h: 15})
    .color('green')
    .twoway(4)
    .bind('EnterFrame', function() {
      if(this.x < 0){
        this.x = 0;
      }
      if(this.x > opts.width - this.w){
        this.x = opts.width - this.w;
      }
    });

  var ball = Crafty.e('Ball, 2D, Canvas, Color, Collision')
    .attr({x: opts.width/2, y: opts.height/2, w:10, h: 10,
            dX: -2, dY: 2})
    .color('white')
    .bind('EnterFrame', function(){
      this.x += this.dX;
      this.y += this.dY;
      if(this.x < 10){
        this.dX *= -1;
      }
      if(this.x > 390){
        this.dX *= -1;
      }
      if(this.y < 0 || this.y > 500){
        this.y = 250;
      }
    })
    .onHit('Paddle', function(){
      this.dY *= -1;
    });
}

jQuery(function(){
  var game = new Game();
});