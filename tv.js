img = "";
status = "";

function preload(){
  img = loadImage('AC AND TV.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detected Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  else {
  console.log(results);
  objects = results;
  }
}


function draw() {
    image(img , 0 , 0 , 640 ,380);
    fill("FF0000");
    text("TV", 260, 150);
    text("AC", 265, 35);
    text("Loud Speaker", 450, 150);
    text("Photo", 110 , 70 )
    noFill();
    stroke("#FF0000");
    rect(250 , 125 , 180 , 170);
    rect(255 , 15 , 180 , 115);
    rect(440 , 130 , 90 , 210);
    rect(100 , 50 , 80 , 120);

}
