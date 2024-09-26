class Cat {
    name; weight; maxSpeed;

    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    speak() {
        alert('méo méo')
    }
    catchRat(Rat) {
        if (this.maxSpeed > Rat.speed) {
            alert(`${this.name} đã bắt được ${Rat.name}`)
        }
    }
    eatRat(Rat) {
        if (Rat.state === true) {
            alert(`${this.name} đã last hit ${Rat.name}. Big W for ${this.name}!`)
            console.log(`${Rat.name} đã F!`);
            this.weight += Rat.weight;
            Rat.weight = 0;
            Rat.speed = 0;
            Rat.state = false;
        }
    }
}

let meo1 = new Cat ('Tom', 100, 100)