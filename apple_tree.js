const fruitTree = require('./fruit_tree.js').FruitTree
// const fruit = require('./fruit_tree.js').Fruit

// Release 1
class AppleTree extends fruitTree {
    // Initialize a new appleTree
    constructor() {
        super()
        this._age = 0
        this._height = 0
        this._matureAge = 6
        this._growthStopAge = 13
        this._deathAge = 25
        this._harvested = ''
        this._fruits = []
        this._healthStatus = this.healthStatus
        this._fr
    }

    // Get current states here
    get age() {
        return this._age
    }

    set age(n) {
        this._age += n
    }

    get height() {
        return this._height
    }

    set height(n) {
        this._height += n
    }


    get fruits() {
        return this._fruits
    }

    set fruits(n) {
        this._fruits.push(n)
    }

    get healthStatus() {
        if (this.age <= this._deathAge) {
            return true
        } else {
            return false
        }
    }

    get harvested() {
        return this._harvested
    }

    set harvested(n) {
        this._harvested = n
    }


    // Grow the tree
    grow() {
        this.age = 1
        if (this.age <= this._growthStopAge) {
            this.height = Math.floor(Math.random() * 10) * 0.1
        }
    }

    // Produce some apples
    produceApples() {

        this._fruits = []
        let numberOfFruits = Math.floor(Math.random() * 15) + 1

        if (this._matureAge <= this.age) {
            for (let i = 0; i < numberOfFruits; i++) {
                this.fruits = new Apple()
            }
        }
    }

    // Get some fruits
    harvest() {
        let countGood = 0
        let countBad = 0

        for (let i = 0; i < this.fruits.length; i++) {
            if (this.fruits[i]._quality == 'good') {
                countGood++
            } else {
                countBad++
            }
        }

        this.harvested = this.fruits.length + ' (' + countGood + ' good, ' + countBad + ' bad)'
    }
}


class Apple {
    constructor() {
        this._quality = this.quality
    }

    get quality() {
        let arrQuality = ['good', 'bad']
        return arrQuality[Math.floor(Math.random() * 2)]
    }
}

console.log(`The Tree is alive! :smile: `)
let appleTree = new AppleTree()

while (appleTree.healthStatus) {
  appleTree.grow()
  appleTree.produceApples()
  appleTree.harvest()
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
}
console.log('the tree has met its end. :( so sad')

module.exports = {AppleTree, Apple}