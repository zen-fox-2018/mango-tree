
const FruitTree = require("./fruit_tree");

class AppleTree extends FruitTree {
    constructor() {
        super()
        this._name = "Apple";
        this._matureAge = 6;
        this.endAge = 10;
    }

    produceFruits () {
        let randomFruit = Math.floor(Math.random()*5);
        for(let i = 0; i < randomFruit; i++) {
          let fruitsQuality = new Apple();
          this._fruits.push(fruitsQuality)
        }
        return this._fruits
    }
}

class Apple extends FruitTree {
    constructor() {
        super()
    }
}

module.exports = AppleTree