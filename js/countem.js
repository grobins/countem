var gameWidth = 800;
var gameHeight = 600;
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.image('sprite', 'img/frog_sm.png');
}

function create() {

    for (var i=0 ; i<7 ; i++ ){
    var sprite = game.add.sprite(-50  , Math.random() * gameHeight    , 'sprite');

    var demoTween = game.add.tween(sprite).to({x: gameWidth + 50, y: Math.random() * gameHeight}, 2000);

       
        demoTween.start();
    }




}