var assert = require('assert');

describe('#generic Tests', function () {
    it('Will Pass', function () {
        assert.strictEqual(true, true);
    });
    it('Will Fail', function () {
        assert.strictEqual(false, true);
    });
});