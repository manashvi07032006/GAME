class Bom extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.trajectory =[];
  }

  display() {
    super.display();
    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
    /*if(this.body.velocity.x > 10 && this.body.position.x > 200){
      
    }*/
  }
}