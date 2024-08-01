const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
};
function playGame(guess) {
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? 'heads' : 'tails';

    console.log(guess === result ? 'You win!' : 'You lose!');

    if (guess === result) {
      score.wins++;
    } else {
      score.losses++;
    }
    console.log(score);

    localStorage.setItem('score', JSON.stringify(score));
}
  
  
