class Fruit {
    // Produce a fruit
    constructor () {
      this._quality = this.randomQuality()
    }
  
    set quality (val) {
      this._quality = val
    }
  
    randomQuality () {
      let random = Math.round(Math.random())
      return random === 1 ? this.quality = 'good': this.quality = 'bad'
    //   if (random === 1) {
    //     return this.quality = 'good'
    //   } else {
        
    //   }
    }
  
  }

  module.exports = Fruit