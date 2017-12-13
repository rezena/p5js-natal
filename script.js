/**
 * p5js boilerplate
 * 
 * 
 */
	var img_estrada;
	var img_olaf;
	var img_arvoreM;
	var img_flocoo1;
	var img_flocoo2;
	var img_flocoo3;
	var img_flocoo4;
	var img_flocoo5;
	var img_flocoo6;
	var img_flocoo7;
	var img_flocoo8;
	var img_flocoo9;
	var img_flocoo10;
	var mySound;


function preload() {

	img_estrada = loadImage('estradaa.jpg');
	soundFormats('mp3');
	mySound = loadSound('mysound.mp3');
	img_olaf = loadImage('olaf.png');
	img_arvoreM = loadImage('arvoreM.png');
	img_flocoo1 = loadImage('flocoo1.png');
	img_flocoo2 = loadImage('flocoo2.png');
	img_flocoo3 = loadImage('flocoo3.png');
	img_flocoo4 = loadImage('flocoo4.png');
	img_flocoo5 = loadImage('flocoo5.png');
	img_flocoo6 = loadImage('flocoo6.png');
	img_flocoo7 = loadImage('flocoo7.png');
	img_flocoo8 = loadImage('flocoo8.png');
	img_flocoo9 = loadImage('flocoo9.png');
	img_flocoo10 = loadImage('flocoo10.png');
	floco1 = createVector(50,60);
	floco2 = createVector(100,70);
	floco3 = createVector(200,80);
	floco4 = createVector(300,90);
	floco5 = createVector(100,45);
	floco6 = createVector(500,110);
	floco7 = createVector(610,130);
	floco8 = createVector(710,200);
	floco9 = createVector(740,300);
	floco10 = createVector(800,250);
	floco1_1 = createVector(80,90);
	floco2_1 = createVector(95,100);
	floco3_1 = createVector(150,150);
	floco4_1 = createVector(487,338);
	floco5_1 = createVector(341,330);
	floco6_1 = createVector(199,293);
	floco7_1 = createVector(598,196);
	floco8_1 = createVector(268,115);
	floco9_1 = createVector(656,449);
	floco10_1 = createVector(157,465);
	floco1_2 = createVector(339,474);
	floco2_2 = createVector(618,474);
	floco3_2 = createVector(844,514);
	floco4_2 = createVector(387,517);
	



}
// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(1000, 550);
	mySound.loop();
}



// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(img_estrada);
	image(img_arvoreM,35,20,300,300);
	image(img_olaf,600,150,200,150);
	image(img_flocoo1,50,floco1.y,30,30);
	image(img_flocoo2,100,floco2.y,30,30);
	image(img_flocoo3,200,floco3.y,30,30);
	image(img_flocoo4,300,floco4.y,30,30);
	image(img_flocoo5,100,floco5.y,30,30);
	image(img_flocoo6,500,floco6.y,30,30);
	image(img_flocoo7,610,floco7.y,30,30);
	image(img_flocoo8,710,floco8.y,30,30);
	image(img_flocoo9,740,floco9.y,30,30);
	image(img_flocoo10,800,floco10.y,30,30);
	image(img_flocoo1,80,floco1_1.y,30,30);
	image(img_flocoo2,95,floco2_1.y,30,30);
	image(img_flocoo3,150,floco3_1.y,30,30);
	image(img_flocoo4,487,floco4_1.y,30,30);
	image(img_flocoo5,341,floco5_1.y,30,30);
	image(img_flocoo6,199,floco6_1.y,30,30);
	image(img_flocoo7,598,floco7_1.y,30,30);
	image(img_flocoo8,268,floco8_1.y,30,30);
	image(img_flocoo9,656,floco9_1.y,30,30);
	image(img_flocoo10,157,floco10_1.y,30,30);
	image(img_flocoo1,339,floco1_2.y,30,30);
	image(img_flocoo2,618,floco2_2.y,30,30);
	image(img_flocoo3,844,floco3_2.y,30,30);
	image(img_flocoo4,387,floco4_2.y,30,30);

	floco1.y ++;
	floco2.y+=2;
	floco3.y+=3;
	floco4.y++;
	floco5.y+=2;
	floco6.y+=3;
	floco7.y++;
	floco8.y+=2;
	floco9.y+=3;
	floco10.y++;
	floco1_1.y+=2;
	floco2_1.y+=3;
	floco3_1.y++;
	floco4_1.y+=2;
	floco5_1.y+=3;
	floco6_1.y++;
	floco7_1.y+=2;
	floco8_1.y+=3;
	floco9_1.y++;
	floco10_1.y+=2;
	floco1_2.y+=3;
	floco2_2.y++;
	floco3_2.y+=2;
	floco4_2.y+=3;

}
