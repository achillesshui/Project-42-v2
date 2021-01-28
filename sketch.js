const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var manIMG;
var ground;
var groundOptions;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;
var umbrella;
var thunderCreatedFrame = 0;
var thunder;

function preload(){
    //manIMG = loadImage("walking_1.png");
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200, 600);
    umbrella.scale = 1.0;

    if(frameCount%100 == 0) {
        for(var i = 0; i<maxDrops; i++) {
            drops.push(new Drop(random(0,400), 0))
        }
    }
}

function draw(){
    background(0);

    Engine.update(engine);

    var rand = Math.round(random(1,4));
    if(frameCount%80 == 0) {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.5,1);
        
        if(thunderCreatedFrame + 10 === frameCount && thunder) {
            thunder.destroy();
        }
    }

    umbrella.display();
    
    for(var i = 0; i<maxDrops; i++) {
        drops[i].display();
        drops[i].resetDrop();
    }

    drawSprites();
}   

