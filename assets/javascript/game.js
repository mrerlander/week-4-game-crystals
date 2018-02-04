//jQuery ready function
$(document).ready(function () {

    //global variables (wins, losses, number to match, score, and random gem number array)
    var score;
    var wins = 0;
    var losses = 0;
    var compNumber;
    var randomGemNumbers;

    //function to generate computer number between 19 and 120
    function randomCompNumber(min, max) {
        min = Math.ceil(19);
        max = Math.floor(121);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    //function to set game start state
    function reset() {
        score = 0; //set score to 0
        $("#user-score").text(score); //set text of score area to 0
        
        compNumber = randomCompNumber(); //generate random computer number
        $("#matching-number").text(compNumber); //set text of number to match area
        
        randomGemNumbers = []; //set random gem array to zero 
        while (randomGemNumbers.length < 4) {   //generate random number array
            var random = Math.floor(Math.random() * 12) + 1;
            if (!randomGemNumbers.includes(random)) {
                randomGemNumbers.push(random);
            }
        };
        
        for (var i = 0; i < 4; i++) { //set value of each gem to a randomGemNumber array value
            $("#gem-" + i).val(randomGemNumbers[i]);
            console.log($("#gem-" + i).val());
        }
    }

    //start game
    reset ();

    //what happens when a user clicks a gem
    $("img").on("click", function () {

        //updates score
        score = Number(score) + Number($(this).val());

        //win condition
        if (score === compNumber) {
            $("#user-score").text(score);
            wins++;
            document.getElementById("win-counter").textContent = "Wins: " + wins;
            reset();
        }

        //score less than number to match
        else if (score < compNumber) {
            $("#user-score").text(score);
        }

        //losing condition (score higher than number to match)
        else {
            losses++;
            document.getElementById("loss-counter").textContent = "Losses: " + losses;
            reset();
        }
    });
});