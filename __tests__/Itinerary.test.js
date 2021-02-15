const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('Iinerary', () => {

    let itinerary, dover, calais;
    
    beforeEach(() => {
        dover = jest.fn();
        calais = jest.fn();
        itinerary = new Itinerary([dover, calais]);
    });

    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover, calais]);
    });


});