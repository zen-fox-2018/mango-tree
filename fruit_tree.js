"use strict"
const {Mango, Apple} = require('./Fruits.js')

class FruitTree {
  constructor (fruitName) {
    this._fruitName = fruitName
    this._age = 0
    this._height = 0
    this._fruits = []   
    this._harvested = 0
    this._healthStatus = true
    this._deadAge = 0
    this._maturedAge = 0
    this._maxHeightAge = 0
  }

  get fruitName () {
    return this._fruitName
  }

  get age () {
    return this._age
  }

  set age (age) {
    this._age += age
  }

  get height () {
    return this._height
  }

  set height (height) {
    this._height += height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus (status) {
    this._healthStatus = status
  }

  get harvested () {
    return this._harvested
  }

  set harvested (harvested) {
    this._harvested = harvested
  }

  // Get current states here
  grow () {
    this.age = 1
    if(this.age >= this._deadAge) {
      this.healthStatus = false
    }
    
    if(this.age > this._maxHeightAge) {
      this.height = 0
    } else {
      this.height = Math.floor((Math.random() * 0.5) + 1)
    }
    if(this.age <= this._maturedAge) {
      this.harvested = 0
      // this._harvested += 0
    }
  }

  // Produce some mangoes
  produceFruit () {
    if(this.age >= this._maturedAge) {
      this.harvested = Math.floor((Math.random() * 10) + 4)
      for(let i = 0; i < this.harvested; i++) {
        if(this.fruitName === 'mango') {
          let fruit = new Mango()
          this._fruits.push(fruit)
        } else if(this.fruitName === 'apple') {
          let fruit = new Apple()
          this._fruits.push(fruit)
        }
      }
    }
  }

  // Get some fruits
  harvest () {
    this._countGood = 0
    this._countBad = 0
    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality === 'good') {
        this._countGood++
      } else {
        this._countBad++
      }
    }
    this._fruits = []
  }
}

module.exports = FruitTree