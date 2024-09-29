class vehicles {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

class Bus extends vehicles{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.seat = ticketPrice;
    }
}

class Truck extends vehicles{
    constructor(name,price,load){
        super(name,price);
        this.load = load
    }
}