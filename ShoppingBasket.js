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
    this.total = 0
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  getTotalPrice() {
    this.total = 0
    this.candies.forEach(i => this.total += i.getPrice());
    return this.total
  }
}

module.exports = {Candy, ShoppingBasket};