const MangoTree = require("./mangoTree");
const FruitTree = require("./fruit_tree");
const AppleTree = require("./apple");


console.log("======= F R U I T  T R E E =======")
let fruitTree = new FruitTree()
do {
  fruitTree.grow();
  fruitTree.produceFruits();
  fruitTree.harvest();
 console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
} while (fruitTree.healthStatus != false)

console.log("======== A P P L E ===========")
let appleTree = new AppleTree();
do {
  console.log(appleTree.grow());
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
  console.log("the tree has met its end! Bye bye Mr. Apple")

console.log("======= M A N G O =======")
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
 console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)