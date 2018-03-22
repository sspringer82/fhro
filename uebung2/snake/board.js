class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render() {
    const board = $('<table></table>');

    for (let i = 0; i < this.height; i++) {
      let row = $('<tr></tr>');

      for (let j = 0; j < this.width; j++) {
        const id = j + '_' + i;
        const cell = $('<td id="' + id + '"></td>');
        row.append(cell);
      }

      board.append(row);
    }

    $('#content').append(board);
  }

  showScore(score) {
    $('#score').html(score);
  }
  showLevel(level) {
    $('#level').html(level);
  }

  showError() {
    $('#error').show();
  }

  hideError() {
    $('#error').hide();
  }
}
