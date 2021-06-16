var n1,n2;
var b1,b2,b3,b4;

function setup() {
  
  createCanvas(400, 400);
  
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  b1 = createButton("ADD");
  b1.position(10, 200);
  b1.mousePressed(add);
  
  b2 = createButton("Multiply");
  b2.position(100, 200);
  b2.mousePressed(mul);
  
  b3 = createButton("SUBTRACT");
  b3.position(200,200);
  b3.mousePressed(sub);

  b4 = createButton("DIVISION");
  b4.position(300, 200);
  b4.mousePressed(div);

  
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200,10,200)
  text("Number 1",70,50)
  text("Number 2",270,50)
  

}

function add(){
  var m1 =parseInt(num1.value())
  var m2 = parseInt(num2.value())
  var sum = m1+m2
  console.log(sum)
}
function sub(){
  var m1 =parseInt(num1.value())
  var m2 = parseInt(num2.value())
  var sub = m1-m2
  console.log(sub)
}
function div(){
  var m1 =parseInt(num1.value())
  var m2 = parseInt(num2.value())
  var div = m1/m2
  console.log(div)
}
function mul(){
  var m1 =parseInt(num1.value())
  var m2 = parseInt(num2.value())
  var product = m1*m2
  console.log(product)
}