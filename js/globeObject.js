class globeObject
{
  constructor(x,y,w,h)
  {
    this.animation = null;
    this.size = createVector(w,h);
    this.position = createVector(x,y);
  }

  initAnimation(frameWidth,frameHeight,texture,framesPerRow)
  {
    this.animation= new Anim(frameWidth,frameHeight,texture);
    this.animation.setFramesPerRow(framesPerRow);
    this.animation.setDrawSize(this.size);
  }

  update()
  {
    this.animation.update(this.position);
  }

  show()
  {
    this.animation.show();
  }
}
