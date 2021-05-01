class Chain 
{
    constructor(body1, body2)
    {
        var options = 
    {
        bodyA: body1, 
        bodyB: body2,
        stiffness: 0.3,
        length: 20,
    } 
    this.chain = Matter.Constraint.create(options); 
    World.add(world, this.chain);
    }
    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(6);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}