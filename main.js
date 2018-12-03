
const MangoTree = require('./MangoTree')
const AppleTree = require('./AppleTree')
const PearTree = require('./PearTree')

let mangoTree = new MangoTree()
console.log(`~~~~~~~~~~~~~~~~Mango tree is growing~~~~~~~~~~~~~~~~~`)
do {
  mangoTree.grow();
  mangoTree.produce();
  // console.log(mangoTree)
  mangoTree.harvest();
  // console.log(mangoTree)
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log(`Mango tree has meet its end.`)


let appleTree = new AppleTree()
console.log(`~~~~~~~~~~~~~~~Apple tree is growing~~~~~~~~~~~~~~~~`)
do {
  appleTree.grow();
  appleTree.produce();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log(`Apple tree has meet its end.`)

let pearTree = new PearTree()
console.log(`~~~~~~~~~~~~~~~~Pear tree is growing~~~~~~~~~~~~~~~~`)
do {
  pearTree.grow();
  pearTree.produce();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log(`Pear tree has meet its end.`)
