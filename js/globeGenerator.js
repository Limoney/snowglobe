class globeGenerator
{
  constructor()
  {
    this.globeObjects = [];
    this.snowFlakes = [];
    this.bg = "domek";
  }

  update()
  {
    this.addSnowFlakes();
    stroke(0);
    strokeWeight(6);
    fill(0);
    ellipse(width/2,height/2-width*0.05,width*0.9);
    strokeWeight(2);
    image(textures[this.bg],width/2,height/2-width*0.05,width*0.9,width*0.9);
    fill(139,69,19);
    rect(width/2,height*0.9,width*0.9,50);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Xmas is dead OwO",width/2,height*0.91);
    for(let obj of this.globeObjects)
    {
      push();
      translate(width/2,height/2);
      obj.update();
      obj.show();
      pop();
    }
    for(let i=this.snowFlakes.length-1;i>=0;i--)
    {
      this.snowFlakes[i].applyForce(gravity);
      this.snowFlakes[i].update();
      this.snowFlakes[i].show();
      if(this.checkSnowFlake(this.snowFlakes[i])) this.snowFlakes.splice(i,1);
    }
  }

  generate()
  {

    this.globeObjects = [];
    random(1,10)>5 ? (this.bg = "palec") : (this.bg="domek");
    if(this.bg=="palec") return;
    for(let i=0;i<3;i++)
    {
      let angle = floor(random(0,360));
      obj = new globeObject(cos(angle)*random(width*0.1,width*0.25),
                            sin(angle)*random(width*0.001,width*0.02),100,100);
      let key;
      while (true)
      {
        key = random(Object.keys(textures));
        if(key!="domek"&&key!="snow") break;
      }
      let index = textureData.data.findObjectWithAttribute("name",key);
      let imgData = textureData.data[index];
      obj.initAnimation(imgData.txWidth,imgData.txHeight,textures[key],imgData.framesPerRow);
      this.globeObjects.push(obj);
    }
  }
  addSnowFlakes()
  {
    for(let i=0;i<5;i++)
    {
      let angle = floor(random(0,360));
      let sf =new snowFlake( random(width/2-width*0.37,width/2+width*0.37),
                             random(height/2-width*0.05-width*0.28,height/2-width*0.05-width*0.00001));
      let sf2 =new snowFlake(random(width/2-width*0.30,width/2+width*0.30),
                             random(height/2-width*0.04-width*0.38,height/2-width*0.05-width*0.00001));
      if(random(1,10)>5)sf = sf2;
      let index = textureData.data.findObjectWithAttribute("name","snow");
      let imgData = textureData.data[index];
      sf.initAnimation(imgData.txWidth,imgData.txHeight,textures["snow"],imgData.framesPerRow);
      this.snowFlakes.push(sf);
    }
  }

  checkSnowFlake(sf)
  {
    if(dist(width/2,height/2-width*0.05,sf.position.x,sf.position.y)>width*0.36) return true;
    else return false;
  }
}
