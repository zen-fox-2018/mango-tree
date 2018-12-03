class Fruit {
    // Produce a mango
    constructor () {
      this.quality = this.generateQuality()
    }
    generateQuality() {
      const quality = ["Bad","Good"]
      const random = Math.floor(Math.random()*quality.length)
      return quality[random]
    }
  }

  module.exports = Fruit