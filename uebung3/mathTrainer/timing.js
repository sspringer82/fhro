function calculateTiminig(start, end) {
  const diff = end.getTime() - start.getTime();
  return format(diff);
}

function format(time) {
  const hours = pad(Math.floor(time / 3600));
  const minutes = pad(Math.floor((time - hours * 3600) / 60));
  const seconds = pad(time - hours * 3600 - minutes * 60);
  return `${hours}:${minutes}:${seconds}`;
}

function pad(number) {
  return number.toString().padStart(2, 0);
}

module.exports = calculateTiminig;
