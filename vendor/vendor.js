'use strict';

const driver = require('../driver/driver.js');
const vendorPackage = require('../events/events.js');
const faker = require('faker');

const input = process.argv[2];

vendorPackage.on('delivered', (payload) => {
  console.log('Thank you for the safe delivery!', payload);
});

vendorPackage.on('order', () => {

  vendorPackage.emit('pickup', {
    event: 'pickup',
    time: faker.date.soon(),
    payload: {
      store: faker.company.companyName(),
      orderId: faker.datatype.uuid(),
      customer: faker.name.findName(),
      address: faker.address.streetAddress(),
    }
  });
});

vendorPackage.emit('order', {
  store: faker.company.companyName(),
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
});