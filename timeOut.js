const printHello = () => {
  console.log('Heyo')
}

const executeAfterDElay = (delay, callbackFunction) => {
  setTimeout(callbackFunction, delay * 1000);
}

executeAfterDElay(5, printHello)

setTimeout(printHello, 3000)