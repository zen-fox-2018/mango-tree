"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this.diedAge = 20
    this._age = 0
    this.matureAge = 1
    this.stopGrow = 19
    this._height = 0
    this._fruits = 0
    this._harvested = ''
  
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    if(this.age < this.diedAge) {
      return true
    }else{
      return false
    }
  }

  get harvested () {
    return this._harvested
  }

  

  // Get current states here

  // Grow the tree
  grow () {
   let randomHeight = (Math.random()* 1).toFixed(0)
   this._height += Number(randomHeight)
   this._age+=1
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age >= this.matureAge && this.age < this.diedAge){
      let randomFruits = Math.floor(Math.random()*10)
      this._fruits = randomFruits
    }
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for(let i = 0; i < this._fruits; i++) {
      let random = new Mango()
      if(random.quality == 'good') {
        good++
      }else{
        bad++
      }
    }
    this._harvested = `${bad + good}) (${good} good, ${bad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.decideQuality()
  }

  decideQuality (){
    let arr = ['good', 'bad']
    let randomFruits = Math.floor(Math.random()*2)
    return arr[randomFruits]
  }

  
}

console.log(`the tree is alive! : smile:`)
   //driver code untuk release 0
   let mangoTree = new MangoTree()
    do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
    } while (mangoTree.healthStatus != false)

console.log(`The tree has met its end. :sad:`)


// Release 1
class AppleTree {
  constructor () {
    this.diedAge = 25
    this._age = 0
    this.matureAge = 1
    this.stopGrow = 24
    this._height = 0
    this._fruits = 0
    this._harvested = ''
  
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    if(this.age < this.diedAge) {
      return true
    }else{
      return false
    }
  }

  get harvested () {
    return this._harvested
  }

  

  // Get current states here

  // Grow the tree
  grow () {
   let randomHeight = (Math.random()* 1).toFixed(0)
   this._height += Number(randomHeight)
   this._age+=1
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age >= this.matureAge && this.age < this.diedAge){
      let randomFruits = Math.floor(Math.random()*10)
      this._fruits = randomFruits
    }
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for(let i = 0; i < this._fruits; i++) {
      let random = new Apple()
      if(random.quality == 'good') {
        good++
      }else{
        bad++
      }
    }
    this._harvested = `${bad + good}) (${good} good, ${bad} bad)`
  }
}
class Apple {
  constructor () {
    this.quality = this.decideQuality()
  }

  decideQuality (){
    let arr = ['good', 'bad']
    let randomFruits = Math.floor(Math.random()*2)
    return arr[randomFruits]
  }

}
console.log(``)
console.log(`the tree is alive! : smile:`)
   //driver code untuk release 0
   let appleTree = new AppleTree()
    do {
      appleTree.grow();
      appleTree.produceMangoes();
      appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
    } while (appleTree.healthStatus != false)

console.log(`The tree has met its end. :sad:`)


// Release 2
class FruitTree {
  constructor (diedAge, matureAge,stopGrow) {
    this.diedAge = diedAge
    this._age = 0
    this.matureAge = matureAge
    this.stopGrow = stopGrow
    this._height = 0
    this._fruits = 0
    this._harvested = ''
  
  }
  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    if(this.age < this.diedAge) {
      return true
    }else{
      return false
    }
  }

  get harvested () {
    return this._harvested
  }

  grow () {
   let randomHeight = (Math.random()* 1).toFixed(0)
   this._height += Number(randomHeight)
   this._age+=1
  }

  produceMangoes () {
    if(this._age >= this.matureAge && this.age < this.diedAge){
      let randomFruits = Math.floor(Math.random()*10)
      this._fruits = randomFruits
    }
  }

  harvest () {
    let good = 0
    let bad = 0
    for(let i = 0; i < this._fruits; i++) {
      let random = new Apple()
      if(random.quality == 'good') {
        good++
      }else{
        bad++
      }
    }
    this._harvested = `${bad + good}) (${good} good, ${bad} bad)`
  }

}
class Fruit {
  constructor () {
    this.quality = this.decideQuality()
  }

  decideQuality (){
    let arr = ['good', 'bad']
    let randomFruits = Math.floor(Math.random()*2)
    return arr[randomFruits]
  }
}


class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor () {
    super(20,1,19)
  
  }

}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super()
  }
}

class AppleTree extends FruitTree {

  // Initialize a new MangoTree
  constructor () {
    super(25,1,24)
  
  }

}

class Apple extends Fruit {
  // Produce a mango
  constructor () {
    super()
  }

}

console.log(`the tree is alive! : smile:`)
   //driver code untuk release 0
   let appleTree = new AppleTree()
    do {
    appleTree.grow();
    appleTree.produceMangoes();
    appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
    } while (appleTree.healthStatus != false)

console.log(`The tree has met its end. :sad:`)



