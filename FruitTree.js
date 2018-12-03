"use strict"
const Fruit = require('./Fruit')

class FruitTree {
  constructor (matureAge, maxHeight, deadAge) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = []
    this._healthStatus = true
    this._matureAge = matureAge
    this._maxHeight = maxHeight
    this._deadAge = deadAge
  }

  get age () {
    return this._age
  }
  set age (val) {
    this._age += val
  }
  
  get matureAge () {
    return this._matureAge
  }
  
  get maxHeight () {
    return this._maxHeight
  }
  
  get deadAge () {
    return this._deadAge
  }

  get height () {
    return this._height.toFixed(2)
  }
  set height (val) {
    this._height += val
  }

  get fruits () {
    return this._fruits
  }
  set fruits (val) {
    this._fruits.push(val)
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (val) {
    this._healthStatus = val
  }

  get harvested () {
    return this._harvested
  }
  set harvested (val) {
    this._harvested = val
  }

  // Get current states here
  // Grow the tree
  grow () {
    this.age = 1
    if (this.age < this.deadAge) {
      if(this.age <= this.maxHeight) this.height = Math.random()
    } else {
      this.healthStatus = false
    }
  }

  // Produce some fruits
  produceFruits () {
    if (this.age >= this.matureAge) {
      let fruits = Math.floor(Math.random() * (9 - 1 + 1)) + 1
      for (let i = 0; i < fruits; i++) {
        this.fruits = new Fruit()
      }
    }
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i]._quality === 'good') {
        good++
      } else {
        bad++
      }
    }
    this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this._fruits = []
  }

}

module.exports = FruitTree