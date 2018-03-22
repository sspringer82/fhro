const MOVE = {
  left: -1,
  right: 1,
  up: -1,
  down: 1,
};

const directions = ['up', 'down', 'left', 'right'];

class Player {
  constructor(board) {
    this.board = board;
    this.events = {};

    this.reset();
  }

  reset() {
    this.calculateInitialPosition();

    this.level = config.player.initialLevel;
    this.score = config.player.initialScore;
    this.trigger('score', this.score);
    this.render();
  }

  calculateInitialPosition() {
    this.x = Math.floor(Math.random() * config.board.width);
    this.y = Math.floor(Math.random() * config.board.height);

    const distance = {
      up: this.y,
      right: this.board.width - this.x,
      down: this.board.height - this.y,
      left: this.x,
    };

    let max = { dir: '', size: 0 };
    for (let i in distance) {
      if (distance[i] > max.size) {
        max = {
          dir: i,
          size: distance[i],
        };
      }
    }

    this.direction = max['dir'];

    this.snake = [{ x: this.x, y: this.y }];
  }

  render() {
    $('.player').removeClass('player');

    for (let i = 0; i < this.snake.length; i++) {
      const elClass = '#' + this.snake[i].x + '_' + this.snake[i].y;

      $(elClass).addClass('player');
    }
  }

  setDirection(direction) {
    this.direction = direction;
  }

  moveLeft() {
    this.moveHorizontal(MOVE.left);
  }
  moveRight() {
    this.moveHorizontal(MOVE.right);
  }

  moveUp() {
    this.moveVertical(MOVE.up);
  }

  moveDown() {
    this.moveVertical(MOVE.down);
  }

  moveHorizontal(direction) {
    const head = {
      x: this.snake[0].x + direction,
      y: this.snake[0].y,
    };
    this.move(head);
  }

  moveVertical(direction) {
    const head = {
      x: this.snake[0].x,
      y: this.snake[0].y + direction,
    };
    this.move(head);
  }

  move(head) {
    const newSnake = new Array();

    newSnake[0] = head;

    let eat = -1;
    if (this.eat()) {
      eat = 0;
    }

    let length = this.snake.length + eat;

    if (length < config.player.initialLength) {
      length++;
    }

    for (let i = 0; i < length; i++) {
      newSnake[i + 1] = this.snake[i];
    }

    this.snake = newSnake;

    this.gameOver();
    this.render();
  }

  gameOver() {
    this.isOutOfBounds();
    this.snakeAteItself();
  }

  isOutOfBounds() {
    const head = this.snake[0];

    if (
      head.x < 0 ||
      head.x > this.board.width - 1 ||
      head.y < 0 ||
      head.y > this.board.height - 1
    ) {
      this.trigger('error', 'Out of bounds');
    }
  }

  snakeAteItself() {
    const head = this.snake[0];
    for (let i = 1; i < this.snake.length; i++) {
      let currentEl = this.snake[i];
      if (head.x === currentEl.x && head.y === currentEl.y) {
        this.trigger('error', 'Snake ate itself');
      }
    }
  }

  nextMove() {
    let moveFunc = 'move' + Player.capitaliseFirstLetter(this.direction);
    this[moveFunc]();
  }

  static capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  eat() {
    const head = this.snake[0];
    if (head.x === this.food.x && head.y === this.food.y) {
      this.scoreUp(this.food.value);
      this.food.eat();
      return true;
    }
    return false;
  }

  scoreUp(value) {
    this.score += value;
    this.trigger('score', this.score);
    this.levelUp(this.score);
  }

  levelUp(score) {
    if (score % config.player.levelStep === 0) {
      this.level = score / config.player.levelStep + 1;
      this.trigger('level', this.level);
    }
  }

  on(event, cb) {
    if (this.events && this.events[event]) {
      this.events[event].push(cb);
    } else {
      this.events[event] = [cb];
    }
  }

  trigger(event, data) {
    if (this.events[event] && this.events[event].length > 0) {
      for (var i = 0; i < this.events[event].length; i++) {
        this.events[event][i](data);
      }
    }
  }
}
