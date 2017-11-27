/**
 * p5js boilerplate
 * 
 * 
 */
var img, img_fundo;
var imgestrela_real;
var imgneve1;
var imgneve2;
var imgneve3;
var imgneve4;
var imgpinheirinho;
var imgboneco_de_neve;
var pos_pinheirinho;
var pos_boneco_de_neve;
var pos_estrela_real;
var pos_estrela_real_final;
var velec_estrela;
var frame_rate;
var duracao_animacao = 1;
var frame_rate = 60;
var musica;
var flocolista = [];
var neve1, pos_neve1;
var posMouseAnterior = 0;
var posMouseAtual = 0;
var angulo = 0;

function preload() {
	imgestrela_real = loadImage('estrela-real.png');
	imgneve1 = loadImage('neve1.png');
	imgneve2 = loadImage('neve2.png');
	imgneve3 = loadImage('neve3.png');
	imgneve4 = loadImage('neve4.png');
	imgpinheirinho = loadImage('pinheirinho.png');
	imgboneco_de_neve = loadImage('boneco-de-neve.png');
	img_fundo = loadImage('fundo.jpg');
	soundFormats('mp3');
	musica = loadSound('musica');
}
// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(900, 400);

	pos_pinheirinho = createVector(77, 118);
	pos_boneco_de_neve = createVector(700,160);
	pos_neve1 = createVector(60, 100);
	pos_estrela_real = createVector(875, -100);
	pos_estrela_real_final = createVector(-200, 50);
    toca_musica();
	var velocidade_x = (pos_estrela_real_final.x - pos_estrela_real.x) / (frame_rate * duracao_animacao);
	var velocidade_y = (pos_estrela_real_final.y - pos_estrela_real.y) / (frame_rate * duracao_animacao);

	velec_estrela = createVector(velocidade_x, velocidade_y);

	var floco;

 	for (var i = 0; i < 200; i++) {
 		floco = createVector(random(0, width), random(0, height));
		floco.velocidade = random(1, 3);
		floco.angulo = 0;
		floco.velocidade_angular = random(0.005, 0.02);
		floco.velocidade_vento = random(0.5, 2);
 		flocolista.push(floco);
 	}

 	noCursor();
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(img_fundo);
	image(imgpinheirinho, 89, 118, 170, 250);
	image(imgboneco_de_neve, 699, 150, 178, 180);
	image(imgestrela_real, pos_estrela_real.x, pos_estrela_real.y, 180, 90);

	if (pos_estrela_real.x > -180) pos_estrela_real.add(velec_estrela);


	posMouseAtual = mouseX;

	if (posMouseAtual>posMouseAnterior) {
		vento = 1;
	} else if (posMouseAtual<posMouseAnterior) {
		vento = -1;
	} else {
		vento = 0;
	}

	pos_neve1.y++;

	for(i=0; i<flocolista.length;i++){
		push();
		translate(flocolista[i].x, flocolista[i].y);
		// rotate(angulo);
		rotate(flocolista[i].angulo);
		flocolista[i].angulo += flocolista[i].velocidade_angular;
		image(imgneve1, -25, -25, 50, 50);
		pop();
		flocolista[i].y += flocolista[i].velocidade;
		flocolista[i].x += vento * flocolista[i].velocidade_vento;

		if (flocolista[i].x > width + 50) flocolista[i].x = -50;
		if (flocolista[i].x < -50) flocolista[i].x = width + 50;
		
		if (flocolista[i].y > height) {
			flocolista[i].y = -50;
		}
	}

	// angulo += 0.02;

	if (pos_neve1.y > height) {
		pos_neve1.y = -100;
	}

}

function mousePressed() {
	pos_estrela_real.x = 875;
	pos_estrela_real.y = -100;
}

function toca_musica( ) {
	// volume da musica
	musica.setVolume(1.0);
	// quando a musica for terminada
	// tocara novamente
	musica.loop();
}


