const start = process.hrtime();
require('./module-renderer');
const time = process.hrtime(start);

const nanoseconds = (time[0] * 1e9) + time[1];
const milliseconds = nanoseconds / 1e6;

console.group('ms taken', milliseconds);