class ShoppingBasket {
  constructor() {
    this.candies = [];
    this.discount = 0;
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let total = 0
    this.candies.forEach(i => total += i.getPrice());
    return total - this.discount
  }
}

module.exports = ShoppingBasket;