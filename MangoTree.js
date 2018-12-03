const Fruit = require('./Fruit')
const FruitTree = require('./FruitTree')
class MangoTree extends FruitTree {
    constructor(name) {
        super(name)
        this._mature = 10
        this._dead = 20
      }
      produce () { 
        if (this.age >= this._mature) {
          let random = Math.floor(Math.random()*5)
          for (let i = 0 ; i < random ; i++) {
           let fruit = new Mango()
           this.fruits = fruit
          }
        }
      }
}
class Mango extends Fruit{
}
module.exports = MangoTree