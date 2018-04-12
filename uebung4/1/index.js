const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  switch (p1) {
    case 'rock':
      if (p2 === 'paper') return 'Player 2 won!';
      return 'Player 1 won!';
    case 'scissors':
      if (p2 === 'rock') return 'Player 2 won!'
      return 'Player 1 won!';
    case 'paper':
      if (p2 === 'scissors') return 'Player 2 won!';
      return 'Player 1 won!';
  }
};