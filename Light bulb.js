Status = "";
Light_bulb_image = "";

function preload()
{
    Light_bulb_image = loadImage("Ac.jpeg");
}

function setup()
{
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
    object_detector.Detect(Ac_image,gotResults)
}

function gotResults(results,error)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}

function draw()
{
    image(Ac_image,0,0,640,350);
}
