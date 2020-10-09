class Particle {

  constructor (x, y, rocket, heartRocket, fx, fy) {
    var minBoost = -11;
    var maxBoost = -13.5;
    this.lifespan = 255;

    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    this.rocket = rocket;
    this.heartRocket = heartRocket;
    this.fx = fx;
    this.fy = fy;
    this.rgb = [];

    // if(!this.rocket) {
    //   this.rgb[0] = random(75, 255);
    //   this.rgb[1] = random(75, 255);
    //   this.rgb[2] = random(75, 255);
    // }
    
    if (this.rocket) {
      this.vel = createVector(0, random(-1.7, -3.2));
      this.acc = createVector(0, random(minBoost, maxBoost));
    } else if (this.heartRocket) {
      this.vel = createVector(0,0);
      this.vel.mult(random(7, 20));
      this.rgb[0] = random(137, 175);
      this.rgb[1] = random(48, 80);
      this.rgb[2] = random(35, 74);
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(7, 20));
      this.rgb[0] = random(75, 255);
      this.rgb[1] = random(75, 255);
      this.rgb[2] = random(75, 255);
    }
  }

  isSpent () {
    return (this.lifespan <= 0);
  }

  applyForce (force) {
    this.acc.add(force);
  }

  update () {
    if (!this.rocket) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show () {
    if (!this.rocket) {
      strokeWeight(3);
      stroke(this.rgb[0], this.rgb[1], this.rgb[2], this.lifespan);
    } else {
      strokeWeight(2);
      stroke(255, random(153, 255), 0);
    }
    if (this.heartRocket) {
      push();
      translate(this.fx, this.fy);
      strokeWeight(1);
      point(this.pos.x, this.pos.y);
      pop();
    } else {
      point(this.pos.x, this.pos.y);
    }
  }

}