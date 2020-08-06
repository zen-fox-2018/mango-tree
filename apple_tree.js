"use strict"
const FruitTree = require('./fruit_tree.js')
// const {Apple} = require('./Fruits.js')

class AppleTree extends FruitTree {
    constructor() {
        super('apple')
        this._deadAge = 15
        this._maturedAge = 4
        this._maxHeightAge = 10
    }

    // produceFruit () {
    //     if(this._age >= this._maturedAge) {
    //         this._harvested = Math.floor((Math.random() * 10) + 4)
    //         for(let i = 0; i < this._harvested; i++) {
    //         let fruit = new Apple()
    //         this._fruits.push(fruit)
    //         }
    //     }
    // }
}

let appleTree = new AppleTree()

console.log('The tree is alive! :smile:')
do {
  appleTree.grow()
  appleTree.produceFruit()
  appleTree.harvest()
  console.log(`[Year ${appleTree.age} Report] Heigth = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested} (${appleTree._countGood} good, ${appleTree._countBad} bad)`)
} while (appleTree.healthStatus != false)
console.log('The tree has met its maker! :sad:')