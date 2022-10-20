class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.candies = [];
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  getTotalPrice() {
    let total = 0
    this.candies.forEach(i => total += i.getPrice());
    return total
  }
}

module.exports = {Candy, ShoppingBasket};