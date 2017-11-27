/**
 * p5js boilerplate
 * 
 * 
 */
 var boneco;
 var estrela = null;
 var invernoFundo;
 var floco1;
 var floco2;
 var floco3;
 var floco4;
 var musica;


 //carrega as imagens
 function preload(){
	 invernoFundo = loadImage ("invernoFundo.jpg");
	 boneco = loadImage ("boneco.png");
	 estrela = loadImage ("estrela.png");
	 floco1 = loadImage ("floco1.png");
	 floco2 = loadImage ("floco2.png");
	 floco3 = loadImage ("floco3.png");
	 floco4 = loadImage ("floco4.png");
	 
     musica = loadSound("musica.mp3");
     
 }

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	x = 10;
  	y = 60;
	createCanvas(900, 400);

	


	musica.play();
    

	
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(invernoFundo);
	image(estrela, x, y, 50, 50);
	image(boneco, 200, 150, 300, 270);
	image(estrela, estrelaPos.x, estrelaPos.y);
	// Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = altura;
  }
	
	



}

