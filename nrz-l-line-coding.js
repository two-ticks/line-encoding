let line_code = []
let  a0; 
let  a1;
let  a2;
let  a3;
let  a4;
let  a5;
let  a6;
let  a7;
let  a0value;
let  a1value;
let  a2value;
let  a3value;
let  a4value;
let  a5value;
let  a6value;
let  a7value;

function setup() {
  createCanvas(1300, 600);
  frameRate(40);
     
  a0 = new Clickable(width/2+250,height*0.1,40,40);
  a1 = new Clickable(width/2+300,height*0.1,40,40);
  a2 = new Clickable(width/2+350,height*0.1,40,40);
  a3 = new Clickable(width/2+400,height*0.1,40,40);
  a4 = new Clickable(width/2+450,height*0.1,40,40);
  a5 = new Clickable(width/2+500,height*0.1,40,40);
  a6 = new Clickable(width/2+550,height*0.1,40,40);
  a7 = new Clickable(width/2+600,height*0.1,40,40);
    
}

function draw() {
  background(50);
    
  graph();

  
stroke(0);
noFill();     
a0.show(); 
a1.show(); 
a2.show(); 
a3.show(); 
a4.show(); 
a5.show(); 
a6.show(); 
a7.show(); 

fill(255);

a0value = + a0.wasClicked;  
a1value = + a1.wasClicked; 
a2value = + a2.wasClicked; 
a3value = + a3.wasClicked; 
a4value = + a4.wasClicked; 
a5value = + a5.wasClicked; 
a6value = + a6.wasClicked; 
a7value = + a7.wasClicked; 
 
textSize(29);
text(a0value, width/2+250+10,0.1*height+30);  
text(a1value, width/2+300+10,0.1*height+30); 
text(a2value, width/2+350+10,0.1*height+30); 
text(a3value, width/2+400+10,0.1*height+30); 
text(a4value, width/2+450+10,0.1*height+30); 
text(a5value, width/2+500+10,0.1*height+30); 
text(a6value, width/2+550+10,0.1*height+30);
text(a7value, width/2+600+10,0.1*height+30);     
text("NRZ-L Encoding", width/2+300+10,0.2*height+30);
    
let y =  a7value*10000000+a6value*1000000+a5value*100000+a4value*10000+a3value*1000+a2value*100+a1value*10+a0value*1;   
nrzi(y);
plotter();
    
}

function mousePressed(){
    a0.mousePressed(mouseX,mouseY);
    a1.mousePressed(mouseX,mouseY);
    a2.mousePressed(mouseX,mouseY);
    a3.mousePressed(mouseX,mouseY);
    a4.mousePressed(mouseX,mouseY);
    a5.mousePressed(mouseX,mouseY);
    a6.mousePressed(mouseX,mouseY);
    a7.mousePressed(mouseX,mouseY);
    //console.log(a0.wasClicked);
    //console.log(a1.wasClicked);
}

function nrzi(x){
    let flag = 0;
    for(let i=0;i<=28;i=i+4){
        //console.log(x);
       
        if(x%10 == 0)
            {   
               line_code[i]   = -100;
               line_code[i+1] = -100;
               line_code[i+2] = -100;
               line_code[i+3] = -100; 
            }
        
        else if (x%10 == 1)
            {
               line_code[i]   =  100;
               line_code[i+1] =  100;
               line_code[i+2] =  100;
               line_code[i+3] =  100;  
            }
        
        x=parseInt(x/10);
        
                      }
}

function graph(){
    push();
    translate(-width/2+50,0);
    stroke(255);
    strokeWeight(1.5); line(0.5*width,height/2,1.154*width,height/2); 
    triangle(1.16*width,height/2,1.154*width,height/2 - 3,1.154*width,height/2 + 3);
    line(width/2,0.1*height,width/2,0.9*height); 
    triangle(0.5*width,0.09*height,0.5*width- 3,0.1*height ,0.5*width+ 3,0.1*height );
    triangle(0.5*width,0.91*height,0.5*width- 3,0.9*height ,0.5*width+ 3,0.9*height );
    pop();
}

function plotter(){
    push();
    translate(-width/2+50,0);
    stroke(230,50,20);
    strokeWeight(3);
    noFill();       
    beginShape(); 
    
    for (let j=0; j<=28; j=j+4)
        {       
     vertex(width/2+25*j,height/2+line_code[j]);
     vertex(width/2+25*(j+2),height/2+line_code[j+1]);
     vertex(width/2+25*(j+2),height/2+line_code[j+2]); 
     vertex(width/2+25*(j+4),height/2+line_code[j+3]); 
     push(); drawingContext.setLineDash([5,6,5,6,5,6,5,6]);
        stroke(255);
     line(width/2+25*(j+4),0.1*height,width/2+25*(j+4),0.9*height);
     pop(); 
              
        }
    endShape();
    pop();
}

