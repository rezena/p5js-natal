   /**
 * p5js boilerplate
 * 
 * 
 */

var img_arvore_natal, img_flocodeneve_1, img_flocodeneve_2, img_flocodeneve_3, img_flocodeneve_4, img_olaf_natal, img_estrela_cadente, img_estrela1;
var pos_arvore_natal;
var pos_flocodeneve_1;
var pos_flocodeneve_2;
var pos_flocodeneve_3;
var pos_flocodeneve_4;
var pos_olaf_natal;
var pos_estrela_cadente;
var pos_estrela1;
var pos_veloc_estrela_cadente;
var piX = 900;
var pfX = 0;
var pfY = 120;
var piY = 0;
var duracao_frames = 60; // frames
var peX = piX, 
	peY = piY,
	dX = 0;
	dY = 0;
	vX = 0;
	vY = 0;
var listaFlocos=[];

function preload() {
	img_arvore_natal = loadImage('arvore_natal.jpg');
	img_flocodeneve_1 = loadImage('flocodeneve_1.png');
	img_flocodeneve_2 = loadImage('flocodeneve_2.png');
	img_flocodeneve_3 = loadImage('flocodeneve_3.png');
	img_flocodeneve_4 = loadImage('flocodeneve_4.png');
	img_olaf_natal = loadImage('olaf_natal.png');
	img_estrela_cadente = loadImage('estrela_cadente.png');
	img_estrela1 = loadImage('estrela1.png');
	//diz o formato de arquivo de audio
	soundFormats('mp3');
	//carrega o arquivo de audio na variavel mySound
	mySound = loadSound ('musica.mp3');

}

//chamada no inicio do programa
function setup(){
	// cria o quadro, com dimensoes 1000 x 500
	createCanvas(1000, 500);
	pos_flocodeneve_1 = createVector(400, 0);
	pos_flocodeneve_2 = createVector(200, 0);
	pos_flocodeneve_3 = createVector(800, 0);
	pos_flocodeneve_4 = createVector(0, 0);
	pos_olaf_natal = createVector(50, 200);
	pos_estrela_cadente = createVector(470, 0);
	pos_estrela1 = createVector(650, 0);
	veloc_estrela_cadente = createVector((0 - 1022) / (60 * 1), (100 - (-100)) / (60 * 1));
	dX = pfX - piX;
	dY = pfY - piY;
	vX = dX / duracao_frames;
	vY = dY / duracao_frames;

}


// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de branco
	background(img_arvore_natal);
	image(img_flocodeneve_2, pos_flocodeneve_2.x, pos_flocodeneve_2.y, 70, 70);
	image(img_flocodeneve_3, pos_flocodeneve_3.x, pos_flocodeneve_3.y, 70, 70);
	image(img_flocodeneve_1, pos_flocodeneve_1.x, pos_flocodeneve_1.y, 70, 70);
	image(img_flocodeneve_4, pos_flocodeneve_4.x, pos_flocodeneve_4.y, 70, 70);
	image(img_olaf_natal, pos_olaf_natal.x, pos_olaf_natal.y, 200, 250);
	if (pos_estrela_cadente.x > -200) pos_estrela_cadente.add(veloc_estrela_cadente);
	image(img_estrela_cadente,peX, peY, 200, 100);
	image(img_estrela1, pos_estrela1.x, pos_estrela1.y, 50, 50);
	
	// faz os flocos de neve se moverem 
	pos_flocodeneve_1.y++;
	pos_flocodeneve_2.y++;
	pos_flocodeneve_3.y++;
	pos_flocodeneve_4.y++;

	if (pos_flocodeneve_1.y > height) {
		pos_flocodeneve_1.y = 10;
		pos_flocodeneve_2.y = 10;
		pos_flocodeneve_3.y = 10;
		pos_flocodeneve_4.y = 10;
	}

	// desloca a estrela cadente
	peX += vX;
	peY += vY;

	
}
function keyPressed() {
	if (keyCode == 32) {
		//troca o audio armazenado na variavel mySound com volume maximo
		mySound.setVolume(1.0);
		mySound.play();
	}
}

function mousePressed() {
	peX = piX;
	peY = piY;

}
