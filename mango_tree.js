"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._heigth = 0
    this._heigth = 0
    this._fruits = 0   
    this._harvested = 0
    this._healthStatus = true
    this._deadAge = 20
    this._maturedAge = 4
    this._maxHeightAge = 12
    this._goodFruit = 0
    this._badFruit = 0
  }

  get age () {
    return this._age
  }

  get height () {
    return this._heigth
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
    this._age = this._age + 1
    if(this._age >= this._deadAge) {
      this._healthStatus = false
    }
    if(this.age > this._maxHeightAge) {
      this._heigth += 0
    } else {
      this._heigth += Math.floor((Math.random() * 0.5) + 1)
    }
    if(this._age <= this._maturedAge) {
      this._harvested += 0
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age >= this._maturedAge) {
      this._harvested = Math.floor((Math.random() * 10) + 4)
      // for(let i = 0; i < this._harvested; i++) {
      //   let fruit = new Mango()
      //   this._fruits.push(fruit)
      // }
    }
  }

  // Get some fruits
  harvest () {
    this._goodFruit = 0
    this._badFruit = 0
    for(let i = this._harvested; i > 0; i--) {
      let status = ['good', 'bad']
      let quality = status[Math.floor(Math.random() * status.length)]
      if(this._harvested > 0) {
        if(quality === 'good') {
          this._goodFruit++
        } else {
          this._badFruit++
        }
      }
    }
  }
}

let mangoTree = new MangoTree()


console.log('The tree is alive! :smile:')
do {
  mangoTree.grow()
  mangoTree.produceMangoes()
  mangoTree.harvest()
  console.log(`[Year ${mangoTree._age} Report] Heigth = ${mangoTree._heigth} m | Fruits harvested = ${mangoTree._harvested} (${mangoTree._goodFruit} good, ${mangoTree._badFruit} bad)`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its maker! :sad:')

// class Mango {
//   // Produce a mango
//   constructor () {
//     this.quality = this.qualityCheck()
//   }
//   qualityCheck() {
//     let quality = ['good', 'bad']
//     return quality[Math.floor(Math.random() * quality.length)]
//   }
// }


// let mango1 = new Mango()
// console.log(mango1)
/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */


//  const buah = new MangoTree()
//  console.log(buah)
//  console.log(buah.healthStatus())
// Release 1
// class AppleTree {}
// class Apple {}


// Release 2
// class FruitTree {}
// class Fruit {}
