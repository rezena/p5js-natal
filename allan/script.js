/**
 * p5js boilerplate
 * 
 * 
 */
var img_ceu;
var img_neve;
var img_olaf;
var img_arvore;
var img_estrela;
var img_floco1;
var img_floco2;
var img_floco3;
var img_floco4;
var pos_floco1,pos_floco2,pos_floco3,pos_floco4 ,pos_floco5,pos_floco6,pos_floco7,pos_floco8,pos_floco9;
var piX = 900;
var pfX = 0;
var pfY =120;
var piY= 0 ;
var duracao_frames = 60; // frames
var peX = piX,
	peY = piY,
	dX = 0,
	dY = 0,
	vX = 0,
	vY = 0;
var listaFlocos=[];

 


// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(900, 400);
	mySound.loop();
	dX = pfX - piX; // = 0-900 = -900;
	dY = pfY - piY; // = 120-0 = 120;
	vX = dX/duracao_frames; // = -15;
	vY = dY/duracao_frames; // = 2;
	pos_floco1 = createVector(100,0);
	pos_floco2 = createVector(200,0);
	pos_floco3 = createVector(300,0);
	pos_floco4 = createVector(400,0);
	pos_floco5 = createVector(500,0);
	pos_floco6 = createVector(600,0);
	pos_floco7 = createVector(700,0);
	pos_floco8 = createVector(800,0);
	pos_floco9 = createVector(900,0);


	var tipo;
	for (var i = 0; i < 200; i++) {
		tipo = floor(random(0, 4));
		listaFlocos.push(cria_floco(random(0, width), random(0, height), random(1, 10) / 5, tipo));
	}

	listaFlocos.push(cria_floco(0, 10, 2, 0));
	listaFlocos.push(cria_floco(45, 10, 1, 1));
	listaFlocos.push(cria_floco(90, 10, 2, 2));
	listaFlocos.push(cria_floco(135, 10, 3, 3));
	listaFlocos.push(cria_floco(180, 10, 2, 0));

}

function preload() {

	img_ceu = loadImage('ceu.jpg');
	img_neve = loadImage('neve.jpg');
	soundFormats('mp3');
	mySound = loadSound('guns.mp3');
	img_olaf = loadImage('olafgotico.png');
	img_arvore = loadImage('arvore.png');
	img_estrela = loadImage('estrela.png');
	img_floco1 = loadImage('floco1.png');
	img_floco2 = loadImage('floco2.png');
	img_floco3 = loadImage('floco3.png');
	img_floco4 = loadImage('floco4.png');
	img_floco5 = loadImage('floco1.png')


}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(0, 0, 0);
	image(img_ceu,0,0,900,400);
	image(img_floco1,pos_floco1.x,0,50,50);
	image(img_floco2,50,0,25,25);
	image(img_floco3,100,0,25,25);
	image(img_floco4,150,0,25,25);
	image(img_floco5,200,0,25,25);
	image(img_floco1,250,0,25,25);
	image(img_floco2,300,0,50,50);
	image(img_floco3,350,0,50,50);
	image(img_floco4,400,0,50,50);

	
	image(img_neve,0,300,900,100);
	image(img_olaf,600,210,287,150);
	image(img_arvore,100,100,300,300);
	image(img_estrela,peX,peY,150,150);
	peX = peX + vX;
	peY = peY + vY;

	for (var i = 0; i < listaFlocos.length; i++) {
		desenha_floco(listaFlocos[i]);
		atualiza_posicao_floco(listaFlocos[i]);
	}


}

function mousePressed() {
	peX = piX;
	peY = piY;

	// listaFlocos.push(cria_floco(mouseX, mouseY, random(1, 10) / 5, 0));
}
function cria_floco(x,y,v,tipo){
	return{
		x:x,
		y:y,
		v:v,
		tipo: tipo
	}
}

function desenha_floco(floco) {
	var img = img_floco1;
	switch (floco.tipo) {
		case 0: 
			img = img_floco1;
			break;
		case 1: 
			img = img_floco2;
			break;
		case 2: 
			img = img_floco3;
			break;
		case 3: 
			img = img_floco4;
			break;

	}
	image(img,floco.x,floco.y,25,25);
}

function atualiza_posicao_floco(floco) {
	floco.y += floco.v;

	if (floco.y > height) floco.y = -10;
}