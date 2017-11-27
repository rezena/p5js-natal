
	var cenario;
	var estrela;
	var boneco;
	var arvore;
	var floco1;
	var floco2;
	var floco3;
	var floco4;
	var posestrela;
	var mover = false;
	var musica;
	var lista1 = [];
	var lista2 = [];
	var lista3 = [];
	var lista4 = [];
	var angulo;

function preload() {

	cenario = loadImage('cenario.png');
	estrela = loadImage('estrela.png');
	boneco = loadImage('boneco.png');
	arvore = loadImage('arvore.png');
	floco1 = loadImage('floco1.png');
	floco2 = loadImage('floco2.png');
	floco3 = loadImage('floco3.png');
	floco4 = loadImage('floco4.png');

	soundFormats('mp3');

	musica = loadSound('musica.mp3');

}

function setup() {
	createCanvas(1200, 700);

	posestrela = createVector(1400, 1);

	for (var i = 0; i < 20; i++) { 
		lista1.push(cria_floco1(random(0, width), random(0, height), (random(1, 10) / 5)));
	}

	for (var i = 0; i < 20; i++) { 
		lista2.push(cria_floco2(random(0, width), random(0, height), (random(1, 10) / 5)));
	}

	for (var i = 0; i < 20; i++) { 
		lista3.push(cria_floco3(random(0, width), random(0, height), (random(1, 10) / 5)));
	}

	for (var i = 0; i < 20; i++) { 
		lista4.push(cria_floco4(random(0, width), random(0, height), (random(1, 10) / 5)));
	}


	tocaMusica();
}


function draw() {
	background(cenario);

	image(boneco, 200, 420, 150, 200);
	image(arvore, 700, 150, 400, 500);
	image(estrela, posestrela.x, posestrela.y, 200, 150);

	if(posestrela.x < -200) {
		posestrela.x = 1400;
		posestrela.y = 5;
		mover = false;
	}

	if(mover) {
		posestrela.x -= 20;
		posestrela.y += 1;
	}

	for (var i = 0; i < lista1.length; i++) {
		desenha_floco1(lista1[i]);
		atualiza_posicao_floco1(lista1[i]);
	}

	for (var i = 0; i < lista2.length; i++) {
		desenha_floco2(lista2[i]);
		atualiza_posicao_floco2(lista2[i]);
	}

	for (var i = 0; i < lista3.length; i++) {
		desenha_floco3(lista3[i]);
		atualiza_posicao_floco3(lista3[i]);
	}

	for (var i = 0; i < lista4.length; i++) {
		desenha_floco4(lista4[i]);
		atualiza_posicao_floco4(lista4[i]);
	}
}

function tocaMusica() {

	musica.setVolume(1.0);
	musica.loop();

}

function mouseClicked() {
	mover = true;
}	

function cria_floco1(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}

function cria_floco2(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}

function cria_floco3(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}

function cria_floco4(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}

function desenha_floco1(floco) {

	image(floco1, floco.x, floco.y, 50, 50);

}

function desenha_floco2(floco) {

	image(floco2, floco.x, floco.y, 50, 50);

}

function desenha_floco3(floco) {

	image(floco3, floco.x, floco.y, 50, 50);

}

function desenha_floco4(floco) {

	image(floco4, floco.x, floco.y, 50, 50);

}


function atualiza_posicao_floco1(floco) {
	floco.y += floco.v;
	if (floco.y > height) floco.y = -10;
}

function atualiza_posicao_floco2(floco) {
	floco.y += floco.v;
	if (floco.y > height) floco.y = -10;
}

function atualiza_posicao_floco3(floco) {
	floco.y += floco.v;
	if (floco.y > height) floco.y = -10;
}

function atualiza_posicao_floco4(floco) {
	floco.y += floco.v;
	if (floco.y > height) floco.y = -10;
}
