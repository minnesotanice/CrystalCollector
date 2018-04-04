// RULES

// At the begining of the game you will be given a random number between 19 and 120.

// There are 4 crystals below. By clicking on a crystal you will add a specific amount of points to your total score. The value of each crystal is between 1 and 12 and is hidden from you until you click on it.

// You win the game by matching your total score to the random number.

// Each time when the game starts, the game will change the values of each crystal.

// ///////////////////////////////////////////////////////////


// random number between 19 and 120
var targetNumber;

var setTargetNumber = function () {
    var x = Math.floor((Math.random() * 120) + 19);
    document.getElementById("targetNumber").innerHTML = x;
    targetNumber = x;
}

var updateYourScore = function () {
    document.getElementById("yourScore").innerHTML = counter;
}



var counter = 0;


var win = 0;

var updateWin = function () {
    win += 1;
    document.getElementById("win").innerHTML = win;
};

var loss = 0;

var updateLoss = function () {
    loss += 1;
    document.getElementById("loss").innerHTML = loss;
};

var crystals = $("#crystals");

var crystalRandom;
// generate random number between 1 and 12
var createCrystalRandom = function () {
    var x = Math.floor((Math.random() * 12) + 1);
    crystalRandom = x;
}


// BLUE CRYSTAL VALUE
// run createCrystalRandom()
// assign result to data-crystalvalue="?" of crystal
var makeBlueValue = function () {
    createCrystalRandom();
    $("#blue").attr("data-crystalvalue", crystalRandom);
};

// PURPLE CRYSTAL VALUE
var makePurpleValue = function () {
    createCrystalRandom();
    $("#purple").attr("data-crystalvalue", crystalRandom);
};

// RED CRYSTAL VALUE
var makeRedValue = function () {
    createCrystalRandom();
    $("#red").attr("data-crystalvalue", crystalRandom);
};

// TEAL CRYSTAL VALUE
var makeTealValue = function () {
    createCrystalRandom();
    $("#teal").attr("data-crystalvalue", crystalRandom);
};

var startNextRound = function () {
    setTargetNumber();
    counter = 0;
    updateYourScore();
    makeBlueValue();
    makePurpleValue();
    makeRedValue();
    makeTealValue();
};


// // // // // // // // // // // // // // // // // // // // // // // // 
// ON PAGE LOAD
// // // // // // // // // // // // // // // // // // // // // // // // 

// SET TARGET NUMBER
setTargetNumber();

// SET CRYSTAL NUMBERS
makeBlueValue();
makePurpleValue();
makeRedValue();
makeTealValue();


// // // // // // // // // // // // // // // // // // // // // // // // 
// PLAY ROUNDS OF THE GAME
// // // // // // // // // // // // // // // // // // // // // // // // 

// Click events for crystals
crystals.on("click", ".crystal-image", function () {

    // extract value from data-crystalvalue for clicked crystal
    var crystalValue = ($(this).attr("data-crystalvalue"));

    // convert this value from a string to an integer
    crystalValue = parseInt(crystalValue);

    // add value from data-crystalvalue to counter
    counter += crystalValue;

    // recalculate score
    updateYourScore();

    // use game logic to determine if the game is won or lost 
    if (counter === targetNumber) {
        setTimeout(function () {
            alert("You win!");
        }, 50);

        updateWin();
        startNextRound();

    } else if (counter >= targetNumber) {
        setTimeout(function () {
            alert("You lose!!");
        }, 50);

        updateLoss();
        startNextRound();
    }



});