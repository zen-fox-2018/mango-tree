class Fruit {
    constructor() {
        this.quality = this.getQuality()
    }

    getQuality() {
        let qualityArr = [`GOOD`, `BAD`]
        return qualityArr[Math.floor(Math.random() * qualityArr.length)]
    } 
}

module.exports = Fruit