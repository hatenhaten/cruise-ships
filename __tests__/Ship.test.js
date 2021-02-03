const Ship = require('../src/Ship');
const Port = require('../src/Port');

describe('Ship', () => {
    let ship, port, calais;
    beforeEach(() => {
        port = new Port('Dover');
        ship = new Ship(port);
        port2 = new Port('Calais')
    });

    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a current port', () => {
        expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
        ship.setSail();

        expect(ship.setSail()).toBeFalsy();
    });

    it('can dock at a different port', () => {
        ship.dock(port2);

        expect(ship.currentPort).toBe(port2);
    });
});