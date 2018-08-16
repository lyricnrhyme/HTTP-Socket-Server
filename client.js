const net = require('net');

let hydrogen = require(".assets/hydrogen.js")

const client = net.createConnection(8080, '0.0.0.0', () => {
  client.on('data', data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);
});
