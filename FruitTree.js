"use strict"
const Fruit = require('./Fruit')
class FruitTree {

  // Initialize a new MangoTree
  constructor (name) {
    this._name = name;
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._mature = 10;
    this._dead = 20;
    this._harvested = null;
    this._healthStatus = true
  }

  get age () {
    return this._age
  }
  set age (num) {
    this._age += num
  }

  get height () {
    return this._height
  }
  set height (num) {
    this._height+= num
  }

  get fruits () {
    return this._fruits
  }
  set fruits (fruit) {
    this._fruits.push(fruit)
  }
  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus(boolean) {
    this._healthStatus = boolean
  }

  get harvested () {
    return this._harvested
  }
  set harvested (input) {
    this._harvested = input
  }

  // Get current states here

  // Grow the tree
  grow () {
    this.age = 1
    if(this.age > this._mature) {
      const random =  Math.floor(Math.random() *2 +1)/2;
      this.height = random
    }
    if (this.age === this._dead) {
      this.healthStatus = false
    }

  }
  // Produce some mangoes
  produce () { 
    if (this.age >= this._mature) {
      let random = Math.floor(Math.random()*5)
      for (let i = 0 ; i < random ; i++) {
       let fruit = new Fruit()
       this.fruits = fruit
      }
    }
  }
  // Get some fruits
  harvest () {
    let bad = 0
    let good = 0
    for (let i = 0 ; i < this.fruits.length ; i++) {
        if (this.fruits[i].quality === "Good") {
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


