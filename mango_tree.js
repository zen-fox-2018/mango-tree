"use strict"

class FruitTree {
  constructor () {
    this._age = 0
    this._height = 0
    this._matureAge = 7
    this._healthStatus = true
    this._deadAge = 20
    this._fruits = []
    this._harvested = ""
    this._teenAge = 3
  }

  get age () {
    return this._age
  }

  set age (num) {
    this._age = this._age + num
  }

  get height () {
    return this._height.toFixed(2)
  }

  set height (num) {
    this._height = this._height + num
  }

  get fruits () {
    return this._fruits
  }

  set fruits (value) {
    this._fruits.push(value)
  }

  set fruitsReset (value) {
    this._fruits = value
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (value) {
    return this._healthStatus = value
  }

  get harvested () {
    return this._harvested
  }

  set harvested (value) {
    return this._harvested = value
  }

  get deadAge () {
    return this._deadAge
  }

  get teenAge () {
    return this._teenAge
  }

  get matureAge () {
    return this._matureAge
  }

  // Get current states here

  // Grow the tree
  grow () {
    this.age = 1
    if (this.age >= this.deadAge) {
      this.healthStatus = false
    }
    if (this.age <= this.matureAge ) {
      this.height = Math.random()*2
    }

  }

  // Produce some mangoes
  produceFruits () {
    if (this.age >= this.teenAge) {
      let totalFruits = Math.floor(Math.random()*15 + 1)
      for (let i = 1; i < totalFruits; i++) {
        this.fruits = new Fruit()
      }
    }
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality === "Good") {
        good++
      }
      else {
        bad++
      }
    }
    this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this.fruitsReset = []
  }

}

class Fruit {
  // Produce a mango
  constructor () {
    this.quality = this.getQuality()
  }

  getQuality () {
    let quality = ["Good", "Bad"]
    let randomQuality = Math.round(Math.random())
    return quality[randomQuality]
  }

}

class MangoTree extends FruitTree{
  constructor() {
    super()
    this._matureAge = 7
    this._deadAge = 20
    this._teenAge = 3
  }

  produceMango () {
    if (this.age >= this.teenAge) {
      let totalFruits = Math.floor(Math.random()*15 + 1)
      for (let i = 1; i < totalFruits; i++) {
        this.fruits = new Mango()
      }
    }
  }
}

class Mango extends Fruit {
  // Produce a mango
}


 // driver code untuk release 0
 console.log("Pohon mangga hidup");
 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMango();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus != false)
 console.log("Pohon mangganya udah modar");
 console.log('\n');



class AppleTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 9
    this._deadAge = 25
    this._teenAge = 5
  }

  produceApple () {
    if (this.age >= this.teenAge) {
      let totalFruits = Math.floor(Math.random()*15 + 1)
      for (let i = 1; i < totalFruits; i++) {
        this.fruits = new Apple()
      }
    }
  }
}

class Apple extends Fruit{
  // Produce a apple
}
console.log("Pohon apel hidup");
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log("Pohon apelnya udah modar");
console.log('\n');

class PearTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 8
    this._deadAge = 15
    this._teenAge = 6
  }

  producePear () {
    if (this.age >= this.teenAge) {
      let totalFruits = Math.floor(Math.random()*15 + 1)
      for (let i = 1; i < totalFruits; i++) {
        this.fruits = new Pear()
      }
    }
  }
}

class Pear extends Fruit{
  // Produce a pear
}
console.log("Pohon pear hidup");
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.producePear();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log("Pohon pearnya udah modar");
console.log('\n');


