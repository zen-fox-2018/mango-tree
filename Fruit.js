class Fruit {
  constructor () {
    this._quality = this.quality()
  }
  quality() {
    let state = ['good' ,'bad']
    return state[Math.floor(Math.random() * state.length)]
  }
}

module.exports = Fruit