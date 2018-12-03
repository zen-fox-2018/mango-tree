"use strict"
const Mango = require("./mango");
const Apple = require("./apple");
// Release 0

class FruitTree {

  // Initialize a new fruitTree
  constructor () {
    this._age = 0;
    this._height = 10;
    this._fruits = [];
    this._matureAge = 10;
    this._endAge = 20;
    this._healthStatus = true;
    this._harvested = "";
    this._goodQuality = 0;
    this._badQuality = 0;
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
    if(this._age >= this._matureAge) {
      this.produceFruits();
    }
    
    if (this._age === this._endAge){
      this._healthStatus = false;
    }
    
    let random = `${Math.floor(Math.random()*25)/10} M`
    this._height = random;
  }

  produceFruits () {
    // produceFruits some mangoes
    let randomFruit = Math.floor(Math.random()*5);
    for(let i = 0; i < randomFruit; i++) {
      let fruitsQuality = new Mango();
      this._fruits.push(fruitsQuality)
    }
    return this._fruits
  }

  // Get some fruits
  harvest () {
    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality === "Good") {
        this._goodQuality++
      } else {
        this._badQuality++
      }
    }
    this._harvested = `${this._fruits.length} (${this._goodQuality} good, ${this._badQuality} bad)`
    this._fruits = []
  }
}

//  driver code untuk release 0
  let fruitTree = new FruitTree()
  do {
    fruitTree.grow();
    fruitTree.produceFruits();
    fruitTree.harvest();
   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
  } while (fruitTree.healthStatus != false)

module.exports = FruitTree

