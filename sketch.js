
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var ground;
 var divisions = [];
  var plinko = [];
  var particles = [];

 var  divisionHeight = 300;
 
  var score = 0;
 var particle;
 var play = 1;
 var end = 0;
 var gameState = "start";
 var count = 0;

function preload()
{
	
}

function setup() {
   
    
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(600,height,1200,20);
	


  for (var k = 0; k <=width; k = k + 80) {

     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); }


 
	for (var i = 40;i <=width; i=i+50)
	{
       plinko.push(new Plinko(i,75))
	    
	}
 
   for (var i = 20;i <=width; i=i+50)
	{
       plinko.push(new Plinko(i,150))
	    
	}
 
   for (var i = 60;i <=width; i=i+50)
	{
       plinko.push(new Plinko(i,220))
	    
	}
 
   for (var i = 40;i <=width; i=i+50)
	{
       plinko.push(new Plinko(i,300))
	    
	}
 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text("score"+score,200,200)
  text("100",200,430)
  text("100",260,430)
  text("100",350,430)

  
  




  

  ground.display();


  for (var i = 0; i < plinko.length; i++) { plinko[i].display(); }



   if(frameCount%60===0){
   
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))



   }
    
   for (var j = 0; j < particles.length; j++) {
      particles[j].display();

   }
    for (var k = 0; k < divisions.length; k++) { 
      divisions[k].display(); 
   }

 
 if(particle != null){

  particle.display();

  if(particle.body.position.y>760)
  {
       if(particle.body.position.x<300)
       {
         score = score+100;
         particle = null;
         if ( count>= 5) gameState ="end";   

       }
       else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
  }

 }





   }



 function mousePressed(){

 if(gameState!=="end")
  {

  count++;
  particle = new Particle(mouseX,10,10,10);

  }
 
 }





