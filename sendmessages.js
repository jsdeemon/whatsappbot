// file system 
const fs = require('fs')
// basic imports
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client(); 

const randomIntFromInterval = require('./utils/random')


// initializing text file with client contact numbers
var clientNumbers = fs.createWriteStream('numbers.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })

  // getting adver message from txt file
  var advertMessage = fs.createWriteStream('./messages/advertmsg.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })


  if (clientNumbers.length) {
    let delay = randomIntFromInterval(10000, 50000)
    for (let i = 0; i < clientNumbers.length - 1; i++) {

        setTimeout(function() {
            client.sendMessage(clientNumbers[i], advertMessage);
        }, delay)

      
      }
  }

 



