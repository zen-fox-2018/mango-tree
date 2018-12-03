"use strict"

// Release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruitsAvailable = 0;
    this._harvested = '';
    this._healthStatus = true;
    this._stopGrowingAge = 25;
    this._died = 50;
    this._matureAge = 10;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruitsAvailable;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow () {
    if (this._age === this._died) {
      this._healthStatus = false;
    } else {
      this._age = this._age + 1;
    }
    if (this._height !== this._stopGrowingAge) {
      let growth = Math.round(Math.random() * 5);
      this._height = this._height + growth;
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if (this._age >= this._matureAge) {
      let addFruits = Math.round(Math.random() * 10);
      this._fruitsAvailable = addFruits;
    }
  }

  // Get some fruits
  harvest () {
    if (this._fruitsAvailable !== 0) {
      let good = [];
      let bad = [];
      for (let i = 1; i <= this._fruitsAvailable; i++) {
        let mangoQuality = new Mango;
        if (mangoQuality.quality === "Good") {
          good.push("Good");
        } else {
          bad.push("Bad");
        }
      }
      this._harvested = this._fruitsAvailable + " " + `(${good.length} good, ${bad.length} bad)`;
    } else {
      this._harvested = this._fruitsAvailable;
    }
  }
}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.randomQuality()
  }
  randomQuality() {
    let qualities = ['Good', 'Bad'];
    return qualities[Math.round(Math.random() * 1)]
  }
}
let mango = new Mango;

  // driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log("The tree has met its end")

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
