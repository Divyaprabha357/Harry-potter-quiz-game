 var score=0
function preload(){
  back=loadImage("Images/download.jpg")
}
function setup(){
  canvas=createCanvas(displayWidth-21, displayHeight-172);



  this.button=createButton("Play")
  this.input=createInput("Name")
  this.title= createElement("h1")



  question1= new Question1(); 
}
function draw(){
  background(back);

  textSize(24)



  this.title.html("Harry Potter Quiz");
  this.title.position(displayWidth/2-300, displayHeight/2-450)
  this.title.style('width', '600px');
  this.title.style('height', '50px');

  this.title.style("font-size", '70px');



  this.button.position(displayWidth/2, displayHeight/2-100);
  this.button.style('width', '100px');
  this.button.style('height', '50px');
  this.button.style("background", 'lightpink');
  this.button.style("font-size", '40px');

  this.input.position(displayWidth/2-20, displayHeight/2-30)
  this.input.style("font-size","35px")
  this.input.style("font-style", "Italic")
  this.input.style("width", "150px")
  this.input.style("height", "50px")


  this.button.mousePressed(()=>{
    this.button.hide();
    this.input.hide();

    question1.display();
  })

}