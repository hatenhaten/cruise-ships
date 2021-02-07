const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {

    let ship, dover, calais, itinerary;
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
    });

    it('has a current port', () => {
        expect(ship.currentPort).toBe(dover);
    });

    it('can set sail', () => {
        ship.setSail();

        expect(ship.previousPort).toBe(dover);
        expect(ship.setSail()).toBeFalsy();
    });

    it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
    });

    it('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
});