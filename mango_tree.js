"use strict"

class FruitTree {
  constructor () {
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

  get jenis() {
    return new Fruit()
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

class Fruit {
  constructor () {
    this._quality = this.quality()
  }
  quality() {
    let state = ['good' ,'bad']
    return state[Math.floor(Math.random() * state.length)]
  }
}

class MangoTree extends FruitTree {
  constructor(){
    super()
    this._mature  = 3
    this._maxHeightAge = 6
    this._maxHeight = 5
    this._died = 10
  }

  get jenis(){
    return new Mango()
  }
}

class Mango extends Fruit {}

let mangoTree = new MangoTree()
console.log(`~~~~~~~~~~~Mango tree is growing~~~~~~~~~~~~`)
do {
  mangoTree.grow();
  mangoTree.produce();
  // console.log(mangoTree)
  mangoTree.harvest();
  // console.log(mangoTree)
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log(`Mango tree has meet its end.`)


class AppleTree extends FruitTree {
  constructor(){
    super()
    this._mature  = 4
    this._maxHeightAge = 8
    this._maxHeight = 3
    this._died = 15
  }

  get jenis(){
    return new Apple()
  }
}

class Apple extends Fruit {}

let appleTree = new AppleTree()
console.log(`~~~~~~~~~~Apple tree is growing~~~~~~~~~~~`)
do {
  appleTree.grow();
  appleTree.produce();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log(`Apple tree has meet its end.`)

class PearTree extends FruitTree {
  constructor(){
    super()
    this._mature  = 2
    this._maxHeightAge = 5
    this._maxHeight = 2
    this._died = 8
  }

  get jenis(){
    return new Pear()
  }
}

class Pear extends Fruit {}

let pearTree = new PearTree()
console.log(`~~~~~~~~~~~Pear tree is growing~~~~~~~~~~~`)
do {
  pearTree.grow();
  pearTree.produce();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log(`Pear tree has meet its end.`)
