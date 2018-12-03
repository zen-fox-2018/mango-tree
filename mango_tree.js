"use strict"

// Release 0
class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._quality = ''
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = ''
    this._matureAge = 2
  }
  
  get age() {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  set fruits(status) {
    this._fruits.push(status)
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age++  
    let maxHeight = 15
    this._height
    let maxAge = 20
    if (this.age === maxAge) {
      this._healthStatus = false
    }
    if (this.height <= maxHeight) {
      this._height += Math.floor(Math.random() * 6)
    }
  }

  // Produce some mangoes
  produceMangoes () {
    let randomFruits = Math.floor(Math.random() * 10)
    if (this.age >= this._matureAge) {
      for (let i = 0; i < randomFruits; i++) {
        this._fruits.push(new Mango())
      }
    }
    return this.fruits
  }

  // Get some fruits
  harvest () {
    let countGood = 0
    let countBad = 0

    for (let i = 0; i < this.fruits.length; i++) {
      // console.log(this.fruits[i]);
      if (this.fruits[i].quality === 'good') {
        countGood++
      } else {
        countBad++
      }
    }
    this._harvested = `${this.fruits.length} (${countGood} good, ${countBad} bad)`
    this._fruits = []
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.fruitsQuality()
  }

  fruitsQuality () {
    let q = ['good', 'bad']
    this.quality = q[Math.floor(Math.random() * q.length)]
    return this.quality
  }
}


  // driver code untuk release 0
    let mangoTree = new MangoTree()
    do {
      mangoTree.grow();
      mangoTree.produceMangoes();
      mangoTree.harvest();
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
