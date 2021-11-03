'use strict';

const socketio = require('socket.io');
const client = require('socket.io-client');
const PORT = process.env.PORT || 3030;
const server = socketio(PORT);
const faker = require('faker');

server.on('connection', (socket) => {
  console.log('Socket is connected at id: ', socket.id);
  
  socket.on('pickup', (payload) => {
    console.log('Order is ready for pickup!', payload);
  });

  socket.on('pickup', (payload) => {
    console.log('The order has been picked up!', payload);
  
    server.emit('pickup', payload);
  });
  
  socket.on('in-transit', (payload) => {
    console.log(`Your driver ${faker.name.findName()} has delivered the order!`, payload)
  });
  
  socket.on('delivered', (payload) => {
    console.log('Package Delivered!', payload);
  });
});

// The Socket Server will create a namespace of caps that will receive all CAPS event traffic.

// Each Vendor and Driver Client will connect to the caps namespace.

// The server will emit specific events to each socket that is listening for their designated events from the Global Event Pool defined in the Server.

// Each Vendor will only emit and listen for specific events based on their Vendor ID. This will be managed by rooms within Socket.io.

// Each Driver will “pick up” a package when the vendor notifies the Server that an “order” is ready and simulate “in-transit” and “delivered” events.

// The expected output of the 3 running applications is the same as it was in Phase 2.