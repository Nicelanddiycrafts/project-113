function preload(){

}

function setup(){
canvas = createCanvas(840,700);
canvas.position(110,300);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,200,200,450,450);
circle(30,30,60);
fill('lavender');
stroke('lavender');
circle(90,30,60);
circle(150,30,60);
circle(210,30,60);
circle(270,30,60);
circle(330,30,60);
circle(390,30,60);
circle(450,30,60);
circle(510,30,60);
circle(570,30,60);
circle(630,30,60);
circle(690,30,60);
circle(750,30,60);
circle(810,30,60);

circle(30,90,60);
circle(30,150,60);
circle(30,210,60);
circle(30,270,60);
circle(30,330,60);
circle(30,390,60);
circle(30,450,60);
circle(30,510,60);
circle(30,570,60);
circle(30,630,60);
circle(30,690,60);
circle(30,750,60);
circle(30,810,60);

circle(810,90,60);
circle(810,150,60);
circle(810,210,60);
circle(810,270,60);
circle(810,330,60);
circle(810,390,60);
circle(810,450,60);
circle(810,510,60);
circle(810,570,60);
circle(810,630,60);
circle(810,690,60);
circle(810,750,60);
circle(810,810,60);

}

function take_snapshot(){
save("selfie.png");
}