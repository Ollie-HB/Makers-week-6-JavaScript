// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const generateMessages = (names) => {
//   return names.map((name) => {
//   return `Hi ${name}! 50% off our best candies for you today!`;
// });
// }

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (nameDiscountData) => {
  return nameDiscountData.map(({name, discount}) => {
  return `Hi ${name}! ${discount}% off our best candies for you today!`;
});
}

module.exports = {
  generateMessages : generateMessages
}