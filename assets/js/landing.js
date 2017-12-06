(function(w, $){
  'use strict';
  
  // Globals
  var utils = w.utils,
      requestAnimationFrame = w.requestAnimationFrame,
      
      // Set variables for canvas
      $canvas = $('.canvas')[0],
      context = $canvas.getContext('2d'),
      
      // Create ball on canvas
      ball  = new Ball(20, '#DE1E7E'),
      angle = 0,
      
      // Animation settings
      rangeX = 150,
      rangeY = 50,
      speed  = 0.05,
      
      // Horizontal animation starts from left edge
      // Vertical animation is centered
      centerX = $canvas.width / 2,
      centerY = $canvas.height / 2;
  
  // Animation IIFE loop
  (function animate(){
    
    // Call request animation frame recursively
    requestAnimationFrame(animate, $canvas);
    
    // Clear canvas at the beginning of every frame
    context.clearRect(0, 0, $canvas.width, $canvas.height);
  
    // Use sine & cosine functions to animate
    // object in a complete circle
    ball.x = centerX + Math.cos(angle) * rangeX;
    ball.y = centerY + Math.sin(angle) * rangeY;
    
    // Increment the angle
    angle += speed;
    
    // Redraw ball using 
    // canvas context
    ball.draw(context);
  })();
})(
window,
document.querySelectorAll.bind(document)
);