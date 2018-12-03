"use strict"

class FruitTree {
  constructor (growingHeight, oldAge, matureAge, dyingAge, typeOfFruit){
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._getHealthStatus = true;
    this._harvested = 0;

    this.growingHeight = growingHeight;
    this.oldAge = oldAge;
    this.matureAge = matureAge;
    this.dyingAge = dyingAge;
    this.typeOfFruit = typeOfFruit;
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

  set age(input) {
    this._age += input;
    if (this._age >= this.dyingAge) {
      return this._getHealthStatus = false;
    }
  }
  set height(input) {
    if (this.age < this.oldAge) {
      this._height += Number(input);
    }
    return this._height;
  }

  grow() {
    this.age = 1;
    this.height = 2;

    if (this._age % this.matureAge === 0) {
      this._harvested = this.harvest();
    }
  }

  // Produce some mangoes
  produceFruits() {
    let fruits = Math.ceil(Math.random() * 10);
    for (let i = 0; i < fruits; i++) {
      let newFruits = new Fruit();
      this._fruits.push(newFruits);
    }
    return this._fruits;
  }

  harvest() {
    let good = 0;
    let bad = 0;
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality === 'good') {
        good += 1;
      } else {
        bad += 1;
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`;
    this._fruits = [];
    return this._harvested;
  }

}

class Fruit {
  constructor() {
    this.quality = this.qualities();
  }

  qualities() {
    let random = Math.round(Math.random());
    if (random === 0) {
      return 'bad';
    } else if (random === 1) {
      return 'good';
    }
  }
}




class MangoTree extends FruitTree {
  constructor() {
    super();
    this.height = this.growHeight();
    this.oldAge = 20;
    this.matureAge = 1;
    this.dyingAge = 25;
    this.typeOfFruit = 'mango';
    
  }

  growHeight (){
    let randomHeight = Math.floor(Math.random() * 5);
    return randomHeight;
  }
}


class AppleTree extends FruitTree {
  constructor() {
    super();
    this.height = this.growHeight();
    this.oldAge = 17;
    this.matureAge = 2;
    this.dyingAge = 21;
    this.typeOfFruit = 'apple';
    
  }

  growHeight (){
    let randomHeight = Math.floor(Math.random() * 3);
    return randomHeight;
  }
}

class PearTree extends FruitTree {
  constructor() {
    super();
    this.height = this.growHeight();
    this.oldAge = 15;
    this.matureAge = 2;
    this.dyingAge = 25;
    this.typeOfFruit = 'pear';
    
  }

  growHeight (){
    let randomHeight = Math.floor(Math.random() * 7);
    return randomHeight;
  }
}


console.log('The tree is alive! :)');
let tree = new MangoTree()
do {
  tree.grow();
  tree.produceFruits();
  tree.harvest();
  console.log(`[Year ${tree.age} ${tree.typeOfFruit}] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
} while (tree.healthStatus != false)
console.log('This tree has given its best, may it rest in peace');


