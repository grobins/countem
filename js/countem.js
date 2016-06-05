var gameWidth = 800;
var gameHeight = 600;
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.image('sprite', 'img/circle.png');
}

function create() {

    var sprite = game.add.sprite(-50  , Math.random() * gameHeight    , 'sprite');

    var demoTween = game.add.tween(sprite).to({x: gameWidth + 50, y: Math.random() * gameHeight},2000);
    // repeats on completion
    // demoTween.onComplete.add(function(){   
    //    sprite.x = 0; sprite.y = 0;    
    //    demoTween.start();    });  
    demoTween.start();



}