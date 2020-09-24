class Clickable{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.wasClicked = false;
    }
    
    show(){
        rect(this.x,this.y,this.w,this.h);
    }
    
    mousePressed(mx, my){ 
        if(mx > this.x && mx <this.x+this.w && my > this.y && my < this.y+this.h)
        {
            if(this.wasClicked == true)
                {
                   this.wasClicked = false; 
                }
            else
                {
                   this.wasClicked = true;
                }
        }
    }
}