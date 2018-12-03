"use strict"

// Release 0

class MangoTree {

  
  constructor () {
    this._age = 0
    this._height = 0
    this._fruitProduce = []
    this._harvested = ''
    this._healthStatus = true
    this._matureAge = 5
  }
 
  get age () {
    return this._age
  }
 

  get height () {
    return this._height
  }
  get mature() {
    return this._matureAge
  }
 
  get fruits () {
    return this._fruitProduce
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
      let maxAge =  20
      let maxHeight =  4.8
      let randomHeight =  Math.random()*1

      this._age += 1
      this._height += randomHeight
      if(this._height >=  maxHeight){
        this._height = maxHeight
        this._healthStatus =  false
      }

      if(this._age >= maxAge){
        this._healthStatus =  false
      }
   
    return this
  }

  // Produce some mangoes
  produceMangoes () {
    let randomProd = Math.ceil(Math.random()*10)
    if(this.age >= this.mature){
    for(let i = 0; i < randomProd; i++){
      this._fruitProduce.push(new Mango())
    }
    return this._fruitProduce
  }
  }

  // Get some fruitslet
  harvest () {
    let good = 0
    let bad = 0
    let total = 0
    for(let i = 0; i < this._fruitProduce.length;i++){
      if(this._fruitProduce[i].condition == 'good'){
        good++
        total++
      }else{
        bad++
        total++
      }
    }
    this._harvested = `${total} (${good} good, ${bad} bad)`
    this._fruitProduce = []
  }

}  //class edge

class Mango {
  // Produce a mango
  constructor () {
    this.condition = this.randomCondition()
  }
  randomCondition (){
    let con = ['good','bad']
    let random = Math.floor(Math.random()*2)
    let producedFruit =  con[random]
    return producedFruit
  }
}

// driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
 console.log("the tree has met it's end")

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
