const FruitTree = require('./FruitTree')
const Fruit = require ("./Fruit")

class AppleTree extends FruitTree {
    constructor(name) {
      super(name)
      this._mature = 15
      this._dead = 25
    }
    produce () { 
        if (this.age >= this._mature) {
          let random = Math.floor(Math.random()*5)
          for (let i = 0 ; i < random ; i++) {
           let fruit = new Apple()
           this.fruits = fruit
          }
        }
      }
}
class Apple extends Fruit{
}

module.exports = AppleTree