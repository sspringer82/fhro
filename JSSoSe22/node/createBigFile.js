import { appendFileSync, writeFileSync } from 'node:fs';

writeFileSync('content.txt', 'xxx'.repeat(100_000_000));
