const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var time = 0;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 3 && hour < 5){
        bg = "sunrise1.png";
    }
    else if(hour >= 5 && hour < 6){
        bg = "sunrise2.png";
    }
    else if(hour >= 6 && hour < 7){
        bg = "sunrise3.png";
    }
    else if(hour >= 7 && hour < 10){
        bg = "sunrise4.png";
    }
    else if(hour >= 10 && hour < 14){
        bg = "sunrise5.png";
    }
    else if(hour >= 14 && hour < 15){
        bg = "sunrise6.png";
    }
    else if(hour >= 15 && hour < 16){
        bg = "sunset7.png";
    }
    else if(hour >= 16 && hour < 17){
        bg = "sunset8.png";
    }
    else if(hour >= 17 && hour < 18){
        bg = "sunset9.png";
    }
    else if(hour >= 18 && hour < 20){
        bg = "sunset10.png";
    }
    else if(hour >= 20 && hour == 0){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
