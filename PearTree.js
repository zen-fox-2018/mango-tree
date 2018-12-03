const FruitTree = require('./FruitTree')
const Pear = require('./Pear')
class PearTree extends FruitTree {
    constructor(name) {
        super(name)
        this._mature = 5
        this._dead = 15
      }
      // produce () { 
      //   if (this.age >= this._mature) {
      //     let random = Math.floor(Math.random()*5)
      //     for (let i = 0 ; i < random ; i++) {
      //      let fruit = new Pear()
      //      this.fruits = fruit
      //     }
      //   }
      // }
}
module.exports = PearTree