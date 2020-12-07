class Box{
    constructor(x,y,w,h){
      var ground_prop={isStatic : true,friction:1}
      this.width=w;
      this.height=h;
      this.body = Bodies.rectangle(x,y,w,h,ground_prop);
      World.add(world,this.body);
  
  
    }
  
    display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("black");
      rect(pos.x,pos.y,this.width,this.height);
     
  
    }
  }