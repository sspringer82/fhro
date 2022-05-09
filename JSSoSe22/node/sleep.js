import { PerformanceObserver, performance } from 'perf_hooks';

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].name, items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

const sleep = (delay) => {
  const start = Date.now();

  while (true) {
    if (Date.now() - start >= delay * 1000) {
      break;
    }
  }

  return '👻';
};

function waitForSomeTime(req, res) {
  performance.mark('start waiting');
  sleep(2);
  performance.mark('end waiting');
  performance.measure('Waiting period', 'start waiting', 'end waiting');
}

waitForSomeTime();
