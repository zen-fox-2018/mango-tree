class Mango {
    // Produce a mango
    constructor () {
      this.quality = this.qualityCheck();
    }
  
    qualityCheck() {
      let quality = ["Good", "Bad"];
      let randomize = quality[Math.floor(Math.random()*Math.floor(quality.length))];
  
      return randomize
    }
}

module.exports = Mango
