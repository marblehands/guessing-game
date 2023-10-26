class GuessingGame {
    constructor() {
        this.minNum = 0;
        this.maxNum = 0;
    }

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        const middle = Math.round(this.minNum / 2 + this.maxNum / 2);
        return middle;
    }

    lower() {
        this.maxNum = Math.round(this.minNum / 2 + this.maxNum / 2);
    }

    greater() {
        this.minNum = Math.round(this.minNum / 2 + this.maxNum / 2);
    }
}

module.exports = GuessingGame;
