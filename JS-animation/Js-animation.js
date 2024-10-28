

function setup() {
    createCanvas(400, 450);
    background(0);
    
  }
  
  //star wars scene where the bluye and dark green boxes are ships that fly around and the teal are stationary buildings from above 
  function draw() {
    
    //outer box
    noFill();
    stroke(221, 232, 187);
    strokeWeight(10);
    rect(5, 5, 390, 440);
    
    //top left square
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    square(5, 5, 40);
    
    //top left rectangle
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(15, 50, 18, 70);
    
    //top left rectangle ladder
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(15, 127, 18, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(15, 135, 18, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(15, 143, 18, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(15, 151, 18, 3);
    
    //top left rectangle connected to square
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(40, 45, 5, 70);
    //extension
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(40, 90, 20, 70);
    
    //platform miiddle left
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(0, 180, 60, 10);
    //extension
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(60, 187, 30, 3);
    
    //blue square
    fill(76, 87, 184);
    stroke(76, 87, 184);
    strokeWeight(1);
    rect(20, 220, 10, 20);
    
    //platform below blue square
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(15, 250, 60, 15);
    
    //square below platform
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    square(10, 290, 25);
    //extension
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(10, 310, 15, 60);
    
    //rectangle touching green bottom left square
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(30, 320, 30, 70);
    
    //bottom left green square
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(30, 392, 10, 20);
    
    //bottom left inverted L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(30, 418, 80, 8);
    //top of L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(102, 380, 8, 40);
    
    //top left vertical bars 1
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(60, 13, 4, 10);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(70, 15, 4, 16);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(80, 13, 4, 19);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(90, 17, 4, 20);
    
    //top left vertical bars 2
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(70, 40, 4, 30);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(80, 40, 4, 25);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(90, 45, 4, 15);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(100, 55, 4, 10);
    
    //plus symbol top left
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(85, 80, 7, 6);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(79, 87, 20, 18);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(85, 107, 7, 6);
    
    //= below plus symbol top left
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(70, 120, 29, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(70, 135, 29, 3);
    
    //= to the right of plus symbol
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(110, 87, 29, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(110, 100, 29, 3);
    
    //plus symbol top left
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(120, 110, 7, 6);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(114, 117, 20, 18);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(120, 137, 7, 6);
    
    //inverted P left wall
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(50, 215, 50, 30);
    //extension
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(85, 215, 15, 95);
    //block above P
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(70, 198, 20, 10);
    
    //blue rect to right of P
    fill(76, 87, 184);
    stroke(76, 87, 184);
    strokeWeight(1);
    rect(110, 280, 13, 30);
    
    //bar bside L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(120, 320, 10, 120);
    
    //block below green and normal cube
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(135, 400, 20, 40);
    
     //block touching green square
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(135, 365, 30, 30);
    
    //green square in block
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(134, 380, 20, 16);
    
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(185, 400, 15, 40);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(180, 375, 20, 20);
    
    //greeen square bottom middle  
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(220, 390, 15, 40);
    
    //box touching green middle square
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(235, 350, 15, 40);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(70, 330, 20, 20);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(70, 365, 40, 10);
    
    //bottom left rectangle ladder
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(95, 320, 18, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(95, 330, 14, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(95, 340, 8, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(95, 350, 6, 3);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(80, 320, 10, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(70, 315, 3, 8);
    
    //second inverted L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(140, 320, 30, 20);
    //top of L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(160, 280, 10, 40);
    
    //bar above bar above green middle bottom
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(200, 320, 80, 20);
    
    //bar to ruight of green
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(240, 400, 30, 20);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(270, 350, 20, 35);
    
    //domino bottom right
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(295, 340, 20, 85);
    
    //big block bottom right
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(325, 320, 30, 100);
    
    //big cube bottom right in wall
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(370, 330, 30, 100);
    
    //little cube above big in wall
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(385, 305, 10, 10);
    
    //L hugging right middle wall
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(350, 220, 30, 70);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(330, 260, 30, 30);
    
    //upside down L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(330, 200, 10, 50);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(330, 200, 30, 15);
    
    //bar to left of flipped L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(305, 220, 10, 50);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(305, 185, 10, 30);
    
    //right ladder hugging wall
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(355, 160, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(355, 170, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(355, 180, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(355, 190, 25, 3);
    
    //two conjoined blocks in top right wall
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(370, 110, 30, 40);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(360, 70, 30, 40);
    
    //top right vertical bars
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(350, 40, 4, 30);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(360, 43, 4, 20);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(370, 45, 4, 15);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(380, 50, 4, 15);
    
    //green inverted L top right
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(345, 10, 40, 10);
    //top of L
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(380, 10, 10, 30);
    
    //upside down L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(100, 180, 30, 10);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(115, 180, 15, 30);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(105, 195, 5, 20);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(120, 220, 10, 20);
    
    //ladder to right of blue block
      fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(130, 270, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(130, 280, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(130, 290, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(130, 300, 25, 3);
    
    //middle boxes
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(180, 215, 4, 30);
     fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(190, 218, 4, 30);
     fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(200, 223, 4, 30);
     fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(210, 215, 4, 30);
    //second set
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(180, 264, 4, 30);
     fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(190, 263, 4, 30);
     fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(200, 258, 4, 30);
     fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(210, 262, 4, 30);
    
    //green squares near center
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(160, 250, 15, 16);
    
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(220, 270, 15, 16);
    
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(280, 280, 36, 36);
    
    //L by green square
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(220, 300, 50, 10);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(260, 280, 10, 20);
    
    //ladder above L
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(220, 220, 35, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(220, 240, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(220, 260, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(240, 280, 15, 3);
    
    //Large block connecting top
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(120, 10, 200, 70);
    
    //big left block below
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(150, 90, 40, 85);
    
    //big right block below
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(220, 80, 80, 40);
    
    //block below
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(240, 130, 30, 80);
    
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(275, 20, 30, 30);
    
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(70, 150, 27, 18);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(110, 150, 27, 18);
    
    fill(87, 142, 102);
    stroke(87, 142, 102);
    strokeWeight(1);
    rect(140, 180, 40, 20);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(140,210, 35, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(140,220, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(140,230, 25, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(140, 240, 15, 3);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(270, 220, 15, 55);
    
    fill(76, 87, 184);
    stroke(76, 87, 184);
    strokeWeight(1);
    rect(260, 230, 13, 30);
    
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(200,130, 35, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(220,140, 5, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(210,150, 19, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(205, 160, 15, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(200,170, 10, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(207,180, 16, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(200,190, 16, 3);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(200, 200, 27, 3);
    
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(310, 90, 4, 30);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(320, 87, 4, 25);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(330, 106, 4, 15);
    fill(221, 232, 187);
    stroke(221, 232, 187);
    strokeWeight(1);
    rect(340, 97, 4, 10);
    
    fill(76, 87, 184);
    stroke(76, 87, 184);
    strokeWeight(1);
    rect(280, 130, 60, 45);
    
    fill(0,0,0);
    stroke(0,0,0);
    strokeWeight(1);
    rect(130, 20, 60, 12);
    fill(0,0,0);
    stroke(0,0,0);
    strokeWeight(1);
    rect(210, 30, 15, 47);
  }