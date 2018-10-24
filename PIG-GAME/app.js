/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var roundscore,activePlayer,state;

init();

//console.log(dice)
//document.getElementById('current-0').textContent=dice;


function btn(){

    //do something
}


document.querySelector('.btn-roll').addEventListener('click',function(){
   //do something here
    if (state){
        var dice=Math.floor(Math.random()*6)+1;
        var diceDom= document.querySelector('.dice')
        diceDom.style.display='block';
        diceDom.src='dice-'+dice+'.png'
        if( dice!==1){
            roundscore+=dice
            document.getElementById('current-'+activePlayer).textContent = roundscore;
        }
        else{
            //scores[activePlayer]+=roundscore;
            //document.getElementById('score-'+activePlayer).textContent=scores[activePlayer]
            document.getElementById('current-'+activePlayer).textContent=0;

            nextPlayer();
        }

    }


    });

document.querySelector('.btn-hold').addEventListener('click',function(){
if (state){
    score[activePlayer]+=roundscore;
    console.log(score[activePlayer]);
    document.getElementById('score-'+activePlayer).textContent=score[activePlayer]
    if (score[activePlayer]>=20){
        document.getElementById('name-'+activePlayer).textContent =  'WINNER';
        state=false;
        document.querySelector('.dice').style.display='none';

        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    }
    else{

        nextPlayer();
    }

}





});

function  nextPlayer() {
    if (activePlayer==1){
        activePlayer=0
    }
    else{

        activePlayer=1
    }
    roundscore=0
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}



document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    score=[0,0];
    activePlayer=0;
    roundscore=0;
    state=true;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('name-0').textContent =  'Player 1';
    document.getElementById('name-1').textContent =  'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}