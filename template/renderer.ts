const start = process.hrtime();
require('./module-renderer');
const time = process.hrtime(start);

console.group('time', time);