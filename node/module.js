class User {
  constructor() {}

  init() {
    console.log('Hallo seiteneffekt');
  }

  static sideEffect() {
    console.log('Hallo seiteneffekt');
  }
}

module.exports = User;
