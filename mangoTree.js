
const mangoTree = require("./fruit_tree")

class MangoTree extends mangoTree {
    constructor() {
        super()
        this._name = "Mango"
        this._matureAge = 23;
        this._endAge = 25
    }
    produceMango () {
        let randomFruit = Math.floor(Math.random()*5);
        for(let i = 0; i < randomFruit; i++) {
          let fruitsQuality = new Mango();
          this._fruits.push(fruitsQuality)
        }
        return this._fruits
      }
}
class Mango extends mangoTree{
}

module.exports = MangoTree