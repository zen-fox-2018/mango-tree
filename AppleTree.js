const FruitTree = require('./FruitTree')
const Apple = require('./Apple')
class AppleTree extends FruitTree {
    constructor(name) {
      super(name)
      this._mature = 15
      this._dead = 25
    }
    // produce () { 
    //     if (this.age >= this._mature) {
    //       let random = Math.floor(Math.random()*5)
    //       for (let i = 0 ; i < random ; i++) {
    //        let fruit = new Apple()
    //        this.fruits = fruit
    //       }
    //     }
    //   }
}



module.exports = AppleTree