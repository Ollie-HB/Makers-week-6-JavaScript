const ShoppingBasket = require("./shoppingBasket");

describe('ShoppingBasket', () => {
  it('returns 0 as total price when basket is empty', () => {
    let basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  })

  it('adds a single item to an empty basket', () => {
    const candyDouble = {getPrice: () => 4.50};
    let basket = new ShoppingBasket();
    basket.addItem(candyDouble)
    expect(basket.getTotalPrice()).toEqual(4.50);
  })

  it('adds multiple items to the basket', () => {
    const candyDouble = {getPrice: () => 3.00};
    const candyDouble2 = {getPrice: () => 2.50};
    let basket = new ShoppingBasket();
    basket.addItem(candyDouble)
    basket.addItem(candyDouble2)
    expect(basket.getTotalPrice()).toEqual(5.50);
  })

  it('returns price of basket with discount', () => {
    const candyDouble = {getPrice: () => 3.00};
    const candyDouble2 = {getPrice: () => 2.50};
    let basket = new ShoppingBasket();
    basket.addItem(candyDouble)
    basket.addItem(candyDouble2)
    basket.applyDiscount(1)
    expect(basket.getTotalPrice()).toEqual(4.50);
  })
})



  