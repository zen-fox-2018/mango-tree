"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 10;
    this._fruits = [];
    this._matureAge = 20;
    this._endAge = 25;
    this._healthStatus = true;
    this._harvested = "";
    this._goodQuality = 0;
    this._badQuality = 0;
  }
  
  set age(num) {
    this._age += num
  }
  get age() {
    return this._age
  }


  get height () {
    return this._height
  }

  set height(num) {
    this._height += num
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }
  
  // set healthStatus(stats) {
  //   this._healthStatus = stats
  // }
  
  get harvested () {
    return this._harvested
    
  }

  // set harvested(plant) {
  //   this._harvested = plant
  // }

  // Get current states here
  getFruits() {
    let fruitsQuality = new Mango();

    return fruitsQuality
  }

  // Grow the tree
  grow () {

    if (this._age === this._endAge){
      this._healthStatus = false;
    }
    
    this._age = 1;
    let random = `${Math.floor(Math.random()*(this._endAge - this._age))/10} M`
    this._height = random;
    // min = this._ age max = this._matureAge
  }

  produceMangoes () {
    // Produce some mangoes
    let randomFruit = Math.floor(Math.random()*5);
    for(let i = 0; i < randomFruit; i++) {
      this._fruits[i] = this.getFruits()
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
    this._harvested = `${this._goodQuality+this._badQuality} (${this._goodQuality} good, ${this._badQuality} bad)`
  }
}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.qualityCheck();
  }

  qualityCheck() {
    let quality = ["Good", "Bad"];
    let randomize = quality[Math.floor(Math.random()*Math.floor(quality.length))];

    return randomize
  }
}


//  driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)

  // mangoTree.getFruits()

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}