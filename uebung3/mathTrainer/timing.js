function calculateTiminig(start, end) {
  const diff = end.getTime() - start.getTime();
  return format(diff);
}

function format(time) {
  const timeInSeconds = Math.round(time / 1000);
  const hours = pad(Math.floor(timeInSeconds / 3600));
  const minutes = pad(Math.floor((timeInSeconds - hours * 3600) / 60));
  const seconds = pad(timeInSeconds - hours * 3600 - minutes * 60);
  return `${hours}:${minutes}:${seconds}`;
}

function pad(number) {
  return number.toString().padStart(2, 0);
}

module.exports = calculateTiminig;
