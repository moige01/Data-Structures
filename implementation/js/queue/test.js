const assert = require('assert').strict;
const Queue = require('./');

let queue = new Queue(1, 2, 3);

assert.equal(queue.enqueue(4, 5), 5);
assert.deepEqual(queue.queue, [4, 5, 1, 2, 3]);
assert.equal(queue.dequeue(), 3);

queue = new Queue(1, 2, 3);
queue.reverse = true;

assert.equal(queue.enqueue(4, 5), 5);
assert.deepEqual(queue.queue, [1, 2, 3, 4, 5]);
assert.equal(queue.dequeue(), 1);
