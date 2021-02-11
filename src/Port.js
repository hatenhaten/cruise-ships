class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    };

    addShip(ship) {
        this.ships.push(ship);
    };

    removeShip(ship) {
        const shipIndex = this.ships.findIndex((element) => element === ship);
        this.ships.splice(shipIndex, 1);
    };
};


module.exports = Port;