"use strict"

class FruitTree {

  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = ''
    this._matureAge = false
    this._productiveAge = 3
    this._deadAge = 20
  }

  get age() {
    return this._age
  }

  set age(n) {
    this._age = this._age + 1
  }

  get productiveAge() {
    return this._productiveAge
  }
  get deadAge() {
    return this._deadAge
  }

  get height () {
    return this._height
  }

  set height (plus) {
    this._height =  this._height + plus
  }

  get fruits () {
    return this._fruits
  }

  set fruits (input) {
    this._fruits.push(input)
  }

  set resetFruits(reset) {
    this._fruits = reset
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus (input) {
    this._healthStatus = input
  }

  get harvested () {
    return this._harvested
  }

  set harvested(value) {
    this._harvested = value
  }

  set resetHarvest(reset) {
    this._harvested = reset
  }

  get matureAge () {
    return this._matureAge
  }

  set matureAge (input) {
    this._matureAge = input
  }

  // Get current states here
  // Grow the tree
  grow () {
    this.age = 1
    if (this.age > this.productiveAge) {
      this.matureAge = true
    }

    if (this.age === this.deadAge) {
      this.healthStatus = false
    } else if (this.age <= 20) {
      this.height = (Math.floor(Math.random() * 10) / 10)
    }

  }

  // Produce some mangoes
  produceFruit () {
    let output = []
    if (this.matureAge) {
      let n = Math.floor(Math.random() * 10) + 2
      for (let i = 0 ; i < n ; i++) {
        let newFruit = new Fruit()
        this.fruits = (newFruit)
      }
    }
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0 ; i < this.fruits.length ; i++) {
      // console.log(this.fruits[i]);
      if (this.fruits[i].quality == 'Good') {
        good++
      } else {
        bad++
      }
    }
    this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this.resetFruits = []

  }
}

class Fruit {
  constructor () {
    this._quality;
    this.quality()
  }
  get quality() {
    return this._quality
  }
  set quality(value) {
    this._quality = value
  }
  quality() {
    this.quality = Math.floor(Math.random() * 2) === 1 ? 'Good' : 'Bad'
  }
}

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor () {
    super()
    this._deadAge = 30
    this._productiveAge = 6
  }
}

class Mango extends Fruit {
}

let mangoTree = new MangoTree()
console.log('===== Pohon Mangga =====');
do {
   mangoTree.grow();
   mangoTree.produceFruit();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${parseFloat(mangoTree.height).toFixed(2)} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('Pohon Mangga Sudah mati X(');

class PearTree extends FruitTree {

  constructor () {
    super()
    this._deadAge = 20
    this._productiveAge = 2
    this._stopGrowAge = 11
    this._growAverage = 5
  }

  get stopGrowAge() {
    return this._stopGrowAge
  }

  grow () {
    this.age = 1
    if (this.age > this.productiveAge) {
      this.matureAge = true
    }

    if (this.age === this.deadAge) {
      this.healthStatus = false
    } else if (this.age <= this.stopGrowAge) {
      console.log('Pohon masih tumbuh tinggi');
      this.height = (Math.floor(Math.random() * this._growAverage) / 10)
    }

  }

}

class Pear extends Fruit {
}

let pearTree = new PearTree()

console.log('===== Pohon Pear =====');
do {
   pearTree.grow();
   pearTree.produceFruit();
   pearTree.harvest();
   console.log(`[Year ${pearTree.age} Report] Height = ${parseFloat(pearTree.height).toFixed(2)} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log('Pohon Pear Sudah mati X(');
