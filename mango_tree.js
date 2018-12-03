"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 1;
    this._height = 1;
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
  get fruit(){
    let buah = new Mango()
    return buah
  }
  // Get current states here

  // Grow the tree
  grow () {
    const random =  Math.floor(Math.random() *2 +1)/2;
    this.age = 1
    this.height = random
    if (this.age === this._dead) {
      this.healthStatus = false
    }

  }
  // Produce some mangoes
  produceMangoes () { 
    if (this.age >= this._mature) {
      let random = Math.floor(Math.random()*5)
      for (let i = 0 ; i < random ; i++) {
        this._fruits.push(this.fruit)
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
  }
}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.generateQuality()
  }
  generateQuality() {
    const quality = ["Bad","Good"]
    const random = Math.floor(Math.random()*quality.length)
    return quality[random]
  }
}



  // driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
   console.log(`this is mango Tree live sycle ===========`)
  

// Release 1
class AppleTree extends MangoTree {
  constructor() {
    super()
    this._mature = 15
    this._dead = 25
  }

  get fruit() {
    let buah = new Apple()
    return buah
  }
}
class Apple extends Mango{
  constructor() {
    super()
  }
}

let appleTree = new AppleTree()
  do {
     appleTree.grow();
     appleTree.produceMangoes();
     appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}m | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthStatus != false)
   console.log(`this is Apple Tree live sycle ===========`)

// Release 2
class FruitTree {}
class Fruit {}
