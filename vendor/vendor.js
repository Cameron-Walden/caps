'use strict';

const client = require('socket.io-client');
const socket = client('http://localhost:3030');
const faker = require('faker');

socket.emit('pickup', {
  store: faker.company.companyName(),
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
});

socket.on('delivered', (payload) => {
  console.log('Thank You for the safe delivery!', payload)
});

//////////////////////////////////////////

// vendorPackage.on('delivered', (payload) => {
//   console.log('Thank you for the safe delivery!', payload);
// });

// vendorPackage.on('order', () => {

//   vendorPackage.emit('pickup', {
//     event: 'pickup',
//     time: faker.date.soon(),
//     payload: {
//       store: faker.company.companyName(),
//       orderId: faker.datatype.uuid(),
//       customer: faker.name.findName(),
//       address: faker.address.streetAddress(),
//     }
//   });
// });

// vendorPackage.emit('order', {
//   store: faker.company.companyName(),
//   orderId: faker.datatype.uuid(),
//   customer: faker.name.findName(),
//   address: faker.address.streetAddress(),
// });

// phase 2:

//1
// connects to the CAPS Application Server using socket.io-client:
// Make sure your module connects using the caps namespace.
//Upon connection, use a Vendor ID to join a room, this can be a store name.


//2
// Upon connection, simulate a new customer order:
// Create a payload object with your store id, order id, customer name, address.
// Emit that message to the CAPS server with an event called pickup.

//3
// Listen for the delivered event coming in from the CAPS server.
// Log “thank you for delivering payload.id to the console.

//4
// After the delivery event has been received, exit the application using process.exit()