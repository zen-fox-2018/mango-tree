"use strict"



class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = ''
    this._matureAge = 5
    this._maxAge =20
    this._maxHeight = 5.6
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
  get maxHeight(){
    return this._maxHeight
  }

  // Get current states here

  // Grow the tree
  grow () {
   
    let randomHeight = Math.random() * 1
    
    this._height += randomHeight
    
    this._age += 1

    if(this._height >= this.maxHeight){
      this._height = this.maxHeight
    }

    if(this._maxAge == this._age){
      this._healthStatus = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes () {
    if(this.age >= this.matureAge){
    let randomFruits = ~~(Math.random() * 9) + 1
    for(let i = 0; i < randomFruits; i++){
      this._fruits.push(new Fruit())
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
class Fruit {
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




class MangoTree extends FruitTree {}

class Mango extends Fruit{}



class AppleTree extends FruitTree{
  constructor(){
    super()
    this._matureAge = 8
    this._maxAge = 30
    this._maxHeight = 7.8
  }
  produceMangoes () {
    if(this.age >= this.matureAge){
    let randomFruits = ~~(Math.random() * 9) + 1
    for(let i = 0; i < randomFruits; i++){
      this._fruits.push(new Apple())
    }
  }
    return this._fruits
  }
}
class Apple extends Fruit {}



   //driver code untuk release 0
   let mangoTree = new MangoTree()
   console.log('This mangga')
   console.log(`The tree is alive! :smile: `)
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
   console.log(`The tree has met its end. :sad:`)

   let appleTree = new AppleTree()
   console.log('This Apple')
   console.log(`The tree is alive! :smile: `)
   do {
     appleTree.grow();
     appleTree.produceMangoes();
     appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthStatus != false)
   console.log(`The tree has met its end. :sad:`)
