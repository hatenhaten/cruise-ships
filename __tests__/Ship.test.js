const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    
    describe('with ports and an itinerary', () => {
        let ship, dover, calais, itinerary;

        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
        });

        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });
    
        it('has a starting port', () => {
            expect(ship.currentPort).toBe(dover);
        });
    
        it('has a current port', () => {
            expect(ship.currentPort).toBe(dover);
        });
    
        it('can set sail', () => {
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(dover.ships).not.toContain(ship);
        });

        it('gets added to port on instantiation', () => {
            expect(dover.ships).toContain(ship);
        });

            describe ('ship sets sail and docks', () => {
                beforeEach(() => {
                    ship.setSail();
                    ship.dock();
            });

            it('can dock at a different port', () => {
                expect(ship.currentPort).toBe(calais);
                expect(calais.ships).toContain(ship);
            });
        
            it('can\'t sail further than its itinerary', () => {
                expect(() => ship.setSail()).toThrowError('End of itinerary reached');
            });
         });
    });
});