const Port = require('../src/Port');

describe('Port', () => {
    let dover;
    beforeEach(() => {
        dover = new Port('Dover');
    });

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        expect(dover.name).toBe('Dover');
    });
});