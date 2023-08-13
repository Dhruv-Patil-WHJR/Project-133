Status = "";
Bottle_image = "";
objects = [];

function preload()
{
    Bottle_image = loadImage("Bottle.jpeg");
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
    object_detector.Detect(Bottle_image,gotResults)
}

function gotResults(results,error)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(Bottle_image,0,0,640,350);
    if(Status != "")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
Ac