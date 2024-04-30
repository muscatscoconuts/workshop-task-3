



let imgs = [];
let Image001, Image007, Image031;
let img; 
function preload () {
  img = loadImage("images/Image035.jpg");
  Image001 = loadImage ('images/Image001.jpg');
  Image007 = loadImage('images/Image007.JPG');
  Image031 = loadImage ('images/Image031.jpg');
  Image035 = loadImage ('images/Image035.jpg');
}

function setup() {
  createCanvas(600, 600);
  frameRate(1);

  imgs.push (Image001);
  imgs.push (Image007);
  imgs.push (Image031);
  imgs.push (Image035);


}

function draw() {
  background(220);  
  
    // let x = random(img.width);
    // let y = random(img.height);
    // let c = img.get(int(x), int(y));
    // fill(c);
    // noStroke();
    // rect(x,y,20,20);
  
  let r = random(imgs);
  image(r,0,0);

  filter(BLUR,random(0,6));
  tint (random(0,255),random(0,255),random(0,255),random(0,600));
  image(imgs[0,2],random(0,400),random(0,400));
  image(imgs[0,1],random(0,400),random(0,400));
  image(imgs[0,0],random(0,400),random(0,400));
  
  

}


