difference = 0;
leftWristX = 0;
rightWristX = 0;


function setup(){
 video = createCapture(VIDEO);
 video.size(550,500);

 canvas = createCanvas(550,550);
 canvas.position(560,150);

 poseNet = ml5.poseNet(video , modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initiiallized!")
}

function draw(){
    background("#808080");
    fill("#0000FF");
    textSize(difference);
    text('Sathwik',50,400)
    document.getElementById("font").innerHTML="Font size of the text will be +"+difference+"px";
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);

        console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX+"difference ="+difference);
    }
}
