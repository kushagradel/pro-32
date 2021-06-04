const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
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
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;//"datetime":"2021-05-27T18:53:04

    // write code slice the datetime
    var time=datetime.slice(11,13);
    console.log(time);


    // add conditions to change the background images from sunrise to sunset
    if(time>=04 && time<=06){
        bg="sunrise1.png";}
        
        else if(time>=06 && time<=08){
        bg="sunrise2.png";}
        else if(time>=08 && time<=10){
        bg="sunrise3.png";}
        else if(time>=10 && time<=12){
        bg="sunrise4.png"}
        else if(time>=12 && time<=14){
        bg="sunrise5.png";}
        else if(time>=14 && time<=16){
        bg="sunrise6.png";}else if(time>=16 && time<=18){
        bg="sunset7.png";}
        else if(time>=18 && time<=20){
        bg="sunset8.png";}
        else if(time>=20 && time<=22){
        bg="sunset9.png";}
        else if(time>=22 && time<=0){
        bg="sunset10.png"; }
        else if(time>=0 && time<=2){
        bg="sunset11.png" }
        else{
        bg="sunset12.png";
    }


    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}     getBackgroundImg();

function setup(){
    var canvas = createCanvas(1200,700);
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
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;//"datetime":"2021-06-04T14:39:33


    // write code slice the datetime
    var time=datetime.slice(11,13);
    console.log(time);



    // add conditions to change the background images from sunrise to sunset
    if(time>=04 && time<=06){
        bg="sunrise1.png";

    }else if(time>=06 && time<=08){
        bg="sunrise2.png";

    }else if(time>=08 && time<=10){
        bg="sunrise3.png";

    }else if(time>=10 && time<=12){
        bg="sunrise4.png"

    }else if(time>=12 && time<=14){
        bg="sunrise5.png";

    }else if(time>=14 && time<=16){
        bg="sunrise6.png";

    }else if(time>=16 && time<=18){
        bg="sunset7.png";

    }else if(time>=18 && time<=20){
        bg="sunset8.png";

    }else if(time>=20 && time<=22){
        bg="sunset9.png";

    }else if(time>=22 && time<=0){
        bg="sunset10.png";

    }else if(time>=0 && time<=2){
        bg="sunset11.png"
    }else{
        bg="sunset12.png";
    }


    //load the image in backgroundImg variable here
    backgroundimg=loadImage(bg);

}
