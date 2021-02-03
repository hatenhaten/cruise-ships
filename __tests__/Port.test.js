const Port = require('../src/Port');

describe('Port', () => {
    let port;
    beforeEach(() => {
        port = new Port('Dover');
    });

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        expect(port.name).toBe('Dover');
    });
});