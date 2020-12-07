class Paper {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.width=10;
        this.height=10;
        
        this.body = Bodies.circle(this.x, this.y, this.r / 2, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;

        push();
        
        
        strokeWeight(3);
        fill(255, 0, 255);
        //ellipse(pos.x,pos.y, this.r, this.r);
        image(this.image,pos.x,pos.y-30,50,50);

        pop();
    }
}
