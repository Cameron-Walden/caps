'use strict';

const driver = require('../driver/driver.js');
const vendorPackage = require('../events/events.js');

// 1. As a vendor, I want to alert the system when I have a package to be picked up.
const input = process.argv[2];
const eventId = Math.floor(Math.random() * 1000000);

vendorPackage.on('events',(payload) => {
  console.log('Message receieved by: ', payload)
});

// 4. as a driver, I want to alert the system when a vendorPackage has been delivered.
// 5. As a vendor, I want to be notified when my vendorPackage has been delivered.
//this is the mesg the vndr sends to driver when pack is delvrd

vendorPackage.on('events', (payload) => {
  console.log('Thank you for the delivery!', payload);
});

