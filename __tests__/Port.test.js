const { prototype } = require('../src/Port');
const Port = require('../src/Port');

describe('Port', () => {
    
    let dover, ship, titanic, queenMary;

    beforeEach(() => {
        dover = new Port('Dover');
        port = new Port('Dover');
        ship = jest.fn();
        titanic = {};
        queenMary = {};
    });

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        expect(dover.name).toBe('Dover');
    });

    it('can add ship', () => {
        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});