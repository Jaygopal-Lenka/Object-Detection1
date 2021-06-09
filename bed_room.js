img = "";
status = "";

function preload(){
  img = loadImage('bedroom.jpg');
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
    text("Bed", 45 , 75);
    noFill();
    stroke("#FF0000");
    rect(30 , 60 , 450 , 300);

    
}
