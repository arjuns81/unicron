noseX=



function setup() {
 video=createCapture(VIDEO);
video.size(400,400);
canvas=createCanvas(500,500);
canvas.position(500,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
    background("pale yellow");
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftX=results[0].pose.leftWrist;
        rightX=results[0].pose.rightWrist;
        diffrence=floor(leftX,rightY)
    }
}