// file system 
const fs = require('fs')
// basic imports
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();
// messages import
// const initialMessages = require('./messages/initialMessage')
// // import functions
// const randomIntFromInterval = require('./utils/random')

const initialMessages = [

  'Hello there!',
  'How are you?',
  'Hey!',
  'Hi',
  'My greetings to you!',
  'Thank you to send me a message!',
  'Hello, this is personal assistant',
  "Nice to hear from you",
  'Nice to meet you'
  
  ]

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



// initializing text file with client contact numbers
var clientNumbers = fs.createWriteStream('numbers.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

// logger.write('some data') // append string to your file
// logger.write('more data') // again
// logger.write('and more') // again



client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize(); 


client.on('message', message => {


try {  
    // reading data from file with numbers 
    var data = fs.readFileSync('numbers.txt', 'utf8');
    // getting array of existin numbers from the file
    dataArr = data.toString().split(" ")

    if (!dataArr.includes(message.from)) {
  // writing contact number of client into text file 
  clientNumbers.write(message.from + " ")
    }
   // console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}

  


    let replyMsg = initialMessages[randomIntFromInterval(0, initialMessages.length - 1)]

   // console.log(message)

	if(message.body === '!ping') {
		message.reply('pong');
	} else {
        let delay = randomIntFromInterval(1000, 5500)
        setTimeout(message.reply(replyMsg), delay)
    }
});


/* 

Message {
  mediaKey: undefined,
  id: {
    fromMe: false,
    remote: '5219842382115@c.us',
    id: '3A60A5DA0DC0D88E4FAC',
    _serialized: 'false_5219842382115@c.us_3A60A5DA0DC0D88E4FAC'
  },
  ack: 0,
  hasMedia: false,
  body: 'I thought it was you \nHaha',
  type: 'chat',
  timestamp: 1644762710,
  from: '5219842382115@c.us',
  to: '998935297455@c.us',
  author: undefined,
  deviceType: 'ios',
  isForwarded: false,
  forwardingScore: 0,
  isStatus: false,
  isStarred: false,
  broadcast: false,
  fromMe: false,
  hasQuotedMsg: false,
  location: undefined,
  vCards: [],
  inviteV4: undefined,
  mentionedIds: [],
  orderId: undefined,
  token: undefined,
  isGif: false,
  isEphemeral: false,
  links: []
}



*/