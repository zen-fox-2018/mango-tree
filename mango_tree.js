"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(matureAge, maxAge, maxHeight) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._healthStatus = true
    this._matureAge = matureAge
    this._maxAge = maxAge
    this._maxHeight = maxHeight
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healthStatus() {
    return this._healthStatus
  }

  get harvested() {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow() {
    let random = Math.random() * 1

    this._age += 1
    this._height += random

    if (this._height >= this._maxHeight) {
      this._height = this._maxHeight
    }

    if (this._age >= this._maxAge) {
      this._healthStatus = false
    }

    return this
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.age >= this._matureAge) {
      let random = Math.floor(Math.random()*15 + 1)
      for (let i = 0; i < random; i++) {
        this._fruits.push(new Mango())
      }
      return this._fruits
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    let total = 0
    for (let i = 0; i < this._fruits.length; i++) {
      total++
      if (this._fruits[i].status == 'good') {
        good++
      } else {
        bad++
      }
    }
    this._harvested = `${total} (${good} good, ${bad} bad)`
    this._fruits = []
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.status = this.randomQuality();
  }

  randomQuality() {
    let result = '';
    let random = Math.round(Math.random());
    if (random == 0) {
      result = 'good'
    } else {
      result = 'bad'
    }
    return result;
  }
}

console.log(`The tree is alive! :smile:`)

let mangoTree = new MangoTree(1, 20, 4.8)

do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

console.log(`The tree has met its end. :sad:`)

// Release 1
class AppleTree { }
class Apple { }

// Release 2
class FruitTree { }
class Fruit { }
