class Food {
  constructor(board, player) {
    this.board = board;
    this.player = player;
    this.value = config.food.value;
  }
  getPosition() {
    let match = false;
    do {
      match = false;
      this.x = Math.floor(Math.random() * this.board.width);
      this.y = Math.floor(Math.random() * this.board.height);
      for (var i = 0; i < this.player.snake.length; i++) {
        if (
          this.player.snake[i].x === this.x &&
          this.player.snake[i].y === this.y
        ) {
          match = true;
        }
      }
    } while (match);
  }

  render() {
    $('.food').removeClass('food');
    const elClass = '#' + this.x + '_' + this.y;

    $(elClass).addClass('food');
  }

  eat() {
    this.reset();
  }

  reset() {
    this.getPosition();
    this.render();
  }
}
