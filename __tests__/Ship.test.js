/* globals describe it expect */
const Ship = require('../src/Ship');

describe('Ship', () => {
    let ship
    beforeEach(() => {
        ship = new Ship('Dover');
    })

    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        expect(ship.startingPort).toBe('Dover');
    });

    it('can set sail', () => {
        ship.setSail();

        expect(ship.setSail()).toBeFalsy();
    });
});