"use strict"

const FruitTree = require('./fruit_tree.js')
// const {Mango} = require('./Fruits.js')

class MangoTree extends FruitTree{
  constructor() {
    super('mango')
    this._deadAge = 20
    this._maturedAge = 5
    this._maxHeightAge = 13
  }

  // produceFruit () {
  //   if(this._age >= this._maturedAge) {
  //       this._harvested = Math.floor((Math.random() * 10) + 4)
  //       for(let i = 0; i < this._harvested; i++) {
  //       let fruit = new Mango()
  //       this._fruits.push(fruit)
  //       }
  //   }
  // }
}

let mangoTree = new MangoTree()

console.log('The tree is alive! :smile:')
do {
  mangoTree.grow()
  mangoTree.produceFruit()
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} Report] Heigth = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested} (${mangoTree._countGood} good, ${mangoTree._countBad} bad)`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its maker! :sad:')
