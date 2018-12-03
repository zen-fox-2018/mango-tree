"use strict"

// Release 0

class MangoTree {
  constructor () {
    this._age = 0
    this._height = 0 
    this._fruits = []
    this._harvested = ``
    this._healthStatus = true
    this._mature  = 3
    this._died = 6
  }

  set age(num) {
    return this._age = num
  }
  get age () {
    return this._age
  }

  set height(num) {
    return this._height = num
  }
  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  set healthStatus(status) {
    return this._healthStatus = status
  }
  get healthStatus () {
    return this._healthStatus
  }

  set harvested(num) {
    return this._harvested = num
  }
  get harvested () {
    return this._harvested
  }

  get jenis() {
    return new Mango()
  }

  grow () {
    this.age += 1
    if (this._age == this._died) {
      this.healthStatus = false
    } else if (this.age <= this._mature ) {
      this.height += Math.floor(Math.random() * 10)/10
    }
  }

  produceMangoes () {
    if (this.age >= this._mature) {
      let num = Math.floor(Math.random() * 8)
      for (let i = 0; i < num; i++) {      
        this._fruits.push(this.jenis)  
      }
    } 
  }

  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0; i < this._fruits.length; i++) { 
      if (this._fruits[i]._quality === 'good') {
        good++
      } else {
        bad++
      }
    }
    this.harvested = `${this._fruits.length} (${good} good , ${bad} bad)`
    this._fruits = []
  }

}

class Mango {
  constructor () {
    this._quality = this.quality()
  }
  quality() {
    let state = ['good' ,'bad']
    return state[Math.floor(Math.random() * state.length)]
  }
}


  // * driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
  
// let mangoTree = new MangoTree()
// mangoTree.grow()
// mangoTree.produceMangoes()
// console.log(mangoTree)
// mangoTree.grow()
// console.log(mangoTree)
// mangoTree.grow()
// console.log(mangoTree)
// mangoTree.grow()
// console.log(mangoTree)
// Release 1
// class AppleTree {}
// class Apple {}

// Release 2
// class FruitTree {}
// class Fruit {}
