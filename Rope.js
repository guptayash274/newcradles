class Rope {

    constructor(body1,body2,X,Y) {
      this.X = X;
      this.Y = Y ; 
      
        var options = {
        bodyA:body1,
        bodyB:body2 ,
        pointB:{x:this.X, y:this.Y} ,
       }

       this.Rope = Constraint.create(options);
       World.add(world,this.Rope);

    }

    display () {

        var pointA= this.Rope.bodyA.position;
        var pointB= this.Rope.bodyB.position;
        strokeWeight (1)
        var line1X = pointA.x
        var line1Y = pointA.y
        var line2X = pointB.x+this.offsetX
        var line2Y = pointB.y+this.offsetY
        line (line1X,line1Y,line2X,line2Y);
        fill("black");

    }
}