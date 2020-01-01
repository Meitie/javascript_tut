/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/**
 YOUR 3 CHALLENGES
 Change the game to follow these rules:

 1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: always save the previous dice roll in a separate variable;
 2. Add an input field to the HTML where players can set the winning score, so  that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good opportunity to use google to try figure this out)
 3. Add another dice to the game so that there a re two dice now and the player looses his current score when one of tis is a 1. (Hint you will need CSS to position the second dice so look at the CSS code for the first one.)
 */

var scores, roundScore, activePlayer, gamePlaying, scoreToBeat,previous;

init();

previous = 0;
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying){

        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // Challenge: create a second dice
        var dice2 = Math.floor(Math.random() * 6) + 1;

       // 2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // Challenge : display the results
        var dice2Dom = document.querySelector('.dice2');
        dice2Dom.style.display = 'block';
        dice2Dom.src = 'dice-'+dice2+'.png';

        // 3. Update the round score IF the rolled number was NOT 1
        //Challenge: Comparing previous variable and this one
        if ((dice === 6 || dice2 === 6) && previous === 6){
            //Loses all his score
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = '0';
            nextPlayer();
            //reset previous to 0
            previous = 0;
        } else if (dice === 1 || dice2 === 1) {
            nextPlayer();
        } else {
            //Add score
            roundScore += (dice+dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }

        // Make previous equal the current dice
        previous = dice;

    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {

    if(gamePlaying) {
        // Add current score to GLOBAL SCORE
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        scoreToBeat = document.getElementById('scoreToBeat').value;
        var winningScore

        // Undefined, 0, null, '' are COERCED to false
        //anything else Coerced to true
        if(scoreToBeat){
            winningScore = scoreToBeat;
        }else {
            winningScore = 100;
        }

        // Check if player won the game && compaire it to the user score to beat added
        if (scores[activePlayer] >= winningScore) {
            console.log(scoreToBeat);
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});


document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';


    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#scoreToBeat').value = '';
    scoreToBeat = undefined;
}


// Set value
//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';
// Get value
// var x = document.querySelector('#score-0').textContent;
// console.log(x)
// Using querySelector to change CSS
//document.querySelector('.dice').style.display = 'none';