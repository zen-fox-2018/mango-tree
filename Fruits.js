class Fruits {
    constructor () {
        this.quality = this.qualityCheck()
      }
      qualityCheck() {
        let quality = ['good', 'bad']
        return quality[Math.floor(Math.random() * quality.length)]
      }
}

class Apple extends Fruits {
    constructor() {
        super()
    }
}

class Mango extends Fruits {
    constructor() {
        super()
    }
}

module.exports = {Fruits, Apple, Mango}