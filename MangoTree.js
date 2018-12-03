"use strict"
const FruitTree = require('./FruitTree')
const Mango = require('./Mango')

class MangoTree extends FruitTree {
  constructor(matureAge, maxHeight, deadAge) {
    super(matureAge, maxHeight, deadAge)
  }

  produceFruits () {
    if (this.age >= this.matureAge) {
      let fruits = Math.floor(Math.random() * (9 - 1 + 1)) + 1
      for (let i = 0; i < fruits; i++) {
        this.fruits = new Mango()
      }
    }
  }
  
}

module.exports = MangoTree