img = "";
status = "";

function preload(){
  img = loadImage('waterbottle2.jpg');
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
    text("Bottle", 210, 40);
    noFill();
    stroke("#FF0000");
    rect(200 , 20 , 180 , 310);
}
