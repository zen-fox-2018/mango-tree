"use strict"
// Release 2
class FruitTree {
  // Initialize a new MangoTree
  constructor (endAge, matureAge, stopGrow) {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthStatus = true;
    this._harvested = '';
    this._endAge = endAge;
    this._matureAge = matureAge;
    this._stopGrow = stopGrow;
  }

  get age () {
    return this._age;
  }

  get height () {
    return +this._height.toFixed(1);
  }

  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  get endAge () {
    return this._endAge;
  }

  get matureAge () {
    return this._matureAge;
  }

  get stopGrow () {
    return this._stopGrow;
  }
  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1;
      this.age <= this.stopGrow ? this._height += Math.random() : false;
      this.age === this.endAge ? this._healthStatus = false : false;
  }

  // Produce some mangoes
  produceFruits () {
    if (this.age >= this.matureAge) {
        let jumlah = Math.ceil(Math.random() * 20);
        for (var i = 0; i < jumlah; i++) {
            let fruit = new Fruits();
            this._fruits.push(fruit);
        }
    }
  }

  // Get some fruits
  harvest () {
    let good = 0;
    let bad = 0;
    let total = 0;
    for (let i = 0; i < this.fruits.length; i++) {
        total++;
        if(this.fruits[i].quality === 'good'){
            good++;
        } else {
            bad++;
        }
    }
    this._fruits = [];
    this._harvested =  `${total} (${good} good, ${bad} bad)`;
  }

}

class Fruits {
  // Produce a mango
  constructor () {
    this.quality = this.randomQuality();
  }

  randomQuality(){
    let result = '';
    let random = Math.round(Math.random());
    random === 0 ? result = 'good' : result = 'bad';
    return result;
  }
}

// Release 0

class MangoTree  extends FruitTree{
  constructor(endAge, matureAge, stopGrow) {
    super(endAge, matureAge, stopGrow);
  }

  produceFruits () {
    if (this.age >= this.matureAge) {
        let jumlah = Math.ceil(Math.random() * 20);
        for (var i = 0; i < jumlah; i++) {
            let mangoFruit = new Mango();
            this._fruits.push(mangoFruit);
        }
    }
  }
}

class Mango extends Fruits {
  constructor() {
    super();
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree(20, 4, 15)
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

console.log(`The tree has met its end. :sad:`);

// Release 1

class AppleTree  extends FruitTree{
  constructor(endAge, matureAge, stopGrow) {
    super(endAge, matureAge, stopGrow);
  }

  produceFruits () {
    if (this.age >= this.matureAge) {
        let jumlah = Math.ceil(Math.random() * 20);
        for (var i = 0; i < jumlah; i++) {
            let appleFruit = new Apple();
            this._fruits.push(appleFruit);
        }
    }
  }
}

class Apple extends Fruits {
  constructor() {
    super();
  }
}

let appleTree = new AppleTree(15, 5, 10)
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

console.log(`The tree has met its end. :sad:`);

//Release 2
class PearTree  extends FruitTree{
  constructor(endAge, matureAge, stopGrow) {
    super(endAge, matureAge, stopGrow);
  }

  produceFruits () {
    if (this.age >= this.matureAge) {
        let jumlah = Math.ceil(Math.random() * 20);
        for (var i = 0; i < jumlah; i++) {
            let pearFruit = new Pear();
            this._fruits.push(pearFruit);
        }
    }
  }
}

class Pear extends Fruits {
  constructor() {
    super();
  }
}

let pearTree = new PearTree(15, 5, 10)
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)

console.log(`The tree has met its end. :sad:`);
