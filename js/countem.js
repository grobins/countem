var gameWidth = 800;
var gameHeight = 600;
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
var levels = [1, 2, 3, 5, 7, 12, 19, 31, 50];
var curLevel = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preload() {
    game.load.image('sprite', 'img/frog_sm.png');
}

function create() {

    var numSprites = Math.max(1, getRandomInt(levels[curLevel] - 2, levels[curLevel] + 2));
    
    for (var i=0 ; i<numSprites ; i++ ){

        if ( i % 2 == 0){ 
            // vary starting position along left edge, tweening to right edge
            setTimeout(function () {
                var sprite = game.add.sprite(-50, Math.random() * gameHeight, 'sprite');
                var demoTween = game.add.tween(sprite).to({x: gameWidth + 50, y: Math.random() * gameHeight}, 2000);
                demoTween.start();
            }, Math.floor(Math.random() * 1000));

        } else {
            // vary starting position along top edge, tweening to bottom edge
            setTimeout(function () {
                var sprite = game.add.sprite(Math.random() * gameWidth, -50, 'sprite');
                var demoTween = game.add.tween(sprite).to({x: Math.random() * gameWidth, y: gameHeight + 50}, 2000);
                demoTween.start();
            }, Math.floor(Math.random() * 1000));

        }
    }

}