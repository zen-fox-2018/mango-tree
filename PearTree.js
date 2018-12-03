"use strict"
const FruitTree = require('./FruitTree')
const Pear = require('./Pear')

class PearTree extends FruitTree {
  constructor(matureAge, maxHeight, deadAge) {
    super(matureAge, maxHeight, deadAge)
  }

  produceFruits () {
    if (this.age >= this.matureAge) {
      let fruits = Math.floor(Math.random() * (9 - 1 + 1)) + 1
      for (let i = 0; i < fruits; i++) {
        this.fruits = new Pear()
      }
    }
  }
  
}

module.exports = PearTree