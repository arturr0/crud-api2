function setup() {

  let cnv = createCanvas(800, 580);
  cnv.parent("canvas");  
    background(0);
  }
  
function draw() {
    
  background(0);
  fill(255);
  
  if (typeof PRODUCTS !== 'undefined')
    if (PRODUCTS.length !== 0)
    for (let i = 0; i < PRODUCTS.length; i++)   
    {
      let posx = map(i,0,PRODUCTS.length,10,800);
      
      rect(posx,500,20,-5*PRODUCTS[i].quantity);
      textSize(18);
      text("ID:" + PRODUCTS[i].id,posx,520);
      text(PRODUCTS[i].name,posx,545);
      text(PRODUCTS[i].quantity,posx,565);
    }
  
  }
  