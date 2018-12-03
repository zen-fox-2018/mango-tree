"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 1
    this._height = 0.1
    this._fruits = []
    this._healthStatus = true    
    this._matureAge = 3
    this._harvested = ''
  }

  get age () {
    return this._age 
  }

  get height () {
    return `${this._height} m`
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
    this._age += 1    
    if(this.age <= 15){
      this._height += Math.floor(Math.random() * 3)
    }
    if(this.age === 20){
      this._healthStatus = false
    }
    
  }

  // Produce some mangoes
  produceMangoes () {
    if(this.age >= this._matureAge){
      let randomProduce = Math.floor(Math.random()* 5)
      for(let i =0; i < randomProduce; i++){        
        this._fruits.push(new Mango)
        
      }
    }
    return this._fruits
  }

  // Get some fruits
  harvest () {
    let counterGood = 0
    let counterBad = 0
    for ( let i = 0; i < this.fruits.length; i++) {
      // console.log(this.fruits[i])
      if (this.fruits[i].quality==='good'){
        counterGood++
      }
      else {
        counterBad++
      }
    }
    // console.log('masuk')
    this._harvested = `${this.fruits.length} (${counterGood} good, ${counterBad} bad)`

    this._fruits = []
    return this
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.kualitasBuah();    
  }

  kualitasBuah(){
    let random = ~~(Math.random()*2)
    let kualitas = ''
    if(random == 0){
      kualitas ='bad'
    }
    else {
      kualitas='good'
    }
    return kualitas
    
  }
}


  // //  driver code untuk release 0
  // console.log(`The tree is alive! :smile:`)
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
   console.log(`The tree has met its end. :sad:`)
  //  console.log(mangoTree.fruits)
  // console.log(mangoTree.produceMangoes())
  
 

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
