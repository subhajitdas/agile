'use strict';

const should = require('should');
const MemoryCache = require('../dist/helpers/memory-cache');

describe('Memory Cache', function() {
    it('Should be available', function () {
        MemoryCache.should.be.ok();
    });
});