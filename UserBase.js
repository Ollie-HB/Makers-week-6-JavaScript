const User = require('./User');

class UserBase {
  constructor(array) {
    this.array = array;
  }

  count() {
    return this.array.length;
  }
  
  getNames() {
    return this.array.map((name) => {
      return name.getName();
    })
  }
  
  getIntroductions() {
    return this.array.map((name) => {
      return name.getIntroduction();
    })
  }
}

module.exports = UserBase;