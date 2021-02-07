const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('Iinerary', () => {
    let itinerary, dover, calais;
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
    });

    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover, calais]);
    });


});