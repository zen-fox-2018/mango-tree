"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = ''
    this._matureAge = 5
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
    return this._healthStatus
  }
  get matureAge(){
    return this._matureAge
  }
  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    let maxHeight = 4.8
    let randomHeight = Math.random() * 1
    
    let maxAge = 20
    this._height += randomHeight
    
    this._age += 1

    if(this._height >= maxHeight){
      this._height = maxHeight
    }

    if(maxAge == this._age){
      this._healthStatus = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes () {
    if(this.age >= this.matureAge){
    let randomFruits = ~~(Math.random() * 9) + 1
    for(let i = 0; i < randomFruits; i++){
      this._fruits.push(new Mango())
    }
  }
    return this._fruits
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    let total = 0
    for(let i = 0 ; i < this._fruits.length; i++){
      total += 1
      if(this._fruits[i].quality == 'good'){
        good++
      }else{
        bad++
      }
    }
    this._harvested = `${total} (${good} good, ${bad} bad)`
    this._fruits = []
  }
}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.randomQuality()
  }
  randomQuality(){
    let random = ~~(Math.random() * 2) 
    let quality = ['good','bad']
    if(random == 0) {
      return quality[0]
    }else{
      return quality[1]
    }
  }
}



   //driver code untuk release 0
   let mangoTree = new MangoTree()
   console.log(`The tree is alive! :smile: `)
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
   console.log(`The tree has met its end. :sad:`)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
