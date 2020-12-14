class Mango{
constructor(x,y,r)
{
    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.body=bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body)
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("Plucking mangoes/mango.png")

   
}
}