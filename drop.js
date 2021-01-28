class Drop
{
	constructor(x,y,r)
	{
		var options={
		//	isStatic:false,
			restitution:0.1,
			friction:0.001,
		//	density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=5
		
		this.body=Bodies.circle(this.x, this.y, 5, options)
		World.add(world, this.body);
    
    
    }
    update(){
        if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,700)})
        }
    }
	display()
	{
			
		//	var paperpos=this.body.position;		

		//	push()
		//	translate(paperpos.x, paperpos.y);
			ellipseMode(CENTER)
			//strokeWeight(4);
			fill("blue")
		
            ellipse( this.body.position.x,this.body.position.y,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
		//	pop()
			
	}

}