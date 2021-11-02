'use strict';

const vendor = require('../vendor/vendor.js');
const vendorPackage = require('../events/events.js');

const input = process.argv[2];
const faker = require('faker');

    vendorPackage.on('pickup', (payload) => {
    
      console.log(`Your package has been picked up and is now out for delivery.`, payload)
    
      vendorPackage.emit('in-transit', {
        event: 'in-transit',
        time: faker.date.soon(),
        payload: {
          store: faker.company.companyName(),
          orderId: faker.datatype.uuid(),
          customer: faker.name.findName(),
          address: faker.address.streetAddress(),
        }
      });
    });

    vendorPackage.on('in-transit', (payload) => {

      console.log(`Your driver ${faker.name.findName()} has delivered the order!`, payload)
    
      vendorPackage.emit('delivered', {
        event: 'delivered',
        time: faker.date.soon(),
        payload: {
          store: faker.company.companyName(),
          orderId: faker.datatype.uuid(),
          customer: faker.name.findName(),
          address: faker.address.streetAddress(),
        }
      });
    });