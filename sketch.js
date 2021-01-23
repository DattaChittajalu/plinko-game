var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  //ARRAYS FOR particles,plinkos,division
  var particles = [];
  var plinkos = [];
  var divisions =[];

  var divisionHeight=300;
  var score =0;
  
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  //for creating the ground
  ground = new Ground(400,800,800,20);

  //for creating division 
  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, 650, 10, 300));
  }

  //FIRST ROW OF PLINKO
  for (var j = 75; j <=width; j=j+50) 
  {
       plinkos.push(new Plinko(j,75));
  }

  //CREATE SECOND ROW OF PLINKO- I MODIEFIED var j = 50 AND Plinko(j,175) SO THAT IT APPEARS IN NEXT ROW 
  for (var j = 50; j <=width; j=j+50) 
  {
       plinkos.push(new Plinko(j,175));
  }

  //CREATE THIRD ROW OF PLINKO
    


    //CREATE FORTH ROW OF PLINKO

    
    
   

}
 
function draw() {
  background("black");
  textSize(20)

  Engine.update(engine);
  ground.display();
  
  //FOR DISPLAYING THE DIVISIONS
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  //for DISPLAYING THE PLINKOS 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();     
  }

  //for creating the particles
 
  
  //for displaying the particles
  
   
}