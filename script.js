

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

var vijandX1 = 740;     // x-positie van vijand 
var vijandY1 = 500;      // y-positie van speler

var vijandX2 = 1280;
var vijandY2 = 500;
var img3;

var score = 0;  // score
var highscore = 0;  // highscore

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () { 
  // speler
 if (keyIsDown(KEY_LEFT)) {  //A
     spelerX = spelerX -8;
  }
  if (keyIsDown(KEY_UP)) {  //W
     spelerY = spelerY -8;
  }
   if (keyIsDown(KEY_DOWN)) {  //S
     spelerY = spelerY +8;
  }
   if (keyIsDown(KEY_RIGHT)) {  //D
     spelerX = spelerX +8;
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
  vijandX1 = vijandX1 - 8;  //bewegen vijand1
  if (vijandX1 && vijandX1 < 0) {
    vijandX1 = 1280
    vijandY1 = random(100,700);
  }
  vijandX2 = vijandX2 - 8;  //bewegen vijand2
  if (vijandX2 && vijandX2 < 0) {
    vijandX2 = 1280
    vijandY2 = random(100,700);
  }

    score = score + 1  //score
  if (score > highscore) {  //highscore
    highscore = score
 }

  if (score > 500) {  //vijand sneller bij 500
     vijandX1 = vijandX1 - 2;
     vijandX2 = vijandX2 - 2;
   }
   if (score > 1000) {  //vijand sneller bij 1000
     vijandX1 = vijandX1 - 2;
     vijandX2 = vijandX2 - 2;
   }
   if (score > 1750) {  //vijand sneller bij 1750
     vijandX1 = vijandX1 - 2;
     vijandX2 = vijandX2 - 2;
   }
   if (score > 2500) {  //vijand sneller bij 2500
     vijandX1 = vijandX1 - 2;
     vijandX2 = vijandX2 - 2;
   }
  if (score > 4000) {  //vijand sneller bij 4000
     vijandX1 = vijandX1 - 2;
     vijandX2 = vijandX2 - 2;
   }
  if (score > 5000) {  //vijand sneller bij 5000
     vijandX1 = vijandX1 - 2;
     vijandX2 = vijandX2 - 2;
   }
 
  if (score > 7000) {  //vijand sneller bij 7000
     vijandX1 = vijandX1 - 2;
     vijandX2 = vijandX2 - 2;
   }
};
  // kogel


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
  image (img1, 0, -100, 840, 840);
  image (img1, 840, -100,840,840);
  
  // vijand
  image (img3, vijandX1-110, vijandY1-110, 150, 100);
  image (img3, vijandX2-110, vijandY2-110, 150, 100);

  

  // kogel

  // speler
  image (img2,spelerX-50,spelerY-45,150,100);


   // score
  textSize(50)
  fill("white")
  text("score: " + score, 10, 50);
  
  textSize (50)
  fill("white")
  text("highscore: " + highscore, 900, 50 )
  };

 


/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerX - vijandX1 < 100 &&
    spelerX - vijandX1 >-212 &&
    spelerY - vijandY1 < 25 &&
    spelerY - vijandY1 > -170) {
    console.log("Botsing")
    return true;
  }
   if (spelerX - vijandX2 < 100 &&
    spelerX - vijandX2 >-212 &&
    spelerY - vijandY2 < 25 &&
    spelerY - vijandY2 > -170) {
    console.log("Botsing")
    return true;
  }
  
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
 
}
image (img3, vijandX1-110, vijdandY1-110, 150,100);
 image (img3, vijandX2-110, vijandY2-110, 150,100);







 

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
