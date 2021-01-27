/* globals describe it expect */
const Ship = require('../src/Ship');

describe('constructor', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
})