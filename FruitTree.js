"use strict"
const Fruit = require(`./Fruit`)
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruitsCount = 0
    this._fruits = []
    this._healthStatus = true
    this._maxAge = 20
    this.matureAge = 15
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruitsCount() {
    return this._fruitsCount
  }

  get healthStatus() {
    return this._healthStatus
  }

  get fruits() {
    return this._fruits
  }

  get maxAge() {

  }

  set age(num) {
    this._age = num
  }

  set height(num) {
    this._height = num
  }

  set fruitsCount(num) {
    this._fruitsCount = num
  }

  set fruits(fruitObj) {
    this.fruits.push(fruitObj)
  }

  set healthStatus(bool) {
    this._healthStatus = false
  }

  set maxAge(num) {

  }

  grow() {
    if (this._age >= this.matureAge) {
      this.height = this.height
    } else {
      this.height += Math.random()
    }
    this.age += 1

    if (this._age == this._maxAge) {
      this.healthStatus = true
    }
  }

  // Produce some Apples
  produceFruits() {
    this._fruitsCount = 0
    for (let i = 0; i < Math.floor(Math.random() * 1000); i++) {
      this.fruitsCount = i
    }

    for (let i = 0; i < this.fruitsCount; i++) {
      this.fruits = new Fruit() 
    }
    
  }

  harvest() {
    let good = 0
    let bad = 0
    
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality == 'GOOD') {
        good++
      } else {
        bad++
      }
    }
    return `With ${good} GOOD and ${bad} BAD`
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super()
    this._maxAge = 7
  }
}
class AppleTree extends FruitTree {
  constructor() {
    super()
    this._maxAge = 15
  }
}

let mangoTree = new MangoTree()
let appleTree = new AppleTree()
console.log(`=============MANGO TREE=============`);
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} Meter | Fruits harvested = ${mangoTree.fruits.length} ${mangoTree.harvest()}`)
} while (mangoTree.healthStatus != false)
console.log(`=============APPLE TREE=============`);

do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} Meter | Fruits harvested = ${appleTree.fruits.length} ${appleTree.harvest()}`)
} while (appleTree.healthStatus != false)



