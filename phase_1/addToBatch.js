const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  }

  return array.concat(number);
}

addToBatch([1, 2, 3, 4, 5, 6], 5)
