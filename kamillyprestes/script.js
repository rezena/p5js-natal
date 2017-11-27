/**
 * p5js boilerplate
 * 
 * 
 */
 var mus;
 var casaneve;
 var flocodeneve1, flocodeneve1Pos;
 var boneconeve;
 var estrela, estrelaPos;
 var estrelaPosFinal;
 var velec_estrela;
 var frame_rate = 60;
 var duracao_animacao = 1;
 var flocolista = [];
 var vento = 0;
 var posMouseAnterior = 0;
 var posMouseAtual = 0;
 var angulo = 0;

 function preload (){
 	//carrega as imagens
 	casaneve = loadImage("casaneve.jpg");
 	flocodeneve1 = loadImage("flocodeneve1.png");
 	boneconeve = loadImage("boneconeve.png");
 	estrela = loadImage("estrela.png");

 	//carrega a música
 	mus = loadSound("musica.mp3");
 }

// chamada no inicio do programa
function setup() {

	// cria o quadro, com dimensoes 900 x 400
	createCanvas(950, 650);

	//ativa a música
	mus.play();

	//carrega a posição da imagem no quadro
	estrelaPos = createVector(485, 50);
	estrelaPosFinal = createVector(-200, 250);
	flocodeneve1Pos = createVector(20, 0);
	flocodeneve2Pos = createVector(120, 0);
	flocodeneve3Pos = createVector(220, 0);
	flocodeneve4Pos = createVector(320, 0);
	
	//posição do x menos a posição do y dividido por o frame com a duração
	var velocidade_x = (estrelaPosFinal.x - estrelaPos.x) / (frame_rate * duracao_animacao);
	var velocidade_y = (estrelaPosFinal.y - estrelaPos.y) / (frame_rate * duracao_animacao);

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
	posMouseAtual = mouseX;

	if (posMouseAtual>posMouseAnterior) {
		vento = 1;
	} else if (posMouseAtual<posMouseAnterior) {
		vento = -1;
	} else {
		vento = 0;
	}


	// pinta o fundo de preto
	background(casaneve);

	//desenha as imagens nas posições dadas
	image(estrela, estrelaPos.x, estrelaPos.y, 100, 100);
	image(boneconeve, 100, 400, 200,200);
	flocodeneve1Pos.y++;

	for(i=0; i<flocolista.length;i++){
		push();
		translate(flocolista[i].x, flocolista[i].y);
		// rotate(angulo);
		rotate(flocolista[i].angulo);
		flocolista[i].angulo += flocolista[i].velocidade_angular;
		image(flocodeneve1, -25, -25, 50, 50);
		pop();
		flocolista[i].y += flocolista[i].velocidade;
		flocolista[i].x += vento * flocolista[i].velocidade_vento;
		
		if (flocolista[i].y > height) {
			flocolista[i].y = -50;
		}
	}

	// angulo += 0.02;

	if (flocodeneve1Pos.y > height) {
		flocodeneve1Pos.y = -100;
	}

	//velocidade da estrela em movimento
	if (estrelaPos.x > -1080) {
		estrelaPos.add(velec_estrela);
	} else {
		estrelaPos.x = 875;
		estrelaPos.y = -100;
	}
	posMouseAnterior = mouseX;
}

//função do mouse pressionado
function mousePressed() {
	estrelaPos.x = 875;
	estrelaPos.y = -100;
}

