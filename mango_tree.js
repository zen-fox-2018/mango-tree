"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = '';
    this._healthStatus = true;
    this._matureage = 6;
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

  get mature() {
    return this._matureage
  }

  // Get current states here

  // Grow the tree
  grow() {
    let maxHeight = 4.8;
    let endofTree = 20;

    this._age += 1
    this._height += Math.random()

    if (this._height >= maxHeight) this._height = maxHeight
    if (endofTree == this._age) this._healthStatus = false

    return this
  }

  // Produce some mangoes
  produceMangoes() {
    if (this._age >= this._matureage) {
      let generateFruits = Math.round(Math.random() * 9)
      for (let i = 0; i < generateFruits; i++) {
        this._fruits.push(new Mango())
      }
    }
    return this._fruits
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    let total = 0

    for (let i = 0; i < this._fruits.length; i++) {
      total += 1
      if (this._fruits[i].quality == 'good') {
        good++
        total++
      } else {
        bad++
        total++
      }
    }
    this._harvested = `${total} (${good} good, ${bad} bad)`
    this._fruits = []
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.generateQuality()
  }

  generateQuality() {
    let random = Math.round(Math.random() * 2)
    let quality = ['good', 'bad']
    if (random == 0) {
      return quality[0]
    } else {
      return quality[1]
    }
  }
}

/**
 * driver code untuk release 0
 * let mangoTree = new MangoTree()
 * do {
 *   mangoTree.grow();
 *   mangoTree.produceMangoes();
 *   mangoTree.harvest();
 *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
 * } while (mangoTree.healthStatus != false)
 */

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

// console.log(`The tree is alive! :smile:`)
// console.log(`The tree has met its end. :sad:`)
// console.log(mangoTree)

// Release 1
class AppleTree { }
class Apple { }

// Release 2
class FruitTree { }
class Fruit { }
