const Thermostat = require("./thermostat");

describe('Thermostat', () => {
  it('returns temperature of 20 upon startup', () => {
    let thermo = new Thermostat();
    expect(thermo.getTemperature()).toEqual(20);
  })

  it('adds one to temperature when up is called', () => {
    let thermo = new Thermostat();
    thermo.up()
    expect(thermo.getTemperature()).toEqual(21);
  })

it('reduces temperature by one when down is called', () => {
  let thermo = new Thermostat();
  thermo.down()
  expect(thermo.getTemperature()).toEqual(19);
})

it('temperature can go up and down', () => {
  let thermo = new Thermostat();
  thermo.up()
  thermo.up()
  thermo.down()
  thermo.up()
  expect(thermo.getTemperature()).toEqual(22);
})

it('temperature cannot drop below 10', () => {
  let thermo = new Thermostat();
  for (let i = 0 ; i < 12 ; i++) {
    thermo.down();
  };
  expect(thermo.getTemperature()).toEqual(10);
})


it('initialises with power saving on', () => {
  let thermo = new Thermostat();
  expect(thermo.powerSave).toEqual(true)
})

it('temperature cannot exceed 25 when power saving mode is on', () => {
  let thermo = new Thermostat();
  for (let i = 0 ; i < 10 ; i++) {
    thermo.up();
  };
  expect(thermo.getTemperature()).toEqual(25);
})

it('temperature cannot exceed 32 when power saving mode is off', () => {
  let thermo = new Thermostat();
  thermo.setPowerSavingMode(false);
  for (let i = 0 ; i < 15 ; i++) {
    thermo.up();
  };
  expect(thermo.getTemperature()).toEqual(32);
})

it('can turn power saving mode on and off', () => {
  let thermo = new Thermostat();
  thermo.setPowerSavingMode(false);
  for (let i = 0 ; i < 15 ; i++) {
    thermo.up();
  };
  expect(thermo.getTemperature()).toEqual(32);
})

it('can reset the temperature to 20', () => {
  let thermo = new Thermostat();
  thermo.up()
  thermo.up()
  thermo.reset()
  expect(thermo.getTemperature()).toEqual(20);
})

it('returns low energy usage reading if temperature is <18', () => {
  let thermo = new Thermostat();
  thermo.down()
  thermo.down()
  thermo.down()
  expect(thermo.getTemperature()).toEqual(17);
  expect(thermo.getEnergyUsage()).toEqual('Low');
})

it('returns medium energy usage reading if temperature is >18 and <=25', () => {
  let thermo = new Thermostat();
  for (let i = 0 ; i < 5 ; i++) {
    thermo.up();
  };
  expect(thermo.getTemperature()).toEqual(25);
  expect(thermo.getEnergyUsage()).toEqual('Medium');
})

it('returns high energy usage reading if temperature is >25', () => {
  let thermo = new Thermostat();
  thermo.setPowerSavingMode(false);
  for (let i = 0 ; i < 10 ; i++) {
    thermo.up();
  };
  expect(thermo.getTemperature()).toEqual(30);
  expect(thermo.getEnergyUsage()).toEqual('High');
})
})