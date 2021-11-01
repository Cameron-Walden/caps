'use strict';

const vendor = require('../vendor/vendor.js');
const vendorPackage = require('../events/events.js');

const input = process.argv[2];
const orderId = Math.floor(Math.random() * 1000000);
const faker = require('faker');

// 2. As a driver, I want to be notified when there is a package to be delivered.
vendorPackage.on('events',(payload) => {
    let clientId = Math.floor(Math.random() * 1000000);
    // 3. As a driver, I want to alert the system when I have picked up a vendorPackage and it is in transit
  console.log('Driver was alerted and is on their way!', payload);


  // vendorPackage.emit('received', {clientId});
  vendorPackage.emit('received', {clientId});
});

// vendorPackage.emit('events', {
//   text: input,
//   id: orderId,
// });

vendorPackage.emit('events', {
  store: faker.company.companyName(),
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
});
