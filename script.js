

function setup () {
  image (img, 0, 0);
}

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = SPELEN;

const KEY_LEFT = 65;     //A
const KEY_UP = 87;       //W
const KEY_DOWN = 83;     //S
const KEY_RIGHT = 68;    //D

var spelerX = 200        // x-positie van speler
var spelerY = 360        // y-positie van speler

var vijandX1 = 240;
var vijandX1 = 300;
var img3;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () { 
  // speler
 if (keyIsDown(KEY_LEFT)) {  //A
     spelerX = spelerX -6;
  }
  if (keyIsDown(KEY_UP)) {  //W
     spelerY = spelerY -6;
  }
   if (keyIsDown(KEY_DOWN)) {  //S
     spelerY = spelerY +6;
  }
   if (keyIsDown(KEY_RIGHT)) {  //D
     spelerX = spelerX +6;
  }
  
  if (spelerX < 50) {
  spelerX = 50 ;
 }
  if (spelerX > 1230) {
  spelerX = 1230 ;
 }
  if (spelerY < 50) {
  spelerY = 50;
 }
  if (spelerY > 680) {
  spelerY = 680 ;
 } 
  

  // vijand
vijandX1 = vijandX1 - 10; //beweging vijand nummer 1
  if (vijandX1 && vijandX1 < 0) {
    vijandX1= 1280
    vijandY1= random(100,700);
  }
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
image (img1, 0, -100,840,840);
  image (img1, 840, -100,840,840);
  
  // vijand
  image (img3,1050,200,150,100);
  image (img3,400,-100,400,100);

  

  // kogel

  // speler
  image (img2,spelerX-50,spelerY-45,150,100);

  // punten en health

 
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
/*preload
dezefunctie wordt 1x uitgevoerd voor setup
we laden hier de plaatjes
*/
function preload () {
  img1= loadImage('weg.jpg')
  img2= loadImage('blauweauto.jpeg')
  img3= loadImage('rodeauto.jpeg')
  img4= loadimage('rozeauto.jpeg')
}
image (img3, vijandX1-110, vijdandY1-110, 220,220);
 image (img3, vijandX2-110, vijandY2-110, 220,220);





/**
 * setup
 //vijand 
 

 
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background ('black');
}

/** 
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
