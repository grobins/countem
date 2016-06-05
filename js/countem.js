var gameWidth = $(window).width();
var gameHeight = $(window).height();
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
var levels = [5, 6, 9, 14, 20, 25, 40, 50, 60];
var travelTimes = [3000, 4000, 5000, 7500, 10000, 13000, 18000, 25000, 30000];
var curLevel = 0;
var numSprites

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preload() {
    game.load.image('sprite', 'img/frog_sm.png');
}

function create() {
    console.log(curLevel)
    $('#resultIcon').empty();
    numSprites = Math.max(1, getRandomInt(levels[curLevel] - 2, levels[curLevel] + 2));
    var levelSpeed = travelTimes[curLevel];

    for (var i=0 ; i<numSprites ; i++ ){

        if ( i % 2 == 0){ 
            // vary starting position along left edge, tweening to right edge
            setTimeout(function () {
                var sprite = game.add.sprite(-50, Math.random() * gameHeight, 'sprite');
                var demoTween = game.add.tween(sprite).to({x: gameWidth + 50, y: Math.random() * gameHeight}, levelSpeed);
                demoTween.start();
            }, Math.floor(Math.random() * travelTimes[curLevel]));

        } else {
            // vary starting position along top edge, tweening to bottom edge
            setTimeout(function () {
                var sprite = game.add.sprite(Math.random() * gameWidth, -50, 'sprite');
                var demoTween = game.add.tween(sprite).to({x: Math.random() * gameWidth, y: gameHeight + 50}, levelSpeed);
                demoTween.start();
            }, Math.floor(Math.random() * travelTimes[curLevel]));

        }
    }

}

function guess(ele){
    if(event.keyCode == 13) {
        var userGuess = parseInt(ele.value);

        if(userGuess === parseInt(userGuess, 10)){

            var guessVariance = Math.abs(userGuess - numSprites);
            if(userGuess == numSprites){

                $('#resultIcon').html('<i class="material-icons">&#xE876;</i> Spot On!')
                curLevel++

            } else if(userGuess >= numSprites - (numSprites / 10) && userGuess <= numSprites + (numSprites / 10)){

                $('#resultIcon').html('<i class="material-icons">&#xE876;</i> Close Enough! There were ' + numSprites)
                curLevel++

            } else{
                Math.abs(userGuess - numSprites)
                $('#resultIcon').html('<i class="material-icons">&#xE14C;</i> Within ' + guessVariance)
                
            }


        } else {
            alert("Please enter a whole number greater than 0")
        }

    }

}