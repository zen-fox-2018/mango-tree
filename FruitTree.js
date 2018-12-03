"use strict"
const Fruit = require('./Fruit')
// const Pear = require('./Pear')
class FruitTree {
  constructor () {
    this.name = 'fruit'
    this._age = 0
    this._height = 0 
    this._fruits = []
    this._harvested = ``
    this._healthStatus = true
    this._mature  = 4
    this._maxHeightAge = 5
    this._maxHeight = 4
    this._died = 6
  }

  set age(num) {
    this._age = num
  }
  get age () {
    return this._age
  }

  set height(num) {
    this._height = num
  }
  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  set healthStatus(status) {
    this._healthStatus = status
  }
  get healthStatus () {
    return this._healthStatus
  }

  set harvested(str) {
   this._harvested = str
  }
  get harvested () {
    return this._harvested
  }

  grow () {
    this.age += 1
    if (this._age == this._died) {
      this.healthStatus = false
    } else if (this.age <= this._maxHeightAge ) {
      this.height += Math.random() * this._maxHeight
    }
  }

  produce () {
    this.harvested = ''
    if (this.age >= this._mature) {
      let num = Math.floor(Math.random() * 8)
      for (let i = 0; i < num; i++) {      
        this._fruits.push(new Fruit())  
      }
    } 

    //Factory method
    // let buah = new Fruit()
    // if (this.name == 'mango') {
    //   buah = new Mango()
    // } else if (this.name == 'apple') {
    //   buah = new Apple()
    // } else if (this.name == 'pear') {
    //   buah = new Pear()
    // } 
    // if (this.age >= this._mature) {
    //   let num = Math.floor(Math.random() * 8)
    //   for (let i = 0; i < num; i++) {      
    //     this._fruits.push(buah)  
    //   }
    // } 

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

module.exports = FruitTree