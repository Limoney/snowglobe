let canvas;
let startgen;
let downloadFile;
let generator;
let textures = [];
let gravity;
let obj;

function preload()
{
  textures["grinch"]=loadImage("graphics/grinch.png");
  textures["snowman"]=loadImage("graphics/snowman.png");
  textures["boxy"]=loadImage("graphics/boxy4.png");
  textures["birb"]=loadImage("graphics/birb.png");
  textures["snow"]=loadImage("graphics/snow.png");
  textures["domek"]=loadImage("graphics/domekv2.png");
  textures["palec"]=loadImage("graphics/menu4.png");
  textureData = loadJSON("graphics/textures.json");
}

function setup()
{
  angleMode(DEGREES)
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  textFont("pristina");
  generator = new globeGenerator();
  canvas = createCanvas(600,600);
  canvas.parent("canvas-wrapper");
  startgen = createButton("generate snow globe", "wow" );
  downloadFile = createButton("download this snow globe", "wow" );
  startgen.mousePressed(owo);
  downloadFile.mousePressed(downloadGlobe);
  startgen.parent("menu");
  downloadFile.parent("menu");
  gravity = createVector(0,1);
}

function downloadGlobe()
{
  var image = canvas.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  window.location.href=image;
}

function owo()
{
  generator.generate();
}

function draw()
{
  background("#2f4052");
  generator.update();

}

Array.prototype.findObjectWithAttribute = function(attr, value)
{
    for(var i = 0; i < this.length; i += 1)
    {
        if(this[i][attr] === value)
        {
            return i;
        }
    }
    return -1;
}
