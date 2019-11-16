class snowFlake
{
  constructor(x,y)
  {
    this.position = createVector(x,y)
    this.vel = createVector();
    this.acc = createVector();
    this.animation = null;
    this.size = createVector(random(6,20),random(6,20));
  }

  applyForce(force)
  {
    this.acc.add(force);
  }

  update()
  {
    let mouse = createVector(mouseX,mouseY);
    let sth = mouse.sub(this.position).normalize();
    if(dist(mouse.x,mouse.y,this.position.x,this.position.y)<400)this.applyForce(sth);
    this.vel.add(this.acc);
    this.position.add(this.vel);
    this.acc.mult(0);
    this.animation.update(this.position);
  }

  show()
  {
    this.animation.show();
  }

  initAnimation(frameWidth,frameHeight,texture,framesPerRow)
  {
    this.animation= new Anim(frameWidth,frameHeight,texture);
    this.animation.setFramesPerRow(framesPerRow);
    this.animation.setDrawSize(this.size);
  }
}
