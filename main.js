const MangoTree = require("./MangoTree")
const AppleTree = require("./AppleTree")
const PearTree = require("./PearTree")
let mangoTree = new MangoTree("mango")
do {
   mangoTree.grow();
   mangoTree.produce();
  //  console.log(mangoTree)
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus != false)
 console.log(`==== this is mango Tree live sycle ======`)

 let appleTree = new AppleTree("apple")
 console.log('===================================')
  do {
     appleTree.grow();
     appleTree.produce();
     appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}m | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthStatus != false)
   console.log(`===== this is Apple Tree live sycle ======`)

   let pearTree = new PearTree("apple")
   console.log("=======================================")
   do {
      pearTree.grow();
      pearTree.produce();
      pearTree.harvest();
      console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height}m | Fruits harvested = ${pearTree.harvested}`)
    } while (pearTree.healthStatus != false)
    console.log(`====== this is Pear Tree live sycle =======`)
 