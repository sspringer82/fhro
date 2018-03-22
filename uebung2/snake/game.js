const UP = 38;
const W = 87;
const DOWN = 40;
const S = 83;
const LEFT = 37;
const A = 65;
const RIGHT = 39;
const D = 68;
const SPACE = 32;

class Game {
  constructor(player, food, board) {
    this.player = player;
    this.food = food;
    this.board = board;
    this.paused = true;
    this.interval;
    this.over = false;
  }
  play() {
    this.player.nextMove();
  }

  pauseResume() {
    if (this.paused) {
      this.playInterval();
      this.paused = false;
    } else {
      clearInterval(this.interval);
      this.paused = true;
    }
  }

  playInterval() {
    clearInterval(this.interval);

    const intervalTime =
      config.time.start - (this.player.level - 1) * config.time.levelMultiplier;

    this.interval = setInterval(this.play.bind(this), intervalTime);
  }

  reset() {
    this.over = false;
    if (!this.paused) {
      this.pauseResume();
    }
    this.player.reset();
    this.food.reset();
    this.board.hideError();
  }

  setOver() {
    this.over = true;
    this.pauseResume();
  }

  static initialize() {
    const board = new Board(config.board.width, config.board.height);
    board.render();

    const player = new Player(board);
    player.render();

    const food = new Food(board, player);

    player.food = food;

    const game = new Game(player, food, board);

    food.reset();

    player.on('error', board.showError.bind(board));
    player.on('error', game.setOver.bind(game));
    player.on('score', board.showScore.bind(board));
    player.on('level', board.showLevel.bind(board));
    player.on('level', game.playInterval.bind(game));

    $('body').on('keydown', function(e) {
      switch (e.keyCode) {
        case UP:
        case W:
          player.setDirection('up');
          break;
        case DOWN:
        case S:
          player.setDirection('down');
          break;
        case LEFT:
        case A:
          player.setDirection('left');
          break;
        case RIGHT:
        case D:
          player.setDirection('right');
          break;
        case SPACE:
          if (game.over) {
            game.reset();
          } else {
            game.pauseResume();
          }
          break;
      }
    });
  }
}

$('document').ready(Game.initialize);
