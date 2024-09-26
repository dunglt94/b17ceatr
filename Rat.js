class Rat {
    name; weight; speed; state;

    constructor(name, weight, speed, state) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.state = true;
    }
    isDead() {
        this.state = false;
    }
    isCaught() {
        return false;
    }
    squeak() {
        alert('Chít Chít')
    }
}

let chuot1 = new Rat('Jerry', 40, 70)