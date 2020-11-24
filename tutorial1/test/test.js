import {bubbleSort} from "../index";
var assert = require('assert');

const
    io = require("socket.io-client"),
    ioClient = io.connect("http://localhost:8000");

ioClient.emit('join', "Heeeyyyyy");


ioClient.destroy();

describe('#bubbleSort()', function () {
    it('bubbleSort implementation', function () {
        let res = bubbleSort([5, 7, 1, 3, 6, 9]);
        assert.strictEqual(res[0], 1);
        assert.strictEqual(res[1], 3);
        assert.strictEqual(res[2], 5);
        assert.strictEqual(res[3], 6);
        assert.strictEqual(res[4], 7);
        assert.strictEqual(res[5], 9);
        assert.strictEqual(res.length, 6);
    });
});