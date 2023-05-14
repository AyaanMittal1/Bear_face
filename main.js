bear_X=0;
bear_Y=0;
bear_l=0;
bear_r=0;
bear_w=0;
h=0;
function preload(){
    bear_face=loadImage("bear_face.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(485,200);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose_Net=ml5.poseNet(video,model_ready);
    pose_Net.on('pose',got_values);
}
function got_values(results){
    if(results.length > 0){
        console.log(results);
        bear_X=results[0].pose.nose.x;
        bear_Y=results[0].pose.nose.y;
        bear_r=results[0].pose.rightEar.x;
        bear_l=results[0].pose.leftEar.x;
        console.log("Left ear ="+bear_l);
        console.log("Right Ear ="+bear_r);
        console.log("Nose X value="+results[0].pose.nose.x);
        console.log("Nose Y value="+results[0].pose.nose.y);
    }
}
function model_ready(){
    console.log("model is ready");
}
function draw(){
    bear_w=bear_r-bear_l;
    image(video,0,0,300,300);
    fill("green");
    stroke("green");
    // image(bear_face,bear_X+100,bear_Y-250,bear_r-bear_l*1.5,450);
    image(bear_face,bear_X-100,bear_Y-250,200,450);
    triangle(10,100,60,100,35,10)
    triangle(10,150,60,150,35,60)
    triangle(10,200,60,200,35,110)
    fill("brown");
    stroke("brown");
    rect(25,200,20,100)
    fill("green");
    stroke("green");
    triangle(240,100,290,100,265,10)
    triangle(240,150,290,150,265,60)
    triangle(240,200,290,200,265,110)
    fill("brown");
    stroke("brown");
    rect(255,200,20,100)
}
function Snap(){
    save("bear.png");
}