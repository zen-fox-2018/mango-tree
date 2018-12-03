// driver code untuk release 0
const MangoTree = require('./MangoTree')
const AppleTree = require('./AppleTree')
const PearTree = require('./PearTree')

console.log(`The Mango tree is alive! :smile:`);
let mangoTree = new MangoTree(5, 15, 20)
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log(`The Mango tree has met its end. :sad:` + '\n');

console.log(`The Apple tree is alive! :smile:`);
let appleTree = new AppleTree(5, 10, 15)
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log(`The Apple tree has met its end. :sad:` + '\n');

console.log(`The Pear tree is alive! :smile:`);
let pearTree = new PearTree(3, 5, 10)
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log(`The Pear tree has met its end. :sad:` + '\n');