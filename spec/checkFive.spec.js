const test = require('../checkFive.js');
const assert = require('assert');
const checkFive = require('../checkFive.js');

describe("checkFive", function() {
  
  it("returns 'is less than 5.' if num < 5", function() {
    let output = checkFive(2);
    expect(output).toEqual('2 is less than 5.');
  });
});