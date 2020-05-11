const assert = require('assert').strict;
const Stack = require('./');

let stack = new Stack(1, 2, 3);

assert.equal(stack.push(4, 5), 5);
assert.deepEqual(stack.stack, [1, 2, 3, 4, 5]);
assert.equal(stack.pop(), 5);

stack = new Stack(1, 2, 3);
stack.reverse = true;

assert.equal(stack.push(4, 5), 5);
assert.deepEqual(stack.stack, [4, 5, 1, 2, 3]);
assert.equal(stack.pop(), 4);