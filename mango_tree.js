"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._getHealthStatus = true;
    this._harvested = 0;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    return this._getHealthStatus;
  }

  get harvested() {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow() {
    let matureAge = 4;
    let dyingAge = 20;
    let stopGrowingAge = 15;

    //age++
    this._age += 1;

    //height++
    if (this._age < stopGrowingAge) {
      let randomHeight = Math.floor(Math.random() * 5);
      this._height += Number(randomHeight);
    }

    if (this._age % matureAge === 0) {
      this._harvested = this.harvest();
    }

    if (this._age >= dyingAge) {
      this._getHealthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let fruits = Math.ceil(Math.random() * 10);
    for (let i = 0; i < fruits; i++) {
      let newMango = new Mango();
      this._fruits.push(newMango);
    }
    return this._fruits;
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    let total = 0;
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality === 'good') {
        good += 1;
      } else {
        bad += 1;
      }
      total++;
    }
    this._harvested = `${total} (${good} good, ${bad} bad)`;
    this._fruits = [];
    return this._harvested;
  }
}

class Mango {
  constructor() {
    this.quality = this.mQualities();
  }

  mQualities() {
    let random = Math.round(Math.random());
    if (random === 0) {
      return 'bad';
    } else if (random === 1) {
      return 'good';
    }
  }
}

console.log('The tree is alive! :)');
let tree = new MangoTree()
do {
  tree.grow();
  tree.produceMangoes();
  tree.harvest();
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
} while (tree.healthStatus != false)
console.log('This tree has given its best, may it rest in peace');


/**
  * driver code untuk release 0
  * console.log('The tree is alive! :)');
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  * console.log('This tree has given its best, may it rest in peace');
  */







// Release 1
class AppleTree { }
class Apple { }

// Release 2
class FruitTree { }
class Fruit { }
