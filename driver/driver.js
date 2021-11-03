'use strict';

const client = require('socket.io-client');
const socket = client('http://localhost:3030');
const faker = require('faker');

socket.on('pickup', (payload) => {
    
      console.log(`Your package has been picked up and is now out for delivery.`, payload)
    
      socket.emit('in-transit', {
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

    // socket.emit('delivered', (payload))

////////////////////////////////////////////////////////////
    // vendorPackage.on('pickup', (payload) => {
    
    //   console.log(`Your package has been picked up and is now out for delivery.`, payload)
    
    //   vendorPackage.emit('in-transit', {
    //     event: 'in-transit',
    //     time: faker.date.soon(),
    //     payload: {
    //       store: faker.company.companyName(),
    //       orderId: faker.datatype.uuid(),
    //       customer: faker.name.findName(),
    //       address: faker.address.streetAddress(),
    //     }
    //   });
    // });

    // vendorPackage.on('in-transit', (payload) => {

    //   console.log(`Your driver ${faker.name.findName()} has delivered the order!`, payload)
    
    //   vendorPackage.emit('delivered', {
    //     event: 'delivered',
    //     time: faker.date.soon(),
    //     payload: {
    //       store: faker.company.companyName(),
    //       orderId: faker.datatype.uuid(),
    //       customer: faker.name.findName(),
    //       address: faker.address.streetAddress(),
    //     }
    //   });
    // });

//phase 2:

//1
// Connects to the CAPS Application Server using socket.io-client:
// Make sure this module is using the caps namespace to connect to the Server.

//2
// Once connected, the Driver client module should listen for any appropriate events from the Server:
// When a pickup is emitted from the Server, simulate all specified Driver behaviors.

//3
// Simulate the following events and emit payloads to the CAPS Application Server upon receiving a “pickup” event:
// in-transit
// Log “picking up payload.id” to the console.
// emit an in-transit event to the CAPS server with the payload.

// delivered
// emit a delivered event to the CAPS server with the payload.

//4.
// When running, the vendor and driver consoles should show their own logs. Additionally, the CAPS server should be logging everything.

